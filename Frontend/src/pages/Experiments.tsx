import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import AblationTable from "./Ablation";


const metrics = [
  { name: "Baseline", precision: 0.7, recall: 0.68, f1: 0.69 },
  { name: "Small LLaMA", precision: 0.8, recall: 0.76, f1: 0.78 },
  { name: "Our Model", precision: 0.85, recall: 0.83, f1: 0.84 },
];

const ImplementationPlan = () => (
  <Card className="p-6 animate-in fade-in duration-700">
    <h2 className="text-2xl font-semibold mb-3">Full Pipeline</h2>
    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
      <li><strong>Data Collection:</strong> Multilingual crawling + human annotation.</li>
      <li><strong>Preprocessing:</strong> Normalization, script handling, tokenization.</li>
      <li><strong>Augmentation:</strong> Back-translation, paraphrasing for low-resource languages.</li>
      <li><strong>Training:</strong> Baselines + LLM fine-tuning + ensembling.</li>
      <li><strong>Evaluation:</strong> Per-language metrics, ablation, confusion analysis.</li>
      <li><strong>Deployment:</strong> API + Frontend integration, monitoring and feedback loop.</li>
    </ol>
  </Card>
);

const Experiments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Experiments & Results</h1>
            <p className="text-muted-foreground">Ablation studies, metric breakdowns, plots and key findings from prior work.</p>
          </div>

         {/* <ImplementationPlan />*/}

          {/* Flow Chart Section */}
          <Card className="p-6">
<h2 className="text-2xl font-semibold mb-6 text-center w-fit mx-auto px-4 py-1 
    border border-primary/30 rounded-md backdrop-blur-sm bg-background/40">
  System Flow Chart
</h2>


            <div className="flex justify-center">
              <img
                src="./flowchart.jpg" 
                alt="System Flow Chart"
                className="max-w-full h-auto rounded-lg shadow-lg"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>
          </Card>

          <AblationTable />

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Metric Comparisons</h2>
            <div style={{ height: 260 }} className="mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={metrics} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="precision" fill="#60a5fa" name="Precision" />
                  <Bar dataKey="recall" fill="#34d399" name="Recall" />
                  <Bar dataKey="f1" fill="#f59e0b" name="F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Experiment</TableHead>
                  <TableHead>Precision</TableHead>
                  <TableHead>Recall</TableHead>
                  <TableHead>F1</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {metrics.map((m) => (
                  <TableRow key={m.name}>
                    <TableCell>{m.name}</TableCell>
                    <TableCell>{m.precision.toFixed(2)}</TableCell>
                    <TableCell>{m.recall.toFixed(2)}</TableCell>
                    <TableCell>{m.f1.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableCaption>Metrics used across experiments. Values are illustrative.</TableCaption>
            </Table>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Augmentation increases recall for low-resource languages by ~6% (observed).</li>
              <li>Harmonizing labels across annotators improved F1 by reducing noise.</li>
              <li>Model ensembling reduces false positives in ambiguous categories.</li>
              <li>Fine-tuned small LLMs provide the best cost/perf tradeoff for our dataset size.</li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Experiments;