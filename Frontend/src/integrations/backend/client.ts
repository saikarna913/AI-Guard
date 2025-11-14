const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

const HF_TOKEN = import.meta.env.VITE_HF_TOKEN ?? "";

export async function analyzeText(payload: { model?: string; language?: string; text: string }) {
  // Call the local backend proxy which performs Hugging Face requests server-side.
  // This avoids exposing the HF token and prevents CORS issues and model access restrictions.
  const url = `${API_BASE}/api/analyze`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: payload.text, model: payload.model, language: payload.language }),
  });

  const data = await res.json();

  if (!res.ok) {
    const message = data?.detail || data?.error || JSON.stringify(data);
    throw new Error(message || `Backend analyze failed: ${res.status}`);
  }

  return data;
}

export async function classifyText(payload: { model?: string; text: string }) {
  const url = `${API_BASE}/api/classify`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: payload.text, model: payload.model }),
  });

  const data = await res.json();
  if (!res.ok) {
    const message = data?.detail || data?.error || JSON.stringify(data);
    throw new Error(message || `Backend classify failed: ${res.status}`);
  }

  return data;
}

export async function sendContactEmail(formData: { name: string; email: string; message: string }) {
  const url = `${API_BASE}/api/contact`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  if (!res.ok) {
    const message = data?.detail || data?.error || JSON.stringify(data);
    // Fallback to opening mail client if backend contact not configured
    if (message && /RESEND_API_KEY not configured/i.test(String(message))) {
      const subject = encodeURIComponent("Contact from AI-Guard website");
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      window.location.href = `mailto:${import.meta.env.VITE_ADMIN_EMAIL || "pardheevsai@gmail.com"}?subject=${subject}&body=${body}`;
      return { success: true, message: "Opened mail client as fallback." };
    }
    throw new Error(message || `Backend contact failed: ${res.status}`);
  }

  return data;
}

export default { analyzeText, sendContactEmail };
