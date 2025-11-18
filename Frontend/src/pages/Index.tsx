import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { analyzeText } from "@/integrations/backend/client";
import { useToast } from "@/hooks/use-toast";
import {
  AlertCircle,
  CheckCircle,
  Loader2,
  Shield,
} from "lucide-react";
import { ReactTransliterate, Language } from "react-transliterate";
import "react-transliterate/dist/index.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const langCodeMap: Record<string, Language> = {
  bengali: "bn",
  odia: "or",
  malayalam: "ml",
  kannada: "kn",
};

interface Result {
  category: string;
  safety: string;
  score: number;
  distribution?: Record<string, number>;
}
const CATEGORY_LABELS: Record<string, string> = {
  S1: "Violent Crimes",
  S2: "Non-Violent Crimes",
  S3: "Sex Crimes",
  S4: "Child Exploitation",
  S5: "Defamation",
  S6: "Specialized Advice",
  S7: "Privacy",
  S8: "Intellectual Property",
  S9: "Indiscriminate Weapons",
  S10: "Hate",
  S11: "Self-Harm",
  S12: "Sexual Content",
  S13: "Elections",
  S14: "Code Interpreter Abuse",
  S15: "Religious Intolerance",
  S16: "Gender-based Abuse",
  S17: "Trolling / Cyberbullying"
};

const COLORS = [
  "#6366F1", // Indigo
  "#8B5CF6", // Violet
  "#EC4899", // Pink
  "#F97316", // Orange
  "#F59E0B", // Amber
  "#10B981", // Emerald
  "#14B8A6", // Teal
  "#0EA5E9", // Sky Blue
  "#3B82F6", // Blue
  "#A855F7", // Purple
  "#22C55E", // Green
  "#84CC16", // Lime
  "#D946EF", // Fuchsia
  "#06B6D4", // Cyan
  "#EF4444", // Red
  "#F43F5E", // Rose
  "#EAB308", // Yellow
  "#4ADE80"  // Light Green
];

const Index = () => {
  const { toast } = useToast();
  const [text, setText] = useState<string>("");
  const [model, setModel] = useState<string>("gpt");
  const [language, setLanguage] = useState<string>("english");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<Result | null>(null);

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
      setResult(data as Result);
      toast({ title: "Success", description: "Text analyzed successfully" });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message || "Failed to analyze text",
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
              <Shield className="w-16 h-16 text-primary" aria-label="Shield Icon" />
            </div>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              AI-Guard(Text Analyzer)
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Analyze any text for content safety and categorization using our fine tuned State-of-the-art AI model.{" "}
              Choose your preferred model and language for accurate results.
            </p>
          </div>

          <Card className="p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Configure Analysis</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="model" className="mb-2 block">
                  Select AI Model
                </Label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger id="model" className="w-full">
                    <SelectValue placeholder="Choose a model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meta-llama/Llama-3.2-1B-Instruct">
                      Llama-3.2-1B
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="language" className="mb-2 block">
                  Select Language
                </Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="language" className="w-full">
                    <SelectValue placeholder="Choose a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bengali">Bengali</SelectItem>
                    <SelectItem value="odia">Odia</SelectItem>
                    <SelectItem value="malayalam">Malayalam</SelectItem>
                    <SelectItem value="kannada">Kannada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="text" className="mb-2 block">
                Enter Text to Analyze
              </Label>
              <ReactTransliterate
                value={text}
                onChangeText={setText}
                lang={langCodeMap[language] || ("en" as Language)}
                renderComponent={(props) => (
                  <Textarea
                    {...props}
                    placeholder="Type or paste your text here for analysis..."
                    className="min-h-[250px] w-full rounded-md border border-input bg-background px-3 py-2 text-base"
                    style={{ paddingTop: "0.5rem" }}
                  />
                )}
              />
            </div>

            <Button onClick={handleAnalyze} disabled={loading} size="lg" className="w-full">
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
      <CheckCircle className="w-8 h-8 text-primary" aria-label="Check Icon" />
      Analysis Results
    </h2>

    <div className="space-y-6">
      <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
        <div className="p-3 rounded-lg bg-primary/10">
          <Shield className="w-6 h-6 text-primary" aria-label="Shield Icon" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2 text-lg">Category</h3>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {result.category}
          </Badge>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
        <div
          className={`p-3 rounded-lg ${
            result.safety === "SAFE" ? "bg-green-500/10" : "bg-red-500/10"
          }`}
        >
          {result.safety === "SAFE" ? (
            <CheckCircle className="w-6 h-6 text-green-600" aria-label="Safe Icon" />
          ) : (
            <AlertCircle className="w-6 h-6 text-red-600" aria-label="Warning Icon" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2 text-lg">Safety Status</h3>
          <Badge
            variant={result.safety === "SAFE" ? "default" : "destructive"}
            className={`text-lg px-4 py-2 ${
              result.safety === "SAFE" 
                ? "bg-green-500 text-white" 
                : "bg-red-500 text-white"
            }`}
          >
            {result.safety.toUpperCase()}
          </Badge>
        </div>
      </div>

      {/* Distribution Section - Only show if distribution exists */}
      {result.distribution && Object.keys(result.distribution).length > 0 && (
        <div className="p-4 rounded-lg bg-primary/5">
          <h3 className="font-semibold mb-4 text-lg">Score Distribution</h3>

          <TooltipProvider delayDuration={0}>
            <div className="w-full flex h-5 rounded-xl overflow-hidden shadow-sm border border-primary/10">
              {Object.entries(result.distribution).map(([key, value], index) => {
                if (typeof value !== "number" || value <= 0) return null;

                const width = `${value * 100}%`;
                const color = COLORS[index % COLORS.length];
                const label = CATEGORY_LABELS[key] || key;

                return (
                  <div
                    key={key}
                    style={{
                      width,
                      backgroundColor: color,
                      opacity: 0.7,
                      transition: "width 0.4s ease",
                    }}
                    title={`${key}: ${label} — ${(value * 100).toFixed(1)}%`}
                  ></div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {Object.entries(result.distribution).map(([key, value], index) => {
                if (typeof value !== "number" || value <= 0) return null;

                const color = COLORS[index % COLORS.length];
                const label = CATEGORY_LABELS[key] || key;

                return (
                  <Badge
                    key={key}
                    className="px-3 py-1 rounded-lg shadow"
                    style={{
                      backgroundColor: color,
                      color: "white",
                    }}
                    title={label}
                  >
                    {key}: {(value * 100).toFixed(1)}%
                  </Badge>
                );
              })}
            </div>
          </TooltipProvider>
        </div>
      )}

      <div className="p-4 bg-muted/50 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          <strong>Model Used:</strong> {model.toUpperCase()} |{" "}
          <strong>Language:</strong> {language.charAt(0).toUpperCase() + language.slice(1)}
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