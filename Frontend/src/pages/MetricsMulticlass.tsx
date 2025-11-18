// Types
interface ClassificationMetric {
  class: string;
  precision: number;
  recall: number;
  f1: number;
  support: number;
}

interface OverallMetrics {
  samples: number;
  successRate: number;
  klDivergence: number;
  mAP: number;
  top1Recall: number;
  top3Recall: number;
  exactMatch: number;
  jaccard: number;
  accuracy: number;
}

interface ConfusionMatrix {
  labels: string[];
  values: number[];
}

interface LanguageMetric {
  lang: string;
  samples: number;
  mAP: number;
  top1Recall: number;
  accuracy: number;
}

interface ReportData {
  overall: OverallMetrics;
  classificationReport: ClassificationMetric[];
  confusionMatrix: ConfusionMatrix;
  languages: LanguageMetric[];
}

// Hardcoded data
const reportData: ReportData = {
  overall: {
    samples: 100,
    successRate: 100.0,
    klDivergence: 4.7587,
    mAP: 0.59,
    top1Recall: 0.3208,
    top3Recall: 0.6825,
    exactMatch: 0.13,
    jaccard: 0.815,
    accuracy: 0.43,
  },
  classificationReport: [
    { class: 'S1', precision: 0.74, recall: 0.37, f1: 0.49, support: 54 },
    { class: 'S2', precision: 0.2, recall: 0.15, f1: 0.17, support: 13 },
    { class: 'S3', precision: 0.29, recall: 1.0, f1: 0.44, support: 2 },
    { class: 'S4', precision: 0.0, recall: 0.0, f1: 0.0, support: 0 },
    { class: 'S5', precision: 0.0, recall: 0.0, f1: 0.0, support: 0 },
    { class: 'S6', precision: 0.0, recall: 0.0, f1: 0.0, support: 1 },
    { class: 'S7', precision: 0.0, recall: 0.0, f1: 0.0, support: 0 },
    { class: 'S8', precision: 0.0, recall: 0.0, f1: 0.0, support: 0 },
    { class: 'S9', precision: 0.0, recall: 0.0, f1: 0.0, support: 0 },
    { class: 'S10', precision: 0.68, recall: 0.61, f1: 0.64, support: 28 },
    { class: 'S11', precision: 0.0, recall: 0.0, f1: 0.0, support: 0 },
    { class: 'S12', precision: 0.0, recall: 0.0, f1: 0.0, support: 0 },
    { class: 'S13', precision: 0.0, recall: 0.0, f1: 0.0, support: 0 },
    { class: 'S14', precision: 0.0, recall: 0.0, f1: 0.0, support: 0 },
    { class: 'S15', precision: 0.0, recall: 0.0, f1: 0.0, support: 0 },
    { class: 'S16', precision: 0.0, recall: 0.0, f1: 0.0, support: 0 },
    { class: 'S17', precision: 0.15, recall: 1.0, f1: 0.27, support: 2 },
  ],
  confusionMatrix: {
    labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'S14', 'S15', 'S16', 'S17'],
    values: [
      20, 8, 3, 2, 0, 6, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 7,
      3, 2, 1, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2,
      0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      4, 0, 1, 1, 0, 1, 0, 0, 0, 17, 0, 3, 0, 0, 0, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
    ],
  },
  languages: [
    { lang: 'bn', samples: 29, mAP: 0.5986, top1Recall: 0.3764, accuracy: 0.45 },
    { lang: 'kn', samples: 24, mAP: 0.5684, top1Recall: 0.2847, accuracy: 0.38 },
    { lang: 'ml', samples: 25, mAP: 0.5964, top1Recall: 0.3067, accuracy: 0.40 },
    { lang: 'or', samples: 22, mAP: 0.595, top1Recall: 0.3031, accuracy: 0.5 },
  ],
};

// Components
function StatCard({ title, value, positiveIsGood = true, description = "" }: { 
  title: string; 
  value: string | number; 
  positiveIsGood?: boolean; 
  description?: string; 
}) {
  const isGood = title === 'KL-Divergence' ? false : positiveIsGood;

const getValueColor = () => {
  if (title === 'KL-Divergence') {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    return numValue < 2 ? 'text-green-600' : numValue < 5 ? 'text-yellow-600' : 'text-red-600';
  }
  
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (typeof numValue === 'number') {
    if (numValue >= 0.7) return 'text-green-600';
    if (numValue >= 0.5) return 'text-yellow-600';
    return 'text-red-600';
  }
  return 'text-gray-700';
};

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 transition-all hover:shadow-md">
      <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
      <p className={`text-2xl font-bold ${getValueColor()} mb-1`}>{value}</p>
      {description && <p className="text-xs text-gray-500">{description}</p>}
    </div>
  );
}

function F1BarChart({ data }: { data: ClassificationMetric[] }) {
  const filteredData = data.filter(item => item.support > 0);
  
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">F1-Scores by Class</h3>
      <div className="space-y-3">
        {filteredData.map((item) => {
          const percentage = (item.f1 * 100).toFixed(1);
          const barColor = item.f1 >= 0.6 ? 'bg-green-500' : item.f1 >= 0.4 ? 'bg-yellow-500' : 'bg-red-500';

          return (
            <div key={item.class} className="group">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">{item.class}</span>
                <span className="text-gray-600">{item.f1.toFixed(3)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full rounded-full ${barColor} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Support: {item.support}</span>
                <span>{percentage}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ConfusionMatrix({ data }: { data: ConfusionMatrix }) {
  const { labels, values } = data;
  const numLabels = labels.length;
  const maxValue = Math.max(...values);
  
  const getCellColor = (val: number, isDiagonal: boolean) => {
    if (val === 0) return 'bg-gray-100';
    
    const intensity = val / maxValue;
    if (isDiagonal) {
      if (intensity > 0.7) return 'bg-green-600';
      if (intensity > 0.4) return 'bg-green-400';
      return 'bg-green-300';
    } else {
      if (intensity > 0.7) return 'bg-red-600';
      if (intensity > 0.4) return 'bg-red-400';
      return 'bg-red-300';
    }
  };

  const getTextColor = (val: number) => val > maxValue * 0.5 ? 'text-white' : 'text-gray-800';

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Confusion Matrix</h3>
        <div className="flex items-center space-x-3 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-400 rounded mr-1" />
            <span>Correct</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-400 rounded mr-1" />
            <span>Incorrect</span>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto text-xs">
        <div className="inline-block">
          {/* Header */}
          <div className="grid grid-cols-[40px_repeat(17,20px)] gap-1 mb-1">
            <div />
            {labels.map(label => (
              <div key={label} className="w-5 h-5 flex items-center justify-center font-medium text-gray-700 rotate-45 transform origin-center">
                {label}
              </div>
            ))}
          </div>

          {/* Matrix */}
          {labels.map((rowLabel, r) => (
            <div key={rowLabel} className="grid grid-cols-[40px_repeat(17,20px)] gap-1 mb-1">
              <div className="w-10 h-5 flex items-center justify-center font-medium text-gray-700 text-xs">
                {rowLabel}
              </div>
              {labels.map((_, c) => {
                const val = values[r * numLabels + c];
                const isDiagonal = r === c;
                const colorClass = getCellColor(val, isDiagonal);
                const textClass = getTextColor(val);

                return (
                  <div
                    key={`${r}-${c}`}
                    className={`w-5 h-5 flex items-center justify-center rounded-sm ${colorClass} ${textClass} font-medium transition-all hover:scale-110 hover:shadow-sm cursor-help`}
                    title={`True: ${rowLabel}, Predicted: ${labels[c]}, Count: ${val}`}
                  >
                    {val > 0 ? val : ''}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LanguagePerformance({ data }: { data: LanguageMetric[] }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Language Performance</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Language</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Samples</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Accuracy</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">mAP</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Top-1 Recall</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((lang, index) => (
              <tr key={lang.lang} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'][index % 4]
                    }`} />
                    <span className="text-sm font-medium text-gray-900">{lang.lang.toUpperCase()}</span>
                  </div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{lang.samples}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-700">
                  {(lang.accuracy * 100).toFixed(1)}%
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-700">
                  {lang.mAP.toFixed(3)}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-700">
                  {(lang.top1Recall * 100).toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Main Dashboard Component
export default function MetricsMulticlass() {
  const { overall, classificationReport, confusionMatrix, languages } = reportData;

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 mb-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Model Evaluation Dashboard</h1>
          <p className="text-gray-600">Analysis of {overall.samples} samples across {languages.length} languages</p>
        </header>

        {/* KPI Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Key Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard title="Accuracy" value={`${(overall.accuracy * 100).toFixed(1)}%`} />
            <StatCard title="mAP" value={overall.mAP.toFixed(3)} />
            <StatCard title="Top-1 Recall" value={`${(overall.top1Recall * 100).toFixed(1)}%`} />
            <StatCard title="Top-3 Recall" value={`${(overall.top3Recall * 100).toFixed(1)}%`} />
            <StatCard title="Jaccard" value={overall.jaccard.toFixed(3)} />
            <StatCard title="KL-Divergence" value={overall.klDivergence.toFixed(3)} positiveIsGood={false} />
            <StatCard title="Exact Match" value={`${(overall.exactMatch * 100).toFixed(1)}%`} />
            <StatCard title="Success Rate" value={`${overall.successRate.toFixed(1)}%`} />
          </div>
        </section>

        {/* Charts Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Performance Analysis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <F1BarChart data={classificationReport} />
            <ConfusionMatrix data={confusionMatrix} />
          </div>
        </section>

        {/* Language Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Language Performance</h2>
          <LanguagePerformance data={languages} />
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
          <p>Generated on {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
}