import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code, Server, Lock, Zap } from "lucide-react";

const API = () => {
  const requestExample = `POST /api/analyze
Content-Type: application/json

{
  "model": "gpt",
  "language": "english",
  "text": "Hello world"
}`;

  const pythonSDKExample = `from textanalyzer import TextAnalyzer

# Initialize the client
client = TextAnalyzer(api_key="your_api_key")

# Analyze text
result = client.analyze(
    text="Hello world",
    model="gpt",
    language="english"
)

print(result.category)  # Output: Positive Content
print(result.safety)    # Output: safe
print(result.score)     # Output: 0.95`;

  const responseSchema = `{
  "category": "string",       // The content category
  "safety": "string",         // Either "safe" or "unsafe"
  "score": "number",          // Confidence score (0-1)
  "originalLabel": "string",  // Raw model output
  "model_used": "string",     // Model that processed the request
  "language": "string",       // Language used for analysis
  "timestamp": "string"       // ISO 8601 timestamp
}`;

  const errorExample = `{
  "error": "Invalid input: text is required",
  "code": "MISSING_TEXT",
  "status": 400
}

{
  "error": "Model not found",
  "code": "INVALID_MODEL",
  "status": 400
}

{
  "error": "Rate limit exceeded",
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
            <h1 className="text-5xl font-bold mb-4">API Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Complete reference for integrating text analysis into your applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Server className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">RESTful API</h3>
              <p className="text-sm text-muted-foreground">Simple HTTP endpoints for easy integration</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Secure</h3>
              <p className="text-sm text-muted-foreground">Enterprise-grade security and encryption</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Fast</h3>
              <p className="text-sm text-muted-foreground">Low latency responses under 100ms</p>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Endpoint</h2>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <code className="text-lg">POST https://your-domain.com/api/analyze</code>
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
                      <td className="py-3 px-4">The text to analyze</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4"><code>model</code></td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">AI model (gpt, bert, llama, gemini, claude)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4"><code>language</code></td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">Language of the text</td>
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
              <h2 className="text-3xl font-bold mb-6">Python SDK Example</h2>
              <p className="text-muted-foreground mb-4">
                Use our official Python SDK for simplified integration:
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
                The API returns standard HTTP status codes and error messages:
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

            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-bold mb-4">Rate Limits</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Free Tier:</strong> 100 requests per day</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Pro Tier:</strong> 10,000 requests per day</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Enterprise:</strong> Unlimited requests with dedicated support</span>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default API;
