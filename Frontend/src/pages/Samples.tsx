import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Database } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Sample {
  id: string;
  text: string;
  category: string;
  safety: "safe" | "unsafe";
  description: string;
  language: string;
}

const Samples = () => {
  const samples: Sample[] = [
    {
      id: "safe_1",
      text: "I love spending time with my family on weekends. We often go hiking in the nearby mountains and enjoy nature.",
      category: "Positive Content",
      safety: "safe",
      description: "Wholesome content about family activities",
      language: "English",
    },
    {
      id: "safe_2",
      text: "The new restaurant in town has excellent service and delicious food. Highly recommend visiting!",
      category: "Positive Content",
      safety: "safe",
      description: "Genuine positive review",
      language: "English",
    },
    {
      id: "safe_3",
      text: "I am working on improving my skills in machine learning. Currently learning about neural networks and deep learning.",
      category: "Educational",
      safety: "safe",
      description: "Educational and constructive content",
      language: "English",
    },
    {
      id: "safe_4",
      text: "আমি একজন শিক্ষার্থী এবং আমি আমার পড়াশোনায় ভালো করতে চাই। আমার শিক্ষকরা খুবই সহায়ক।",
      category: "Educational",
      safety: "safe",
      description: "Bengali educational content about studies",
      language: "Bengali",
    },
    {
      id: "safe_5",
      text: "मुझे प्रोग्रामिंग सीखना बहुत पसंद है। यह एक बहुत ही रोचक विषय है और मैं हर दिन कुछ नया सीखता हूँ।",
      category: "Educational",
      safety: "safe",
      description: "Hindi content about programming interests",
      language: "Hindi",
    },
    {
      id: "unsafe_1",
      text: "I absolutely hate this group of people. They are the worst and deserve nothing but harm.",
      category: "Hate Speech",
      safety: "unsafe",
      description: "Hateful and derogatory content targeting a group",
      language: "English",
    },
    {
      id: "unsafe_2",
      text: "You are so stupid and worthless. Nobody likes you and you should just disappear.",
      category: "Harassment",
      safety: "unsafe",
      description: "Personal attacks and cyberbullying",
      language: "English",
    },
    {
      id: "unsafe_3",
      text: "I'm going to hurt you. Watch out because I know where you live.",
      category: "Threats",
      safety: "unsafe",
      description: "Explicit threats and intimidation",
      language: "English",
    },
    {
      id: "unsafe_4",
      text: "তুমি অত্যন্ত খারাপ মানুষ এবং তুমি যা কিছু করো তা সবই ভুল। তোমার কোন মূল্য নেই।",
      category: "Harassment",
      safety: "unsafe",
      description: "Bengali harmful and demeaning language",
      language: "Bengali",
    },
    {
      id: "neutral_1",
      text: "The weather is cloudy today. I wonder if it will rain in the evening.",
      category: "Neutral",
      safety: "safe",
      description: "Neutral observation about weather",
      language: "English",
    },
    {
      id: "neutral_2",
      text: "मेरे पास एक लाल किताब है। मैं इसे बहुत पसंद करता हूँ।",
      category: "Neutral",
      safety: "safe",
      description: "Hindi neutral statement about possessions",
      language: "Hindi",
    },
    {
      id: "misinformation_1",
      text: "Scientists have proven that vaccines cause autism. Don't believe the mainstream media propaganda.",
      category: "Misinformation",
      safety: "unsafe",
      description: "Spread of health misinformation",
      language: "English",
    },
  ];

  const safeSamples = samples.filter((s) => s.safety === "safe");
  const unsafeSamples = samples.filter((s) => s.safety === "unsafe");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
              <Database className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Dataset Samples</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Explore sample datasets used in training and evaluating the AI-Guard text classification model.
              These samples showcase different categories and safety classifications across multiple languages.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">All Samples ({samples.length})</TabsTrigger>
              <TabsTrigger value="safe">Safe Content ({safeSamples.length})</TabsTrigger>
              <TabsTrigger value="unsafe">Unsafe Content ({unsafeSamples.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid gap-6">
                {samples.map((sample) => (
                  <Card key={sample.id} className="p-6 border-l-4 border-l-primary">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {sample.safety === "safe" ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-red-600" />
                          )}
                          <Badge
                            variant={sample.safety === "safe" ? "default" : "destructive"}
                            className="text-sm"
                          >
                            {sample.safety.toUpperCase()}
                          </Badge>
                          <Badge variant="outline" className="text-sm">
                            {sample.language}
                          </Badge>
                        </div>
                        <Badge variant="secondary" className="mb-3">
                          {sample.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg mb-3">
                      <p className="text-sm text-foreground italic">"{sample.text}"</p>
                    </div>

                    <p className="text-sm text-muted-foreground">{sample.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="safe" className="space-y-6">
              <div className="grid gap-6">
                {safeSamples.map((sample) => (
                  <Card key={sample.id} className="p-6 border-l-4 border-l-green-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <Badge variant="default" className="text-sm">
                            SAFE
                          </Badge>
                          <Badge variant="outline" className="text-sm">
                            {sample.language}
                          </Badge>
                        </div>
                        <Badge variant="secondary" className="mb-3">
                          {sample.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg mb-3">
                      <p className="text-sm text-foreground italic">"{sample.text}"</p>
                    </div>

                    <p className="text-sm text-muted-foreground">{sample.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="unsafe" className="space-y-6">
              <div className="grid gap-6">
                {unsafeSamples.map((sample) => (
                  <Card key={sample.id} className="p-6 border-l-4 border-l-red-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                          <Badge variant="destructive" className="text-sm">
                            UNSAFE
                          </Badge>
                          <Badge variant="outline" className="text-sm">
                            {sample.language}
                          </Badge>
                        </div>
                        <Badge variant="secondary" className="mb-3">
                          {sample.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg mb-3">
                      <p className="text-sm text-foreground italic">"{sample.text}"</p>
                    </div>

                    <p className="text-sm text-muted-foreground">{sample.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="mt-12 p-8 bg-primary/5">
            <h2 className="text-2xl font-bold mb-4">About Our Dataset</h2>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Coverage</h3>
                <p>
                  Our dataset covers multiple languages including English, Bengali, Hindi, Odia, Malayalam, and Kannada.
                  This ensures our model can effectively classify content across diverse linguistic contexts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Categories</h3>
                <p>
                  We classify content into categories such as: Positive Content, Educational, Neutral, Hate Speech,
                  Harassment, Threats, Misinformation, and more.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Size</h3>
                <p>
                  Training dataset consists of thousands of manually annotated examples across all languages and
                  categories with inter-annotator agreement verification.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Quality</h3>
                <p>
                  Each sample has been carefully curated and verified by subject matter experts to ensure accuracy
                  and relevance to real-world content moderation scenarios.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Samples;
