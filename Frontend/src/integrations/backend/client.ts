import emailjs from "emailjs-com";

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
  console.log("Sending request...", {
    textLength: payload.text.length,
    model: payload.model,
    language: payload.language
  });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5 * 60 * 1000);

  try {
    const res = await fetch("http://10.0.62.205:5000/infer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: payload.text }),
      signal: controller.signal,
      mode: "cors"
    });

    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const responseData = await res.json();
    console.log("Server response:", responseData);

    // CASE 1: SAFE → no distribution
    if (responseData.result === "SAFE") {
      return {
        distribution: null,
        category: "SAFE",
        safety: "SAFE",
        score: 1
      };
    }
console.log("Parsing distribution for UNSAFE case...");
    // CASE 2: UNSAFE → parse distribution text
    const parsedDistribution = responseData.multiclass_output;
console.log("Parsed distribution:", parsedDistribution);
    const { category, score, probabilities } = calculateResults(parsedDistribution);
    console.log({
      distribution: probabilities,
      category,
      safety: responseData.result,
      score
    });

    return {
      distribution: probabilities,
      category,
      safety: responseData.result,
      score
    };

  } catch (err: any) {
    clearTimeout(timeout);
    if (err.name === "AbortError") {
      throw new Error("Request timed out.");
    }
    throw err;
  }

}

// Convert "S1: 0.25, S2: 0.25 ..." → { S1: 0.25, S2: 0.25, ... }
function parseDistributionString(str: string): Record<string, number> {
  const obj: Record<string, number> = {};
  str.split(",").forEach(part => {
    const [key, value] = part.split(":").map(x => x.trim());
    obj[key] = parseFloat(value);
  });
  return obj;
}

function calculateResults(distribution: Record<string, number>) {
  const total = Object.values(distribution).reduce((a, b) => a + b, 0);

  const probabilities =
    total === 0
      ? Object.fromEntries(Object.keys(distribution).map(k => [k, 0]))
      : Object.fromEntries(
          Object.entries(distribution).map(([k, v]) => [k, v / total])
        );

  let highest = { key: "", value: 0 };

  for (const [key, value] of Object.entries(probabilities)) {
    if (value > highest.value) highest = { key, value };
  }

  return {
    probabilities,
    category: highest.key,
    score: highest.value
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



export async function sendContactEmail(formData: {
  name: string;
  email: string;
  message: string;
  title?: string; // Optional title field
}) {
  try {
    const serviceID = "service_0p4zwpm";
    const templateID = "template_lfkaquu";
    const publicKey = "lozWVbg2SnXG98VTP";

    const templateParams = {
      to_email: "aiguard47@gmail.com",
      name: formData.name,      // Should map to {{name}} in template
      email: formData.email,    // Should map to {{email}} in template
      message: formData.message, // Should map to {{message}} in template
      time: new Date().toLocaleString(), // Add current time
      title: formData.title || "New Contact Form Submission" // Add title
    };

    const result = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      publicKey
    );

    return { success: true, result };
  } catch (error: any) {
    throw new Error(error?.text || "Failed to send email");
  }
}


export default { analyzeText, classifyText, sendContactEmail };
