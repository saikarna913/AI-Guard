import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import AblationTable from "./Ablation";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar} from 'recharts';

// Helper function to format data for radar chart
const getRadarData = () => {
  return metrics.map(metric => ({
    subject: metric.language,
    A: metric.successRate,        // Success Rate
    B: metric.mAP * 100,          // mAP (scaled for better visualization)
    C: Math.min(metric.klDivergence, 100), // KL Divergence (capped for radar)
    fullMark: 100
  }));
};

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
};

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

          <Card className="p-6">
  <h2 className="text-2xl font-semibold mb-4">Binary Classification Evaluation Results</h2>
  
  {/* Key Metrics Overview */}
  <div className="grid grid-cols-4 gap-4 mb-6">
    <Card className="p-4 bg-blue-50 border-blue-200">
      <div className="text-sm font-medium text-blue-800 mb-2">Accuracy</div>
      <div className="text-2xl font-bold text-blue-900">95.60%</div>
      <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95.6%' }}></div>
      </div>
    </Card>
    <Card className="p-4 bg-green-50 border-green-200">
      <div className="text-sm font-medium text-green-800 mb-2">Precision (UNSAFE)</div>
      <div className="text-2xl font-bold text-green-900">96.80%</div>
      <div className="w-full bg-green-200 rounded-full h-2 mt-2">
        <div className="bg-green-600 h-2 rounded-full" style={{ width: '96.8%' }}></div>
      </div>
    </Card>
    <Card className="p-4 bg-purple-50 border-purple-200">
      <div className="text-sm font-medium text-purple-800 mb-2">Recall (UNSAFE)</div>
      <div className="text-2xl font-bold text-purple-900">95.91%</div>
      <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '95.91%' }}></div>
      </div>
    </Card>
    <Card className="p-4 bg-amber-50 border-amber-200">
      <div className="text-sm font-medium text-amber-800 mb-2">F1 Score</div>
      <div className="text-2xl font-bold text-amber-900">0.9635</div>
      <div className="w-full bg-amber-200 rounded-full h-2 mt-2">
        <div className="bg-amber-600 h-2 rounded-full" style={{ width: '96.35%' }}></div>
      </div>
    </Card>
  </div>

  {/* Confusion Matrix Visualization */}
  <Card className="p-4 mb-6">
    <h3 className="text-lg font-semibold mb-4">Confusion Matrix</h3>
    <div className="grid grid-cols-3 gap-2 text-center">
      <div className="p-2"></div>
      <div className="p-2 font-medium">Predicted SAFE</div>
      <div className="p-2 font-medium">Predicted UNSAFE</div>
      
      <div className="p-2 font-medium">Actual SAFE</div>
      <div className="p-4 bg-green-100 border border-green-300 rounded">
        <div className="text-xl font-bold text-green-800">10,103</div>
        <div className="text-sm text-green-600">True Negative</div>
      </div>
      <div className="p-4 bg-red-100 border border-red-300 rounded">
        <div className="text-xl font-bold text-red-800">518</div>
        <div className="text-sm text-red-600">False Positive</div>
      </div>
      
      <div className="p-2 font-medium">Actual UNSAFE</div>
      <div className="p-4 bg-red-100 border border-red-300 rounded">
        <div className="text-xl font-bold text-red-800">669</div>
        <div className="text-sm text-red-600">False Negative</div>
      </div>
      <div className="p-4 bg-green-100 border border-green-300 rounded">
        <div className="text-xl font-bold text-green-800">15,670</div>
        <div className="text-sm text-green-600">True Positive</div>
      </div>
    </div>
  </Card>

  {/* Detailed Classification Report */}
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Class</TableHead>
        <TableHead>Precision</TableHead>
        <TableHead>Recall</TableHead>
        <TableHead>F1-Score</TableHead>
        <TableHead>Support</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">SAFE</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span>0.9400</span>
           {/* <div className="w-16 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94%' }}></div>
            </div>*/}
          </div>
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span>0.9500</span>
           {/* <div className="w-16 bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
            </div>*/}
          </div>
        </TableCell>
        <TableCell>0.9400</TableCell>
        <TableCell>10,621</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">UNSAFE</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span>0.9680</span>
            {/*<div className="w-16 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '96.8%' }}></div>
            </div>*/}
          </div>
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span>0.9591</span>
           {/* <div className="w-16 bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '95.91%' }}></div>
            </div>*/}
          </div>
        </TableCell>
        <TableCell>0.9635</TableCell>
        <TableCell>16,339</TableCell>
      </TableRow>
    </TableBody>
    <TableCaption>Binary classification performance metrics (LoRA fine-tuned adapter)</TableCaption>
  </Table>

  {/* Additional Metrics */}
  <div className="grid grid-cols-2 gap-4 mt-6">
    <Card className="p-4 bg-gray-50 border-gray-200">
      <div className="text-sm font-medium text-gray-800 mb-2">Cohen's Kappa</div>
      <div className="text-xl font-bold text-gray-900">0.9080</div>
      <div className="text-xs text-gray-600 mt-1">Excellent agreement (&gt;0.8)</div>
    </Card>
    <Card className="p-4 bg-gray-50 border-gray-200">
      <div className="text-sm font-medium text-gray-800 mb-2">Matthews Correlation Coefficient</div>
      <div className="text-xl font-bold text-gray-900">0.9081</div>
      <div className="text-xs text-gray-600 mt-1">Strong positive correlation</div>
    </Card>
  </div>

  {/* Warning about unknown outputs */}
 {/*} <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
    <div className="text-sm text-yellow-800">
      <span className="font-medium">Note:</span> 464 inputs resulted in UNKNOWN outputs and were excluded from evaluation.
    </div>
  </div>*/}
</Card>

<Card className="p-6">
  <h2 className="text-2xl font-semibold mb-4">Multi-classifier Evaluation Metrics</h2>
  
  {/* Metric Overview Cards - Keep these as they provide quick summary */}
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

  {/* Radar Chart Container */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
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
            <Legend />
            <Tooltip formatter={(value) => [Number(value).toFixed(2), '']} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </Card>

    {/* Side-by-side comparison table */}
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-center">Detailed Metrics</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Language</TableHead>
            <TableHead>Success Rate</TableHead>
            <TableHead>mAP</TableHead>
            <TableHead>KL Div</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {metrics.map((metric) => (
            <TableRow key={metric.language}>
              <TableCell className="font-medium">{metric.language}</TableCell>
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
                  <span>{metric.klDivergence.toFixed(1)}</span>
                  <div className="w-12 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-amber-600 h-2 rounded-full" 
                      style={{ width: `${Math.min(metric.klDivergence / 25 * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  </div>

  {/* Performance Summary */}
  <Card className="p-4 bg-gray-50">
    <h3 className="text-lg font-semibold mb-3">Performance Insights</h3>
    <div className="grid grid-cols-3 gap-4 text-sm">
      <div>
        <div className="font-medium text-blue-700">Best Success Rate</div>
        <div className="text-xl font-bold">{findBestPerformance('successRate')}</div>
      </div>
      <div>
        <div className="font-medium text-green-700">Best mAP</div>
        <div className="text-xl font-bold">{findBestPerformance('mAP')}</div>
      </div>
      <div>
        <div className="font-medium text-amber-700">Lowest KL Divergence</div>
        <div className="text-xl font-bold">{findBestPerformance('klDivergence')}</div>
      </div>
    </div>
  </Card>
</Card>

{/*<Card className="p-6">
  <h2 className="text-2xl font-semibold mb-4">Evaluation Metrics Comparison</h2>*/}
  
  {/* Metric Overview Cards */}
  {/*<div className="grid grid-cols-3 gap-4 mb-6">
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