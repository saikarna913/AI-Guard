const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

/*export async function analyzeText(payload: { model: string; language: string; text: string }) {
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
*/
export async function analyzeText(payload: { model: string; language: string; text: string }) {
  console.log('Sending request...', {
    textLength: payload.text.length,
    model: payload.model,
    language: payload.language
  });

  // --- API CALL REMOVED ----------------------
  /*
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5 * 60 * 1000);

  try {
    const startTime = Date.now();
    const res = await fetch(`http://34.59.15.159:5000/infer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: payload.text }),
      signal: controller.signal,
      mode: 'cors'
    });

    clearTimeout(timeout);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Server error: ${res.status}`);
    }

    const responseData = await res.json();
  */
  // -------------------------------------------

  // Hardcoded mock response
  const responseData = {
    result: "{\"S1\": 0.16666666666666666, \"S2\": 0.16666666666666666, \"S3\": 0.16666666666666666, \"S4\": 0.16666666666666666, \"S5\": 0, \"S6\": 0.16666666666666666, \"S7\": 0.16666666666666666, \"S8\": 0, \"S9\": 0, \"S10\": 0, \"S11\": 0, \"S12\": 0.16666666666666666, \"S13\": 0, \"S14\": 0, \"S15\": 0, \"S16\": 0, \"S17\": 0.16666666666666666}"
  };

  console.log("Hardcoded server response:", responseData);

  // Parse nested JSON string
  let parsedResult;
  if (typeof responseData.result === "string") {
    parsedResult = JSON.parse(responseData.result);
  } else {
    parsedResult = responseData.result;
  }

  const { category, safety, score } = calculateResults(parsedResult);

  const formattedResponse = {
    distribution: parsedResult,
    category,
    safety,
    score
  };

  console.log("Formatted response:", formattedResponse);
  return formattedResponse;
}

// Helper function
function calculateResults(distribution: Record<string, number>) {
  const highestCategory = Object.entries(distribution).reduce(
    (max, [key, value]) => value > max.value ? { key, value } : max,
    { key: "", value: 0 }
  );

  const safeCategories = [
    'S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','S11','S12','S13','S14','S15','S16','S17'
  ];

  return {
    category: `Category ${highestCategory.key}`,
    safety: safeCategories.includes(highestCategory.key) ? "safe" : "unsafe",
    score: highestCategory.value
  };
}


export async function classifyText(payload: { model?: string; text: string }) {
  const res = await fetch(`${API_BASE}/api/classify`, {
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
    throw new Error(message || "Failed to classify text");
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

export default { analyzeText, classifyText, sendContactEmail };