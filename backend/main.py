from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import requests
from datetime import datetime
from dotenv import load_dotenv
import uvicorn
import json
import re

# Load .env file
load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

HUGGING_FACE_TOKEN = os.getenv("HUGGING_FACE_ACCESS_TOKEN")
RESEND_API_KEY = os.getenv("RESEND_API_KEY")

class AnalyzeRequest(BaseModel):
    text: str
    model: str | None = None
    language: str | None = None

class ClassifyRequest(BaseModel):
    text: str

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

def hf_classify(text: str, model: str = "distilbert/distilbert-base-uncased-finetuned-sst-2-english"):
    if not HUGGING_FACE_TOKEN:
        raise RuntimeError("HUGGING_FACE_ACCESS_TOKEN not configured")

    # Updated to current router endpoint (api-inference deprecated)
    url = f"https://router.huggingface.co/hf-inference/models/{model}"
    headers = {"Authorization": f"Bearer {HUGGING_FACE_TOKEN}", "Content-Type": "application/json"}
    payload = {"inputs": text}
    resp = requests.post(url, headers=headers, json=payload, timeout=30)
    
    if resp.status_code == 503:
        raise RuntimeError("Model is loading—retry in 30 seconds")
    if resp.status_code != 200:
        raise RuntimeError(f"HuggingFace API error: {resp.status_code} {resp.text}")
    
    return resp.json()

def hf_analyze(prompt: str, model: str = "meta-llama/Llama-3.2-1B-Instruct"):
    if not HUGGING_FACE_TOKEN:
        raise RuntimeError("HUGGING_FACE_ACCESS_TOKEN not configured")

    # Use chat completions endpoint for generative analysis
    url = "https://router.huggingface.co/v1/chat/completions"
    headers = {"Authorization": f"Bearer {HUGGING_FACE_TOKEN}", "Content-Type": "application/json"}
    payload = {
        "model": model,
        "messages": [{"role": "user", "content": prompt}],
        "stream": False,
        "max_tokens": 200,
        "temperature": 0.1,
    }
    resp = requests.post(url, headers=headers, json=payload, timeout=30)
    
    if resp.status_code == 503:
        raise RuntimeError("Model is loading—retry in 30 seconds")
    if resp.status_code != 200:
        raise RuntimeError(f"HuggingFace API error: {resp.status_code} {resp.text}")
    
    return resp.json()

@app.post("/api/analyze")
def analyze(req: AnalyzeRequest):
    if not req.text or not isinstance(req.text, str):
        raise HTTPException(status_code=400, detail="Invalid input: text is required")

    try:
        # Use Llama for advanced analysis (prompt-based JSON output)
        #model = req.model or "meta-llama/Llama-3.2-1B-Instruct"
        model = "meta-llama/Llama-3.2-1B-Instruct"
        analysis_prompt = (
            "Analyze the following text for content safety and classify it. Respond ONLY with a JSON object in this exact format (no markdown, no code blocks):\n"
            "{\n"
            '  "category": "category name",\n'
            '  "safety": "safe or unsafe",\n'
            '  "confidence": 0.0-1.0,\n'
            '  "reasoning": "brief explanation"\n'
            "}\n"
            f'Text: "{req.text}"'
        )
        result = hf_analyze(analysis_prompt, model=model)
        
        # Parse chat response
        generated_text = ""
        if result.get("choices") and len(result["choices"]) > 0:
            generated_text = result["choices"][0].get("message", {}).get("content", "")
        else:
            generated_text = str(result)
        
        # Extract JSON from generated text
        json_match = re.search(r'\{[\s\S]*\}', generated_text)
        if json_match:
            try:
                extracted = json.loads(json_match.group(0))
                return {
                    "category": extracted.get("category", "Content Analysis"),
                    "safety": extracted.get("safety", "unknown"),
                    "score": float(extracted.get("confidence", 0.5)) or 0.5,
                    "reasoning": extracted.get("reasoning", ""),
                    "model_used": model,
                    "language": req.language or "english",
                    "timestamp": datetime.utcnow().isoformat() + "Z",
                }
            except json.JSONDecodeError:
                pass
        
        # Fallback: Heuristic based on generated text
        safety = "unsafe" if re.search(r"unsafe|harmful|inappropriate|offensive", generated_text, re.I) else "safe"
        return {
            "category": "Content Analysis",
            "safety": safety,
            "score": 0.7 if safety == "unsafe" else 0.3,
            "reasoning": generated_text[:300] + "..." if len(generated_text) > 300 else generated_text,
            "model_used": model,
            "language": req.language or "english",
            "timestamp": datetime.utcnow().isoformat() + "Z",
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/classify")
def classify(req: ClassifyRequest):
    if not req.text or not isinstance(req.text, str):
        raise HTTPException(status_code=400, detail="Invalid input: text is required")

    try:
        result = hf_classify(req.text)
        top = result[0] if isinstance(result, list) and len(result) > 0 else result
        label = top.get("label", "UNKNOWN")
        score = float(top.get("score", 0))

        safety = "safe" if label == "POSITIVE" else "unsafe"
        category = "Positive Content" if label == "POSITIVE" else "Negative Content"

        return {
            "category": category,
            "safety": safety,
            "score": score,
            "originalLabel": label,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/contact")
def contact(req: ContactRequest):
    if not req.name or not req.email or not req.message:
        raise HTTPException(status_code=400, detail="All fields are required")

    if not RESEND_API_KEY:
        raise HTTPException(status_code=500, detail="RESEND_API_KEY not configured")

    headers = {
        "Authorization": f"Bearer {RESEND_API_KEY}",
        "Content-Type": "application/json",
    }

    admin_payload = {
        "from": "Text Analyzer <onboarding@resend.dev>",
        "to": ["pardheevsai@gmail.com"],
        "subject": f"New Contact Form Submission from {req.name}",
        "html": f"<h2>New Contact Form Submission</h2><p><strong>Name:</strong> {req.name}</p><p><strong>Email:</strong> {req.email}</p><p><strong>Message:</strong></p><p>{req.message}</p>",
    }

    resp_admin = requests.post("https://api.resend.com/emails", headers=headers, json=admin_payload, timeout=30)
    if not resp_admin.ok:
        raise HTTPException(status_code=500, detail=f"Failed to send admin email: {resp_admin.text}")

    user_payload = {
        "from": "Text Analyzer <onboarding@resend.dev>",
        "to": [req.email],
        "subject": "Thank you for contacting us!",
        "html": f"<h1>Thank you for reaching out, {req.name}!</h1><p>We have received your message and will get back to you as soon as possible.</p><p><strong>Your message:</strong></p><p style=\"background: #f5f5f5; padding: 15px; border-radius: 5px;\">{req.message}</p>",
    }

    resp_user = requests.post("https://api.resend.com/emails", headers=headers, json=user_payload, timeout=30)
    if not resp_user.ok:
        raise HTTPException(status_code=500, detail=f"Failed to send confirmation email: {resp_user.text}")

    return {"success": True, "message": "Email sent successfully"}

# Run the server
if __name__ == "__main__":
    print("🚀 Starting FastAPI server on http://0.0.0.0:8000")
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)