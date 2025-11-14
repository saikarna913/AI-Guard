const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";
const HF_TOKEN = import.meta.env.VITE_HF_TOKEN ?? "";

export async function analyzeText(payload: { model: string; language: string; text: string }) {
  // Direct Hugging Face Inference API call using Llama-3.2-1B-Instruct (chat completions)
  // NOTE: Exposing HF token in client-side env is insecure for production.
  if (!HF_TOKEN) {
    throw new Error("VITE_HF_TOKEN is not set in the frontend environment");
  }
  // Use Llama-3.2-1B-Instruct model for text analysis (Instruct variant for better prompting)
  const model = "meta-llama/Llama-3.2-1B-Instruct";
  const url = "https://router.huggingface.co/v1/chat/completions";  // Updated to OpenAI-compatible router

  // Craft a prompt for content safety analysis
  const analysisPrompt = `Analyze the following text for content safety and classify it. Respond ONLY with a JSON object in this exact format (no markdown, no code blocks):
{
  "category": "category name",
  "safety": "safe or unsafe",
  "confidence": 0.0-1.0,
  "reasoning": "brief explanation"
}
Text: "${payload.text}"`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${HF_TOKEN}`,
    },
    body: JSON.stringify({
      model: model,  // Model in payload for router
      messages: [
        { role: "user", content: analysisPrompt }  // Chat format
      ],
      stream: false,
      max_tokens: 200,  // Equivalent to max_new_tokens
      temperature: 0.3,
      top_p: 0.9,
    }),
  });

  const text = await res.text();
  if (!res.ok) {
    // Try to parse structured error
    let message = text;
    try {
      const j = JSON.parse(text);
      message = j.error || j.message || JSON.stringify(j);
    } catch (_) {}
    throw new Error(message || `HuggingFace inference failed: ${res.status}`);
  }

  // Attempt to parse model response
  try {
    const json = JSON.parse(text);
    // Chat completions return { choices[0].message.content }
    if (json.choices && json.choices[0] && json.choices[0].message?.content) {
      const generatedText = json.choices[0].message.content || "";
      
      // Extract JSON from the generated text (model may include prompt in output)
      const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          const extracted = JSON.parse(jsonMatch[0]);
          return {
            category: extracted.category || "Content Analysis",
            safety: extracted.safety || "unknown",
            score: parseFloat(extracted.confidence || 0.5) || 0.5,
            reasoning: extracted.reasoning || "",
            model_used: model,
            language: payload.language || "english",
            timestamp: new Date().toISOString(),
          };
        } catch (_) {
          // If JSON extraction fails, parse the text response
          const safety = /unsafe|harmful|inappropriate|offensive/i.test(generatedText) ? "unsafe" : "safe";
          return {
            category: "Content Analysis",
            safety: safety,
            score: safety === "unsafe" ? 0.7 : 0.3,
            reasoning: generatedText.substring(0, 200),
            model_used: model,
            language: payload.language || "english",
            timestamp: new Date().toISOString(),
          };
        }
      }
    }
    // If no structured response, use heuristic analysis
    const responseText = JSON.stringify(json);
    const safety = /unsafe|harmful|inappropriate|offensive/i.test(responseText) ? "unsafe" : "safe";
    return {
      category: "Content Analysis",
      safety: safety,
      score: safety === "unsafe" ? 0.7 : 0.3,
      reasoning: "Heuristic analysis based on response",
      model_used: model,
      language: payload.language || "english",
      timestamp: new Date().toISOString(),
    };
  } catch (err) {
    // Fallback error response
    return {
      category: "Content Analysis",
      safety: "unknown",
      score: 0.5,
      reasoning: "Error parsing response",
      model_used: model,
      language: payload.language || "english",
      timestamp: new Date().toISOString(),
      error: String(err),
    };
  }
}

export async function classifyText(payload: { model?: string; text: string }) {
  // Use Hugging Face classification model (updated router endpoint)
  const HF = import.meta.env.VITE_HF_TOKEN ?? "";
  if (!HF) throw new Error("VITE_HF_TOKEN is not set in the frontend environment");
  const model = payload.model || "distilbert-base-uncased-finetuned-sst-2-english";
  const url = `https://router.huggingface.co/hf-inference/models/${encodeURIComponent(model)}`;  // Updated router

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${HF}`,
    },
    body: JSON.stringify({ inputs: payload.text }),  // Legacy payload works on router
  });

  const txt = await res.text();
  if (!res.ok) {
    let message = txt;
    try {
      const j = JSON.parse(txt);
      message = j.error || j.message || JSON.stringify(j);
    } catch (_) {}
    throw new Error(message || `HuggingFace inference failed: ${res.status}`);
  }

  try {
    const json = JSON.parse(txt);
    if (Array.isArray(json) && json[0]?.label) {
      const top = json[0];
      const label = top.label || "UNKNOWN";
      const score = parseFloat(top.score || 0);
      const safety = label === "POSITIVE" || /safe/i.test(label) ? "safe" : "unsafe";
      const category = label === "POSITIVE" ? "Positive Content" : label;
      return { category, safety, score, originalLabel: label };
    }
    return json;
  } catch {
    return { category: "Unknown", safety: "unknown", score: 0 };
  }
}

export async function sendContactEmail(formData: { name: string; email: string; message: string }) {
  // Send email from client using EmailJS REST API.
  // Requires these env vars in Frontend/.env:
  // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
  const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
  const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
  const PUBLIC = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";
  if (!SERVICE || !TEMPLATE || !PUBLIC) {
    // Fallback: open mail client
    const subject = encodeURIComponent("Contact from AI-Guard website");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${import.meta.env.VITE_ADMIN_EMAIL || "pardheevsai@gmail.com"}?subject=${subject}&body=${body}`;
    return { success: true, message: "Opened mail client as fallback." };
  }
  const payload = {
    service_id: SERVICE,
    template_id: TEMPLATE,
    user_id: PUBLIC,
    template_params: {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
  };
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const txt = await res.text();
    let message = txt;
    try {
      const j = JSON.parse(txt);
      message = j.error || j.message || JSON.stringify(j);
    } catch (_) {}
    throw new Error(message || `EmailJS failed: ${res.status}`);
  }
  return { success: true, message: "Message sent via EmailJS" };
}

export default { analyzeText, classifyText, sendContactEmail };  // Added classifyText to export