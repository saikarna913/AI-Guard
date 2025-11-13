import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { analyzeText } from "@/integrations/backend/client";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle, Loader2, Shield, ChevronDown } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [text, setText] = useState("");
  const [model, setModel] = useState("gpt");
  const [language, setLanguage] = useState("english");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    category: string;
    safety: string;
    score: number;
  } | null>(null);

  const handleAnalyze = async () => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to analyze",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const data = await analyzeText({ model, language, text });

      setResult(data as any);
      toast({ title: "Success", description: "Text analyzed successfully" });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to analyze text",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-1000">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
              <Shield className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              AI-Guard(Text Analyzer)
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Analyze any text for content safety and categorization using our fine tuned State-of-the-art AI model. 
              Choose your preferred model and language for accurate results.
            </p>
          </div>

          <Card className="p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Configure Analysis</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="model" className="mb-2 block">Select AI Model</Label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger id="model" className="w-full">
                    <SelectValue placeholder="Choose a model" />
                    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Llama-3.2-1B">GPT (OpenAI)</SelectItem>
                    <SelectItem value="llama">LLaMA (Meta)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="language" className="mb-2 block">Select Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="language" className="w-full">
                    <SelectValue placeholder="Choose a language" />
                    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bengali">Bengali</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="odia">Odia</SelectItem>
                    <SelectItem value="malayalam">Malayalam</SelectItem>
                    <SelectItem value="kannada">Kannada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="text" className="mb-2 block">Enter Text to Analyze</Label>
              <Textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type or paste your text here for analysis..."
                className="min-h-[250px] text-base"
              />
            </div>

            <Button 
              onClick={handleAnalyze} 
              disabled={loading}
              size="lg"
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5 mr-2" />
                  Analyze Text
                </>
              )}
            </Button>
          </Card>

          {result && (
            <Card className="p-8 animate-in fade-in-50 duration-500 shadow-lg border-2 border-primary/20">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-primary" />
                Analysis Results
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-lg">Category</h3>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      {result.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                  <div className={`p-3 rounded-lg ${
                    result.safety === "safe" 
                      ? "bg-green-500/10" 
                      : "bg-red-500/10"
                  }`}>
                    {result.safety === "safe" ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-red-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-lg">Safety Status</h3>
                    <Badge 
                      variant={result.safety === "safe" ? "default" : "destructive"}
                      className="text-lg px-4 py-2"
                    >
                      {result.safety.toUpperCase()}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-lg">Confidence Score</h3>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-secondary rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-primary h-full rounded-full transition-all duration-500"
                          style={{ width: `${result.score * 100}%` }}
                        />
                      </div>
                      <span className="text-lg font-bold">
                        {(result.score * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Model Used:</strong> {model.toUpperCase()} | <strong>Language:</strong> {language.charAt(0).toUpperCase() + language.slice(1)}
                  </p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
