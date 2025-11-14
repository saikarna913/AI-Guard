import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Findings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Findings</h1>
          <Card className="p-6">
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
              <li>Data augmentation improves recall on low-resource languages (~+6%).</li>
              <li>Harmonized labels reduce inter-annotator noise and increase F1.</li>
              <li>Fine-tuning small LLMs on domain data yields strong safety classification performance.</li>
              <li>Ensembling helps reduce false positives especially in ambiguous categories.</li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Findings;
