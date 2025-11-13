import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Book, Code2 } from "lucide-react";

const Usage = () => {
  const pythonExample = `import requests

# API endpoint
url = "https://your-backend-url/api/analyze"

# Request payload
payload = {
    "model": "gpt",
    "language": "english",
    "text": "Your text to analyze goes here"
}

# Make the request
response = requests.post(url, json=payload)

# Get the result
result = response.json()
print(result)
# Output: {"category": "...", "safety": "safe", "score": 0.95}`;

  const jsExample = `// Using fetch API
const analyzeText = async () => {
  const response = await fetch('https://your-backend-url/api/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt',
      language: 'english',
      text: 'Your text to analyze goes here'
    })
  });
  
  const result = await response.json();
  console.log(result);
  // Output: {"category": "...", "safety": "safe", "score": 0.95}
};

analyzeText();`;

  const curlExample = `curl -X POST https://your-backend-url/api/analyze \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt",
    "language": "english",
    "text": "Your text to analyze goes here"
  }'`;

  const responseExample = `{
  "category": "Positive Content",
  "safety": "safe",
  "score": 0.95,
  "originalLabel": "POSITIVE",
  "model_used": "gpt",
  "language": "english",
  "timestamp": "2024-03-21T10:30:00Z"
}`;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
              <Book className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-4">How to Use the API</h1>
            <p className="text-xl text-muted-foreground">
              Integrate our text analysis API into your applications with these simple examples
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Python Example</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Use the requests library to make API calls from Python applications:
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
                  {pythonExample}
                </SyntaxHighlighter>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">JavaScript Example</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Use the Fetch API for browser-based or Node.js applications:
              </p>
              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="javascript" 
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                  }}
                >
                  {jsExample}
                </SyntaxHighlighter>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">cURL Example</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Test the API directly from the command line:
              </p>
              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="bash" 
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                  }}
                >
                  {curlExample}
                </SyntaxHighlighter>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Expected Response</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                The API returns a JSON response with the analysis results:
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
                  {responseExample}
                </SyntaxHighlighter>
              </div>
            </Card>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-bold mb-4">Important Notes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Replace <code className="bg-muted px-2 py-1 rounded text-sm">your-backend-url</code> with your actual API endpoint</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>All requests must be made using POST method</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Content-Type header must be set to application/json</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>The confidence score ranges from 0 to 1 (displayed as percentage)</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Usage;
