import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import AblationTable from "./Ablation";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar} from 'recharts';

// Helper function to format data for radar chart
{/*const getRadarData = () => [
  { subject: 'Success Rate', A: 100, B: 59, C: 19, D: 68 },
  { subject: 'mAP Score', A: 100, B: 59, C: 19, D: 68 },
  { subject: 'KL Divergence', A: 100, B: 59, C: 19, D: 68 },
  { subject: 'Top-1 Recall', A: 100, B: 59, C: 19, D: 32 },
  { subject: 'Top-3 Recall', A: 100, B: 59, C: 19, D: 68 },
  { subject: 'Exact Match', A: 100, B: 59, C: 19, D: 13 }
];

// Helper function to find best performing languages
const findBestPerformance = (metric) => {
  if (metric === 'klDivergence') {
    const best = metrics.reduce((min, curr) => 
      curr.klDivergence < min.klDivergence ? curr : min
    );
    return `${best.language} (${best.klDivergence.toFixed(2)})`;
  } else {
    const best = metrics.reduce((max, curr) => 
      curr[metric] > max[metric] ? curr : max
    );
    const value = metric === 'successRate' 
      ? `${best.successRate.toFixed(1)}%`
      : best.mAP.toFixed(4);
    return `${best.language} (${value})`;
  }
};*/}

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


const classificationMetrics = {
  accuracy: 0.9560,
  precisionUnsafe: 0.9680,
  recallUnsafe: 0.9591,
  f1Score: 0.9635,
  cohensKappa: 0.9080,
  mcc: 0.9081,
  confusionMatrix: {
    trueNegative: 10103,
    falsePositive: 518,
    falseNegative: 669,
    truePositive: 15670
  },
  classReports: [
    {
      class: 'SAFE',
      precision: 0.94,
      recall: 0.95,
      f1Score: 0.94,
      support: 10621
    },
    {
      class: 'UNSAFE',
      precision: 0.9680,
      recall: 0.9591,
      f1Score: 0.9635,
      support: 16339
    }
  ],
  unknownOutputs: 464,
  totalPredictions: 27424,
  validPredictions: 26960
};

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



  {/* Warning about unknown outputs */}
 {/*} <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
    <div className="text-sm text-yellow-800">
      <span className="font-medium">Note:</span> 464 inputs resulted in UNKNOWN outputs and were excluded from evaluation.
    </div>
  </div>*/}

{/*<Card className="p-6">
  <h2 className="text-2xl font-semibold mb-4">Multi-classifier Evaluation Metrics</h2>*/}
  
  {/* Metric Overview Cards - Updated with new data */}
  {/*<div className="grid grid-cols-3 gap-4 mb-6">
    <Card className="p-4 bg-blue-50 border-blue-200">
      <div className="text-sm font-medium text-blue-800 mb-2">Success Rate</div>
      <div className="text-2xl font-bold text-blue-900">100.00%</div>
      <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
      </div>
    </Card>
    <Card className="p-4 bg-green-50 border-green-200">
      <div className="text-sm font-medium text-green-800 mb-2">Mean mAP</div>
      <div className="text-2xl font-bold text-green-900">0.5900</div>
      <div className="w-full bg-green-200 rounded-full h-2 mt-2">
        <div className="bg-green-600 h-2 rounded-full" style={{ width: '59.00%' }}></div>
      </div>
    </Card>
    <Card className="p-4 bg-amber-50 border-amber-200">
      <div className="text-sm font-medium text-amber-800 mb-2">Mean KL Divergence</div>
      <div className="text-2xl font-bold text-amber-900">4.7587</div>
      <div className="w-full bg-amber-200 rounded-full h-2 mt-2">
        <div className="bg-amber-600 h-2 rounded-full" style={{ width: '19.03%' }}></div>
      </div>
    </Card>
  </div>*/}

  {/* Additional Metric Cards */}
  {/*<div className="grid grid-cols-3 gap-4 mb-6">
    <Card className="p-4 bg-purple-50 border-purple-200">
      <div className="text-sm font-medium text-purple-800 mb-2">Top-1 Recall</div>
      <div className="text-2xl font-bold text-purple-900">32.08%</div>
      <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '32.08%' }}></div>
      </div>
    </Card>
    <Card className="p-4 bg-red-50 border-red-200">
      <div className="text-sm font-medium text-red-800 mb-2">Top-3 Recall</div>
      <div className="text-2xl font-bold text-red-900">68.25%</div>
      <div className="w-full bg-red-200 rounded-full h-2 mt-2">
        <div className="bg-red-600 h-2 rounded-full" style={{ width: '68.25%' }}></div>
      </div>
    </Card>
    <Card className="p-4 bg-indigo-50 border-indigo-200">
      <div className="text-sm font-medium text-indigo-800 mb-2">Exact Match</div>
      <div className="text-2xl font-bold text-indigo-900">13.00%</div>
      <div className="w-full bg-indigo-200 rounded-full h-2 mt-2">
        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '13.00%' }}></div>
      </div>
    </Card>
  </div>*/}

  {/* Radar Chart Container */}
  {/*<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-center">Performance Radar Chart</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={getRadarData()}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar 
              name="Success Rate" 
              dataKey="A" 
              stroke="#3b82f6" 
              fill="#3b82f6" 
              fillOpacity={0.6} 
            />
            <Radar 
              name="mAP Score" 
              dataKey="B" 
              stroke="#10b981" 
              fill="#10b981" 
              fillOpacity={0.6} 
            />
            <Radar 
              name="KL Divergence" 
              dataKey="C" 
              stroke="#f59e0b" 
              fill="#f59e0b" 
              fillOpacity={0.6} 
            />
            <Radar 
              name="Top-3 Recall" 
              dataKey="D" 
              stroke="#ef4444" 
              fill="#ef4444" 
              fillOpacity={0.6} 
            />
            <Legend />
            <Tooltip formatter={(value) => [Number(value).toFixed(2), '']} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </Card>

    {/* Side-by-side comparison table */}
    {/*<Card className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-center">Language-wise Metrics</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Language</TableHead>
            <TableHead>Samples</TableHead>
            <TableHead>Success Rate</TableHead>
            <TableHead>mAP</TableHead>
            <TableHead>KL Div</TableHead>
            <TableHead>Top-1 Recall</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { language: 'Overall', samples: 100, successRate: 100.00, mAP: 0.5900, klDivergence: 4.7587, top1Recall: 0.3208 },
            { language: 'bn', samples: 29, successRate: 100.00, mAP: 0.5986, klDivergence: 4.3528, top1Recall: 0.3764 },
            { language: 'kn', samples: 24, successRate: 100.00, mAP: 0.5684, klDivergence: 5.0906, top1Recall: 0.2847 },
            { language: 'ml', samples: 25, successRate: 100.00, mAP: 0.5964, klDivergence: 4.8549, top1Recall: 0.3067 },
            { language: 'ne', samples: 4, successRate: 100.00, mAP: 0.6066, klDivergence: 5.2131, top1Recall: 0.5000 },
            { language: 'unknown', samples: 18, successRate: 100.00, mAP: 0.5924, klDivergence: 4.7357, top1Recall: 0.2593 }
          ].map((metric) => (
            <TableRow key={metric.language}>
              <TableCell className="font-medium">{metric.language}</TableCell>
              <TableCell>{metric.samples}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>{metric.successRate.toFixed(1)}%</span>
                  <div className="w-12 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${metric.successRate}%` }}
                    ></div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>{metric.mAP.toFixed(4)}</span>
                  <div className="w-12 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${metric.mAP * 100}%` }}
                    ></div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>{metric.klDivergence.toFixed(4)}</span>
                  <div className="w-12 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-amber-600 h-2 rounded-full" 
                      style={{ width: `${(metric.klDivergence / 6) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>{(metric.top1Recall * 100).toFixed(1)}%</span>
                  <div className="w-12 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full" 
                      style={{ width: `${metric.top1Recall * 100}%` }}
                    ></div>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>*/}
 {/* </div>*/}

  {/* Performance Summary */}
  {/*<Card className="p-4 bg-gray-50">
    <h3 className="text-lg font-semibold mb-3">Performance Insights</h3>
    <div className="grid grid-cols-4 gap-4 text-sm">
      <div>
        <div className="font-medium text-blue-700">Best Success Rate</div>
        <div className="text-xl font-bold">All languages: 100%</div>
      </div>
      <div>
        <div className="font-medium text-green-700">Best mAP</div>
        <div className="text-xl font-bold">ne: 0.6066</div>
      </div>
      <div>
        <div className="font-medium text-amber-700">Lowest KL Divergence</div>
        <div className="text-xl font-bold">bn: 4.3528</div>
      </div>
      <div>
        <div className="font-medium text-purple-700">Best Top-1 Recall</div>
        <div className="text-xl font-bold">ne: 50.0%</div>
      </div>
    </div>
    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
      <p className="text-sm text-yellow-800">
        <strong>Key Observation:</strong> The model achieves perfect success rate (100%) across all languages with strong mAP scores (~0.59) and low KL divergence (~4.76). 
        Top-3 recall is significantly higher (68.25%) than Top-1 recall (32.08%), suggesting the model is better at ranking relevant classes in top positions.
      </p>
    </div>
  </Card>
</Card>*/}



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