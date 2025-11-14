import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ImplementationPlan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Implementation Plan</h1>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Full Pipeline</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>
                <strong>Data Collection:</strong> Gather multilingual text from web crawls, forums and manual annotation.
              </li>
              <li>
                <strong>Preprocessing:</strong> Clean text, normalize scripts, tokenize and label languages.
              </li>
              <li>
                <strong>Augmentation:</strong> Back-translation, synonym replacement and paraphrasing for low-resource languages.
              </li>
              <li>
                <strong>Model Training:</strong> Train baselines (SVM), fine-tune small LLMs, and experiment with ensembling.
              </li>
              <li>
                <strong>Evaluation:</strong> Compute Precision, Recall, F1 and analyze per-language performance.
              </li>
              <li>
                <strong>Deployment:</strong> Export model, serve via API, integrate with front-end for live analysis.
              </li>
            </ol>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Visualization</h2>
            <p className="text-sm text-muted-foreground">A simple step diagram is represented below. For richer visuals, we can add SVG/mermaid charts or interactive flow diagrams.</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-primary/5">
                <div className="font-semibold">Collect</div>
                <div className="text-muted-foreground text-sm">Raw multilingual text</div>
              </div>
              <div className="p-4 rounded-lg bg-primary/5">
                <div className="font-semibold">Process</div>
                <div className="text-muted-foreground text-sm">Clean & label</div>
              </div>
              <div className="p-4 rounded-lg bg-primary/5">
                <div className="font-semibold">Train</div>
                <div className="text-muted-foreground text-sm">Fine-tune models</div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ImplementationPlan;
