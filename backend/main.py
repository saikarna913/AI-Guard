from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
import requests
import os
import json
import re
from dotenv import load_dotenv  

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

# HuggingFace token
HUGGING_FACE_TOKEN = os.getenv("HUGGING_FACE_ACCESS_TOKEN")
DEFAULT_MODEL = "meta-llama/Llama-3.1-8B"  # 🔥 Your new model


# ========================= Request Models =========================

class AnalyzeRequest(BaseModel):
    text: str
    model: str | None = None
    language: str | None = None


# ========================= HF Inference (Router) =========================

def hf_infer(prompt: str, model: str = DEFAULT_MODEL):
    if not HUGGING_FACE_TOKEN:
        raise RuntimeError("HUGGING_FACE_ACCESS_TOKEN not configured")

    url = "https://router.huggingface.co/hf-inference/text"

    headers = {
        "Authorization": f"Bearer {HUGGING_FACE_TOKEN}",
        "Content-Type": "application/json",
    }

    payload = {
        "model": model,
        "inputs": prompt,
        "parameters": {
            "max_new_tokens": 200,
            "temperature": 0.1
        }
    }

    resp = requests.post(url, headers=headers, json=payload)

    if resp.status_code != 200:
        raise RuntimeError("HuggingFace Error: " + resp.text)

    return resp.json()


# ========================= /api/analyze =========================

@app.post("/api/analyze")
def analyze(req: AnalyzeRequest):
    print("📩 /api/analyze:", req.dict())

    if not req.text:
        raise HTTPException(400, "Text is required")

    #model = req.model or DEFAULT_MODEL
    model = DEFAULT_MODEL

    # Build the instruction for Llama
    prompt = (
        "Analyze the following text and return ONLY a JSON object with:\n"
        "category, safety, confidence, reasoning.\n\n"
        f'Text: "{req.text}"'
    )

    # Call HuggingFace
    try:
        resp = hf_infer(prompt, model=model)
    except Exception as e:
        print("❌ Inference Error:", e)
        raise HTTPException(500, str(e))

    # Extract generated text
    if isinstance(resp, list) and "generated_text" in resp[0]:
        generated = resp[0]["generated_text"]
    elif isinstance(resp, dict) and "generated_text" in resp:
        generated = resp["generated_text"]
    else:
        generated = str(resp)

    print("🧠 Model Output:", generated)

    # Try JSON extraction
    match = re.search(r"\{[\s\S]*\}", generated)
    if match:
        try:
            j = json.loads(match.group(0))
            return {
                "category": j.get("category", "Analysis"),
                "safety": j.get("safety", "unknown"),
                "score": float(j.get("confidence", 0.5)),
                "reasoning": j.get("reasoning", ""),
                "model_used": model,
                "language": req.language or "english",
                "timestamp": datetime.utcnow().isoformat() + "Z",
            }
        except:
            pass

    # Fallback (if JSON not found)
    fallback_safe = "unsafe" if re.search(r"hate|harm|violence", generated, re.I) else "safe"

    return {
        "category": "General Analysis",
        "safety": fallback_safe,
        "score": 0.7 if fallback_safe == "unsafe" else 0.3,
        "reasoning": generated[:300],
        "model_used": model,
        "language": req.language or "english",
        "timestamp": datetime.utcnow().isoformat() + "Z",
    }


# ========================= Run Server =========================

if __name__ == "__main__":
    import uvicorn
    print("🚀 Starting FastAPI on http://0.0.0.0:8000")
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
