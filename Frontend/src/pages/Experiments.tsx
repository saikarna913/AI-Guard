import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import AblationTable from "./Ablation";


const metrics = [
  {
    language: "Bengali (bn)",
    successRate: 98.26,
    mAP: 0.1367,
    klDivergence: 19.4227
  },
  {
    language: "Kannada (kn)",
    successRate: 97.64,
    mAP: 0.1367,
    klDivergence: 19.0119
  },
  {
    language: "Malayalam (ml)",
    successRate: 92.65,
    mAP: 0.1344,
    klDivergence: 19.5048
  },
  {
    language: "Odia (or)",
    successRate: 94.26,
    mAP: 0.1553,
    klDivergence: 18.8424
  },
  {
    language: "Overall",
    successRate: 95.60,
    mAP: 0.1406,
    klDivergence: 19.1982
  }
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
  <h2 className="text-2xl font-semibold mb-4">Evaluation Metrics Comparison</h2>
  
  {/* Metric Overview Cards */}
  <div className="grid grid-cols-3 gap-4 mb-6">
    <Card className="p-4 bg-blue-50 border-blue-200">
      <div className="text-sm font-medium text-blue-800 mb-2">Avg Success Rate</div>
      <div className="text-2xl font-bold text-blue-900">95.60%</div>
      <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95.6%' }}></div>
      </div>
    </Card>
    <Card className="p-4 bg-green-50 border-green-200">
      <div className="text-sm font-medium text-green-800 mb-2">Avg mAP</div>
      <div className="text-2xl font-bold text-green-900">0.1406</div>
      <div className="w-full bg-green-200 rounded-full h-2 mt-2">
        <div className="bg-green-600 h-2 rounded-full" style={{ width: '14.06%' }}></div>
      </div>
    </Card>
    <Card className="p-4 bg-amber-50 border-amber-200">
      <div className="text-sm font-medium text-amber-800 mb-2">Avg KL Divergence</div>
      <div className="text-2xl font-bold text-amber-900">19.1982</div>
      <div className="w-full bg-amber-200 rounded-full h-2 mt-2">
        <div className="bg-amber-600 h-2 rounded-full" style={{ width: '76.8%' }}></div>
      </div>
    </Card>
  </div>

  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Language</TableHead>
        <TableHead>Success Rate (%)</TableHead>
        <TableHead>mAP</TableHead>
        <TableHead>KL Divergence</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {metrics.map((metric) => (
        <TableRow key={metric.language}>
          <TableCell className="font-medium">{metric.language}</TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <span>{metric.successRate.toFixed(2)}</span>
              <div className="w-16 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${metric.successRate}%` }}
                ></div>
              </div>
            </div>
          </TableCell>
          <TableCell>{metric.mAP.toFixed(4)}</TableCell>
          <TableCell>{metric.klDivergence.toFixed(4)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableCaption>Multi-classifier head evaluation metrics across languages</TableCaption>
  </Table>
</Card>

          <Card className="p-6">
  <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
    <li>Multi-classifier head achieved <strong>95.60% overall success rate</strong> across all languages with consistent performance.</li>
    <li>SFT LoRA with binary classification showed <strong>best accuracy (59.12%)</strong> and <strong>highest UNSAFE F1 score (69.59%)</strong>.</li>
    <li>Fine-tuned models significantly improved UNSAFE detection while maintaining reasonable latency (~0.73s).</li>
    <li>Multi-classifier demonstrated excellent performance across diverse languages (Bengali: 98.26%, Kannada: 97.64% success rates).</li>
    <li>Few-shot approaches showed moderate performance but with higher latency, especially on larger models.</li>
  </ul>
</Card>
        </div>
      </main>
    </div>
  );
};

export default Experiments;