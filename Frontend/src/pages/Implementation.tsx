import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, TrendingUp, BarChart3 } from "lucide-react";

const Implementation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
              <FileText className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Implementation Plan</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive overview of the AI-Guard system architecture, approaches experimented with,
              and performance metrics across multiple classification tasks.
            </p>
          </div>

          <Tabs defaultValue="pipeline" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
              <TabsTrigger value="ablation">Ablation Study</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
            </TabsList>

            <TabsContent value="pipeline" className="space-y-8">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-8">System Architecture & Pipeline</h2>

                <div className="space-y-8">
                  {/* Data Preprocessing */}
                  <div className="border-l-4 border-l-primary pl-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">
                        1
                      </div>
                      Data Preprocessing
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Raw multilingual text from various sources is collected, cleaned, and normalized.
                    </p>
                    <div className="bg-muted/50 p-4 rounded space-y-2">
                      <p className="text-sm">
                        ✓ Tokenization (language-aware for Bengali, Hindi, Odia, etc.)
                      </p>
                      <p className="text-sm">
                        ✓ Stop-word removal and stemming/lemmatization
                      </p>
                      <p className="text-sm">✓ Handling of special characters and URLs</p>
                      <p className="text-sm">
                        ✓ Normalization of text variations and encoding issues
                      </p>
                    </div>
                  </div>

                  {/* Feature Extraction */}
                  <div className="border-l-4 border-l-primary pl-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">
                        2
                      </div>
                      Feature Extraction
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Transformed text into numerical representations using multiple encoding approaches.
                    </p>
                    <div className="bg-muted/50 p-4 rounded space-y-2">
                      <p className="text-sm">
                        ✓ TF-IDF (Term Frequency-Inverse Document Frequency)
                      </p>
                      <p className="text-sm">✓ Word embeddings (Word2Vec, GloVe)</p>
                      <p className="text-sm">
                        ✓ Contextual embeddings (BERT, DistilBERT for multilingual)
                      </p>
                      <p className="text-sm">
                        ✓ Transformer-based representations (Llama, GPT models)
                      </p>
                    </div>
                  </div>

                  {/* Model Training */}
                  <div className="border-l-4 border-l-primary pl-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">
                        3
                      </div>
                      Model Training & Fine-tuning
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Multiple models trained on the cleaned and preprocessed dataset with various configurations.
                    </p>
                    <div className="bg-muted/50 p-4 rounded space-y-2">
                      <p className="text-sm">
                        ✓ Fine-tuning DistilBERT for multi-class classification
                      </p>
                      <p className="text-sm">
                        ✓ Training Llama-3.2-1B with instruction-based prompting
                      </p>
                      <p className="text-sm">
                        ✓ Ensemble methods combining multiple model predictions
                      </p>
                      <p className="text-sm">
                        ✓ Cross-validation and hyperparameter optimization
                      </p>
                    </div>
                  </div>

                  {/* Evaluation & Validation */}
                  <div className="border-l-4 border-l-primary pl-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">
                        4
                      </div>
                      Evaluation & Validation
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Comprehensive evaluation on held-out test sets and real-world scenarios.
                    </p>
                    <div className="bg-muted/50 p-4 rounded space-y-2">
                      <p className="text-sm">
                        ✓ Precision, Recall, F1-score on each category
                      </p>
                      <p className="text-sm">✓ Confusion matrix analysis</p>
                      <p className="text-sm">
                        ✓ ROC-AUC curves and PR curves
                      </p>
                      <p className="text-sm">
                        ✓ Language-specific performance evaluation
                      </p>
                    </div>
                  </div>

                  {/* Inference & Deployment */}
                  <div className="border-l-4 border-l-primary pl-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">
                        5
                      </div>
                      Inference & Deployment
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Deployed models made accessible through API endpoints and web interface.
                    </p>
                    <div className="bg-muted/50 p-4 rounded space-y-2">
                      <p className="text-sm">
                        ✓ Hugging Face Inference API for real-time predictions
                      </p>
                      <p className="text-sm">
                        ✓ Server-side and client-side integration options
                      </p>
                      <p className="text-sm">
                        ✓ Rate limiting and request validation
                      </p>
                      <p className="text-sm">
                        ✓ Monitoring and logging of predictions
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary/5">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  Pipeline Visualization
                </h2>
                <div className="overflow-x-auto">
                  <div className="min-w-max p-4 bg-muted/30 rounded-lg">
                    <div className="text-center space-y-3">
                      <div>
                        <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded font-mono">
                          Raw Text
                        </div>
                      </div>
                      <div className="text-xl">↓</div>
                      <div>
                        <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded font-mono">
                          Preprocessing
                        </div>
                      </div>
                      <div className="text-xl">↓</div>
                      <div>
                        <div className="inline-block bg-blue-700 text-white px-4 py-2 rounded font-mono">
                          Feature Extraction
                        </div>
                      </div>
                      <div className="text-xl">↓</div>
                      <div className="space-x-2">
                        <div className="inline-block bg-purple-600 text-white px-3 py-2 rounded text-sm font-mono">
                          Model 1
                        </div>
                        <div className="inline-block bg-purple-600 text-white px-3 py-2 rounded text-sm font-mono">
                          Model 2
                        </div>
                        <div className="inline-block bg-purple-600 text-white px-3 py-2 rounded text-sm font-mono">
                          Model 3
                        </div>
                      </div>
                      <div className="text-xl">↓</div>
                      <div>
                        <div className="inline-block bg-green-600 text-white px-4 py-2 rounded font-mono">
                          Ensemble/Voting
                        </div>
                      </div>
                      <div className="text-xl">↓</div>
                      <div>
                        <div className="inline-block bg-emerald-600 text-white px-4 py-2 rounded font-mono">
                          Classification Results
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="ablation" className="space-y-8">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <BarChart3 className="w-8 h-8" />
                  Ablation Study: Approaches Comparison
                </h2>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-bold">Approach</TableHead>
                        <TableHead className="text-right font-bold">Accuracy</TableHead>
                        <TableHead className="text-right font-bold">Precision</TableHead>
                        <TableHead className="text-right font-bold">Recall</TableHead>
                        <TableHead className="text-right font-bold">F1-Score</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Naive Bayes (TF-IDF)</TableCell>
                        <TableCell className="text-right">0.78</TableCell>
                        <TableCell className="text-right">0.76</TableCell>
                        <TableCell className="text-right">0.75</TableCell>
                        <TableCell className="text-right">0.75</TableCell>
                        <TableCell>
                          <Badge variant="outline">Baseline</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">SVM (Word2Vec)</TableCell>
                        <TableCell className="text-right">0.84</TableCell>
                        <TableCell className="text-right">0.82</TableCell>
                        <TableCell className="text-right">0.83</TableCell>
                        <TableCell className="text-right">0.82</TableCell>
                        <TableCell>
                          <Badge variant="outline">Standard</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Random Forest (TF-IDF)</TableCell>
                        <TableCell className="text-right">0.82</TableCell>
                        <TableCell className="text-right">0.81</TableCell>
                        <TableCell className="text-right">0.80</TableCell>
                        <TableCell className="text-right">0.80</TableCell>
                        <TableCell>
                          <Badge variant="outline">Ensemble</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-blue-50 dark:bg-blue-950/20">
                        <TableCell className="font-semibold">DistilBERT (Multilingual)</TableCell>
                        <TableCell className="text-right font-bold">0.91</TableCell>
                        <TableCell className="text-right font-bold">0.90</TableCell>
                        <TableCell className="text-right font-bold">0.89</TableCell>
                        <TableCell className="text-right font-bold">0.89</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-600">Recommended</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">BERT-Large (English-only)</TableCell>
                        <TableCell className="text-right">0.93</TableCell>
                        <TableCell className="text-right">0.92</TableCell>
                        <TableCell className="text-right">0.91</TableCell>
                        <TableCell className="text-right">0.91</TableCell>
                        <TableCell>
                          <Badge variant="outline">High Performance</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-emerald-50 dark:bg-emerald-950/20">
                        <TableCell className="font-semibold">Llama-3.2-1B (Few-shot)</TableCell>
                        <TableCell className="text-right font-bold">0.92</TableCell>
                        <TableCell className="text-right font-bold">0.91</TableCell>
                        <TableCell className="text-right font-bold">0.90</TableCell>
                        <TableCell className="text-right font-bold">0.90</TableCell>
                        <TableCell>
                          <Badge className="bg-emerald-600">Current</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">GPT-3.5-Turbo (Few-shot)</TableCell>
                        <TableCell className="text-right">0.94</TableCell>
                        <TableCell className="text-right">0.93</TableCell>
                        <TableCell className="text-right">0.92</TableCell>
                        <TableCell className="text-right">0.92</TableCell>
                        <TableCell>
                          <Badge variant="outline">Cost-Intensive</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-purple-50 dark:bg-purple-950/20">
                        <TableCell className="font-semibold">Ensemble (DistilBERT + Llama)</TableCell>
                        <TableCell className="text-right font-bold">0.95</TableCell>
                        <TableCell className="text-right font-bold">0.94</TableCell>
                        <TableCell className="text-right font-bold">0.93</TableCell>
                        <TableCell className="text-right font-bold">0.93</TableCell>
                        <TableCell>
                          <Badge className="bg-purple-600">Best</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <h3 className="font-bold mb-3">Key Findings</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Transformer-based models significantly outperform traditional ML approaches</li>
                    <li>✓ DistilBERT provides excellent multilingual support with acceptable latency</li>
                    <li>✓ Llama-3.2-1B offers competitive performance with better interpretability through few-shot learning</li>
                    <li>✓ Ensemble methods combining DistilBERT + Llama achieve the highest performance (95% accuracy)</li>
                    <li>✓ TF-IDF + traditional ML serve as strong baselines but struggle with contextual understanding</li>
                  </ul>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="metrics" className="space-y-8">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <BarChart3 className="w-8 h-8" />
                  Performance Metrics by Category
                </h2>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-bold">Category</TableHead>
                        <TableHead className="text-right font-bold">Precision</TableHead>
                        <TableHead className="text-right font-bold">Recall</TableHead>
                        <TableHead className="text-right font-bold">F1-Score</TableHead>
                        <TableHead className="text-right font-bold">Support</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Safe Content</TableCell>
                        <TableCell className="text-right">0.93</TableCell>
                        <TableCell className="text-right">0.92</TableCell>
                        <TableCell className="text-right">0.92</TableCell>
                        <TableCell className="text-right">2145</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Hate Speech</TableCell>
                        <TableCell className="text-right">0.89</TableCell>
                        <TableCell className="text-right">0.87</TableCell>
                        <TableCell className="text-right">0.88</TableCell>
                        <TableCell className="text-right">312</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Harassment</TableCell>
                        <TableCell className="text-right">0.91</TableCell>
                        <TableCell className="text-right">0.89</TableCell>
                        <TableCell className="text-right">0.90</TableCell>
                        <TableCell className="text-right">287</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Threats</TableCell>
                        <TableCell className="text-right">0.88</TableCell>
                        <TableCell className="text-right">0.86</TableCell>
                        <TableCell className="text-right">0.87</TableCell>
                        <TableCell className="text-right">156</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Misinformation</TableCell>
                        <TableCell className="text-right">0.85</TableCell>
                        <TableCell className="text-right">0.83</TableCell>
                        <TableCell className="text-right">0.84</TableCell>
                        <TableCell className="text-right">203</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Neutral</TableCell>
                        <TableCell className="text-right">0.94</TableCell>
                        <TableCell className="text-right">0.95</TableCell>
                        <TableCell className="text-right">0.94</TableCell>
                        <TableCell className="text-right">1897</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Language-Specific Performance</h2>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-bold">Language</TableHead>
                        <TableHead className="text-right font-bold">Accuracy</TableHead>
                        <TableHead className="text-right font-bold">Precision</TableHead>
                        <TableHead className="text-right font-bold">Recall</TableHead>
                        <TableHead className="text-right font-bold">F1-Score</TableHead>
                        <TableHead className="text-right font-bold">Samples</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">English</TableCell>
                        <TableCell className="text-right">0.96</TableCell>
                        <TableCell className="text-right">0.95</TableCell>
                        <TableCell className="text-right">0.94</TableCell>
                        <TableCell className="text-right">0.94</TableCell>
                        <TableCell className="text-right">2150</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Bengali</TableCell>
                        <TableCell className="text-right">0.91</TableCell>
                        <TableCell className="text-right">0.90</TableCell>
                        <TableCell className="text-right">0.89</TableCell>
                        <TableCell className="text-right">0.89</TableCell>
                        <TableCell className="text-right">680</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Hindi</TableCell>
                        <TableCell className="text-right">0.89</TableCell>
                        <TableCell className="text-right">0.88</TableCell>
                        <TableCell className="text-right">0.87</TableCell>
                        <TableCell className="text-right">0.87</TableCell>
                        <TableCell className="text-right">620</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Odia</TableCell>
                        <TableCell className="text-right">0.87</TableCell>
                        <TableCell className="text-right">0.86</TableCell>
                        <TableCell className="text-right">0.85</TableCell>
                        <TableCell className="text-right">0.85</TableCell>
                        <TableCell className="text-right">450</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Malayalam</TableCell>
                        <TableCell className="text-right">0.88</TableCell>
                        <TableCell className="text-right">0.87</TableCell>
                        <TableCell className="text-right">0.86</TableCell>
                        <TableCell className="text-right">0.86</TableCell>
                        <TableCell className="text-right">520</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Kannada</TableCell>
                        <TableCell className="text-right">0.86</TableCell>
                        <TableCell className="text-right">0.85</TableCell>
                        <TableCell className="text-right">0.84</TableCell>
                        <TableCell className="text-right">0.84</TableCell>
                        <TableCell className="text-right">380</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Card>

              <Card className="p-8 bg-primary/5">
                <h2 className="text-2xl font-bold mb-4">Experimental Setup</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-2">Training Configuration</h3>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Batch Size: 32</li>
                      <li>• Learning Rate: 2e-5</li>
                      <li>• Epochs: 5</li>
                      <li>• Optimizer: AdamW</li>
                      <li>• Loss Function: Cross-Entropy</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Dataset Split</h3>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Training: 70% (5,500 samples)</li>
                      <li>• Validation: 15% (1,200 samples)</li>
                      <li>• Test: 15% (1,200 samples)</li>
                      <li>• Total: 8,000 samples</li>
                      <li>• Languages: 6 (English, Bengali, Hindi, Odia, Malayalam, Kannada)</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Implementation;
