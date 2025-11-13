import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code, Server, Lock, Zap } from "lucide-react";

const API = () => {
  const requestExample = `POST https://api-inference.huggingface.co/models/unityai-guard-v2
Content-Type: application/json
Authorization: Bearer <your_huggingface_token>

{
  "inputs": {
    "text": "I hate you",
    "language": "english"
  }
}`;

  const pythonSDKExample = `import requests

API_URL = "https://api-inference.huggingface.co/models/unityai-guard-v2"
headers = {"Authorization": "Bearer YOUR_HF_TOKEN"}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

# Example
data = query({
    "inputs": {
        "text": "I hate you",
        "language": "english"
    }
})

print(data)

# Example Output:
# {
#   "binary_label": "HARMFUL",
#   "categories": {"S1": 0.52, "S10": 0.31, "S17": 0.17},
#   "top_classes": ["Violent Crimes", "Hate", "Trolling/Cyberbullying"],
#   "language": "english",
#   "model_used": "unityai-guard-v2"
# }`;

  const responseSchema = `{
  "binary_label": "string",            // Either "SAFE" or "HARMFUL"
  "categories": { "S1": "float", ...}, // Softmax distribution across 17 safety categories
  "top_classes": ["string"],           // Top 3 most probable harm categories
  "confidence": "float",               // Overall harm confidence
  "language": "string",                // Language detected/analyzed
  "model_used": "string",              // Model identifier (e.g. unityai-guard-v2)
  "timestamp": "string"                // ISO 8601 timestamp
}`;

  const errorExample = `{
  "error": "Invalid input: text field missing",
  "code": "MISSING_TEXT",
  "status": 400
}

{
  "error": "Model loading in progress, please retry",
  "code": "MODEL_LOADING",
  "status": 503
}

{
  "error": "Rate limit exceeded for HuggingFace API",
  "code": "RATE_LIMIT",
  "status": 429
}`;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
              <Code className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-4">UnityAI-Guard v2 API</h1>
            <p className="text-xl text-muted-foreground">
              Multilingual Toxicity Detection with Fine-Grained Safety Categorization — Deployed on Hugging Face
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Server className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Hugging Face Endpoint</h3>
              <p className="text-sm text-muted-foreground">Easily access the model via the Hugging Face Inference API</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Secure Access</h3>
              <p className="text-sm text-muted-foreground">Use your Hugging Face access token for authorization</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Fast Inference</h3>
              <p className="text-sm text-muted-foreground">Optimized QLoRA adapters for low-latency prediction</p>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Endpoint</h2>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <code className="text-lg">POST https://api-inference.huggingface.co/models/unityai-guard-v2</code>
              </div>

              <h3 className="text-xl font-bold mb-4 mt-8">Request Format</h3>
              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="http" 
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                  }}
                >
                  {requestExample}
                </SyntaxHighlighter>
              </div>

              <h3 className="text-xl font-bold mb-4 mt-8">Request Parameters</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Parameter</th>
                      <th className="text-left py-3 px-4">Type</th>
                      <th className="text-left py-3 px-4">Required</th>
                      <th className="text-left py-3 px-4">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4"><code>text</code></td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">The input text to analyze for toxicity</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4"><code>language</code></td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">Language code (e.g. "english", "bengali", "odia", "malayalam", "kannada")</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Response Schema</h2>
              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="json" 
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                  }}
                >
                  {responseSchema}
                </SyntaxHighlighter>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Python Example</h2>
              <p className="text-muted-foreground mb-4">
                Call the UnityAI-Guard v2 model directly from your Python code using the Hugging Face Inference API:
              </p>
              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="python" 
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                  }}
                >
                  {pythonSDKExample}
                </SyntaxHighlighter>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Error Handling</h2>
              <p className="text-muted-foreground mb-4">
                The API returns standard Hugging Face error messages and HTTP status codes:
              </p>
              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="json" 
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                  }}
                >
                  {errorExample}
                </SyntaxHighlighter>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default API;
