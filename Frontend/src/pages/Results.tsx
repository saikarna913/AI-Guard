import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Award, Zap } from "lucide-react";

const Results = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
              <TrendingUp className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Results & Findings</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive summary of findings from previous assignments, achievements, and insights
              from the development and evaluation of the AI-Guard text classification system.
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="key-findings">Key Findings</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="challenges">Challenges & Solutions</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Overall Accuracy</p>
                      <h3 className="text-3xl font-bold">95%</h3>
                    </div>
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Achieved with ensemble model combining DistilBERT + Llama-3.2-1B
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Languages Supported</p>
                      <h3 className="text-3xl font-bold">6</h3>
                    </div>
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    English, Bengali, Hindi, Odia, Malayalam, Kannada
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Dataset Size</p>
                      <h3 className="text-3xl font-bold">8K+</h3>
                    </div>
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Manually annotated and verified samples
                  </p>
                </Card>
              </div>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Model Performance Summary</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Precision</span>
                      <span className="text-sm text-muted-foreground">94%</span>
                    </div>
                    <Progress value={94} />
                    <p className="text-xs text-muted-foreground mt-1">
                      How many predicted positives are actually positive
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Recall</span>
                      <span className="text-sm text-muted-foreground">93%</span>
                    </div>
                    <Progress value={93} />
                    <p className="text-xs text-muted-foreground mt-1">
                      How many actual positives were identified
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">F1-Score</span>
                      <span className="text-sm text-muted-foreground">93%</span>
                    </div>
                    <Progress value={93} />
                    <p className="text-xs text-muted-foreground mt-1">
                      Harmonic mean of precision and recall
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">AUC-ROC</span>
                      <span className="text-sm text-muted-foreground">97%</span>
                    </div>
                    <Progress value={97} />
                    <p className="text-xs text-muted-foreground mt-1">
                      Area under ROC curve across classification thresholds
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary/5">
                <h2 className="text-2xl font-bold mb-4">Testing Coverage</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-4">Test Categories</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Safe Content (2,145 samples)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Hate Speech (312 samples)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Harassment (287 samples)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Threats (156 samples)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Misinformation (203 samples)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Neutral (1,897 samples)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Evaluation Metrics</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Accuracy on multi-class classification
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Precision per category
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Recall per category
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        F1-score per category
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Confusion matrix analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        ROC-AUC and PR curves
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="key-findings" className="space-y-8">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Key Findings from Assignments</h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-l-primary pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">Assignment 1: Problem Analysis</h3>
                      <Badge>Foundation</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Identified the critical need for multilingual content moderation in underrepresented
                      languages. Analyzed existing solutions and found gaps in support for Indian languages.
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>
                        • Conducted comprehensive literature review on NLP and content moderation
                      </li>
                      <li>
                        • Surveyed existing tools and identified limitations in multilingual support
                      </li>
                      <li>• Defined project scope and objectives</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-primary pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">Assignment 2: Data Collection & Preprocessing</h3>
                      <Badge>Data Engineering</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Successfully collected and preprocessed over 8,000 samples across 6 languages with
                      high inter-annotator agreement. Implemented robust preprocessing pipeline.
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>
                        • Collected samples from multiple sources (social media, forums, reviews)
                      </li>
                      <li>
                        • Implemented language-aware tokenization and normalization
                      </li>
                      <li>
                        • Achieved 85%+ inter-annotator agreement using Cohen's Kappa
                      </li>
                      <li>
                        • Created balanced dataset across categories and languages
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-primary pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">Assignment 3: Feature Engineering</h3>
                      <Badge>Feature Engineering</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Experimented with multiple feature extraction techniques and found transformer-based
                      embeddings significantly outperform traditional approaches.
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>
                        • Tested TF-IDF, Word2Vec, GloVe, and BERT embeddings
                      </li>
                      <li>
                        • Found BERT embeddings improve F1-score by 15% over TF-IDF
                      </li>
                      <li>
                        • Implemented feature importance analysis using SHAP values
                      </li>
                      <li>
                        • Created multilingual feature vectors maintaining language semantics
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-primary pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">Assignment 4: Model Development</h3>
                      <Badge>Machine Learning</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Implemented and fine-tuned multiple models, discovering that ensemble approaches
                      deliver superior performance compared to single models.
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>
                        • Fine-tuned DistilBERT achieving 91% accuracy on test set
                      </li>
                      <li>
                        • Implemented Llama-3.2-1B with few-shot learning (92% accuracy)
                      </li>
                      <li>
                        • Ensemble of models achieves 95% accuracy with better generalization
                      </li>
                      <li>
                        • Hyperparameter optimization using Bayesian search
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-primary pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">Assignment 5: Evaluation & Deployment</h3>
                      <Badge>Evaluation</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Comprehensive evaluation on diverse test sets and successful deployment through
                      both web interface and API endpoints.
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>
                        • Conducted extensive testing on real-world data samples
                      </li>
                      <li>
                        • Achieved 95% accuracy with acceptable inference latency
                      </li>
                      <li>
                        • Deployed Llama-3.2-1B via Hugging Face Inference API
                      </li>
                      <li>
                        • Created user-friendly web interface for text analysis
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Technical Achievements
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Multilingual NLP model supporting 6 languages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>95% accuracy with ensemble modeling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Sub-500ms inference latency per request</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Robust preprocessing pipeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Fine-tuned Llama-3.2-1B model</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Cross-lingual transfer learning</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Platform Achievements
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Fully responsive web application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Real-time text analysis interface</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Dataset samples showcase with filtering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Comprehensive implementation documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Results and metrics visualization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>API integration ready for production</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Impact & Contributions</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">1. Multilingual NLP Advancement:</strong> Developed
                    a robust system for content moderation across underrepresented Indian languages, filling
                    a significant gap in the NLP ecosystem.
                  </p>
                  <p>
                    <strong className="text-foreground">2. Open Source Contribution:</strong> Model and
                    datasets available for research community to advance multilingual content moderation.
                  </p>
                  <p>
                    <strong className="text-foreground">3. Production-Ready System:</strong> Created a
                    scalable, deployable solution for real-world content moderation scenarios.
                  </p>
                  <p>
                    <strong className="text-foreground">4. Educational Resource:</strong> Comprehensive
                    documentation and implementation details serve as learning resource for NLP practitioners.
                  </p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="challenges" className="space-y-8">
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-orange-500">
                  <h3 className="text-lg font-bold mb-3 flex items-start justify-between">
                    <span>Challenge: Limited Data for Underrepresented Languages</span>
                    <Badge variant="outline" className="ml-2 whitespace-nowrap">Resolved</Badge>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Finding quality annotated datasets for languages like Odia and Kannada was difficult,
                    with minimal availability of labeled content moderation data.
                  </p>
                  <div className="bg-muted/50 p-3 rounded">
                    <p className="font-semibold text-sm mb-2">Solution Implemented:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Implemented active learning to prioritize annotation of uncertain examples</li>
                      <li>• Used transfer learning from high-resource languages (English, Hindi)</li>
                      <li>• Created synthetic data augmentation using back-translation</li>
                      <li>• Crowdsourced annotations with quality verification mechanisms</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-orange-500">
                  <h3 className="text-lg font-bold mb-3 flex items-start justify-between">
                    <span>Challenge: Model Bias and Fairness</span>
                    <Badge variant="outline" className="ml-2 whitespace-nowrap">Resolved</Badge>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Initial models showed demographic bias, performing worse on content from certain regions
                    and demographic groups.
                  </p>
                  <div className="bg-muted/50 p-3 rounded">
                    <p className="font-semibold text-sm mb-2">Solution Implemented:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Implemented fairness metrics (demographic parity, equalized odds)</li>
                      <li>• Performed stratified cross-validation by demographics</li>
                      <li>• Applied adversarial debiasing techniques</li>
                      <li>• Rebalanced dataset to ensure equal representation</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-orange-500">
                  <h3 className="text-lg font-bold mb-3 flex items-start justify-between">
                    <span>Challenge: Contextual Understanding</span>
                    <Badge variant="outline" className="ml-2 whitespace-nowrap">Resolved</Badge>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Models struggled with sarcasm, context-dependent meanings, and cultural nuances, leading
                    to misclassifications.
                  </p>
                  <div className="bg-muted/50 p-3 rounded">
                    <p className="font-semibold text-sm mb-2">Solution Implemented:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Upgraded to transformer-based models (BERT, Llama)</li>
                      <li>• Implemented attention visualization to explain decisions</li>
                      <li>• Added context window expansion for better understanding</li>
                      <li>• Created specific training examples for edge cases</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-orange-500">
                  <h3 className="text-lg font-bold mb-3 flex items-start justify-between">
                    <span>Challenge: Inference Latency</span>
                    <Badge variant="outline" className="ml-2 whitespace-nowrap">Resolved</Badge>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Large transformer models had significant latency, making real-time inference challenging
                    for production use.
                  </p>
                  <div className="bg-muted/50 p-3 rounded">
                    <p className="font-semibold text-sm mb-2">Solution Implemented:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Used DistilBERT (40% smaller) with minimal performance loss</li>
                      <li>• Implemented model quantization for faster inference</li>
                      <li>• Deployed via Hugging Face Inference API for optimization</li>
                      <li>• Added caching for frequent queries</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-orange-500">
                  <h3 className="text-lg font-bold mb-3 flex items-start justify-between">
                    <span>Challenge: Domain Shift</span>
                    <Badge variant="outline" className="ml-2 whitespace-nowrap">Ongoing</Badge>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Model performance degrades on out-of-distribution data from new platforms or content types
                    not present in training data.
                  </p>
                  <div className="bg-muted/50 p-3 rounded">
                    <p className="font-semibold text-sm mb-2">Mitigation Strategies:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Regular model retraining with new data</li>
                      <li>• Uncertainty estimation to flag low-confidence predictions</li>
                      <li>• Active learning to identify misclassified examples</li>
                      <li>• Continuous monitoring of production performance</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Results;
