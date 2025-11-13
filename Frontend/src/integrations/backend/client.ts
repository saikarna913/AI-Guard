const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

export async function analyzeText(payload: { model: string; language: string; text: string }) {
  const res = await fetch(`${API_BASE}/api/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    let message = text;
    try {
      const json = JSON.parse(text);
      message = json.detail || json.error || JSON.stringify(json);
    } catch (_) {}
    throw new Error(message || "Failed to analyze text");
  }

  return await res.json();
}

export async function sendContactEmail(formData: { name: string; email: string; message: string }) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    const text = await res.text();
    let message = text;
    try {
      const json = JSON.parse(text);
      message = json.detail || json.error || JSON.stringify(json);
    } catch (_) {}
    throw new Error(message || "Failed to send message");
  }

  return await res.json();
}

export default { analyzeText, sendContactEmail };
