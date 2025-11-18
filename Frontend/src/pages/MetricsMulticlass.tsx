import React, { useState } from 'react';

// --- Types ---
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

interface LanguageMetric {
  lang: string;
  samples: number;
  mAP: number;
  top1Recall: number;
  accuracy: number;
  klDivergence: number; // Added based on your data
}

interface ReportData {
  overall: OverallMetrics;
  classificationReport: ClassificationMetric[];
  languages: LanguageMetric[];
}

// --- Hardcoded Data (Updated from your text dump) ---
const reportData: ReportData = {
  overall: {
    samples: 100,
    successRate: 100.0,
    klDivergence: 4.7587,
    mAP: 0.5900,
    top1Recall: 0.3208,
    top3Recall: 0.6825,
    exactMatch: 0.1300,
    jaccard: 0.8150,
    accuracy: 0.43,
  },
  classificationReport: [
    { class: 'S1', precision: 0.74, recall: 0.37, f1: 0.49, support: 54 },
    { class: 'S2', precision: 0.20, recall: 0.15, f1: 0.17, support: 13 },
    { class: 'S3', precision: 0.29, recall: 1.00, f1: 0.44, support: 2 },
    { class: 'S4', precision: 0.00, recall: 0.00, f1: 0.00, support: 0 },
    { class: 'S5', precision: 0.00, recall: 0.00, f1: 0.00, support: 0 },
    { class: 'S6', precision: 0.00, recall: 0.00, f1: 0.00, support: 1 },
    { class: 'S7', precision: 0.00, recall: 0.00, f1: 0.00, support: 0 },
    { class: 'S8', precision: 0.00, recall: 0.00, f1: 0.00, support: 0 },
    { class: 'S9', precision: 0.00, recall: 0.00, f1: 0.00, support: 0 },
    { class: 'S10', precision: 0.68, recall: 0.61, f1: 0.64, support: 28 },
    { class: 'S11', precision: 0.00, recall: 0.00, f1: 0.00, support: 0 },
    { class: 'S12', precision: 0.00, recall: 0.00, f1: 0.00, support: 0 },
    { class: 'S13', precision: 0.00, recall: 0.00, f1: 0.00, support: 0 },
    { class: 'S14', precision: 0.00, recall: 0.00, f1: 0.00, support: 0 },
    { class: 'S15', precision: 0.00, recall: 0.00, f1: 0.00, support: 0 },
    { class: 'S16', precision: 0.00, recall: 0.00, f1: 0.00, support: 0 },
    { class: 'S17', precision: 0.15, recall: 1.00, f1: 0.27, support: 2 },
  ],
  languages: [
    { lang: 'bn', samples: 29, mAP: 0.5986, top1Recall: 0.3764, accuracy: 0.45, klDivergence: 4.3528 },
    { lang: 'kn', samples: 24, mAP: 0.5684, top1Recall: 0.2847, accuracy: 0.38, klDivergence: 5.0906 },
    { lang: 'ml', samples: 25, mAP: 0.5964, top1Recall: 0.3067, accuracy: 0.40, klDivergence: 4.8549 },
    { lang: 'or', samples: 22, mAP: 0.5900, top1Recall: 0.3031, accuracy: 0.50, klDivergence: 4.82 }, // Updated from text
  ],
};

// --- Helper Components ---

function MetricBar({ value, colorClass = "bg-blue-600" }: { value: number, colorClass?: string }) {
  return (
    <div className="flex items-center space-x-2">
      <span className="w-8 text-xs text-gray-600 text-right">{(value * 100).toFixed(0)}%</span>
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${colorClass}`} 
          style={{ width: `${Math.min(Math.max(value, 0), 1) * 100}%` }}
        />
      </div>
    </div>
  );
}

function StatCard({ title, value, type = 'neutral', subtext }: { 
  title: string; 
  value: string | number; 
  type?: 'good' | 'bad' | 'warning' | 'neutral';
  subtext?: string;
}) {
  const colors = {
    good: 'text-green-600',
    bad: 'text-red-600',
    warning: 'text-yellow-600',
    neutral: 'text-gray-900'
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
      <div className="mt-2 flex items-baseline">
        <span className={`text-2xl font-bold ${colors[type]}`}>{value}</span>
      </div>
      {subtext && <p className="mt-1 text-xs text-gray-400">{subtext}</p>}
    </div>
  );
}

// --- NEW COMPONENT: Formal Classification Table ---
function DetailedClassificationTable({ data }: { data: ClassificationMetric[] }) {
  // Filter out classes with 0 support to keep the table clean and relevant
  const activeClasses = data.filter(d => d.support > 0).sort((a, b) => b.support - a.support);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
        <div>
            <h3 className="text-lg font-bold text-gray-800">Detailed Classification Report</h3>
            <p className="text-xs text-gray-500 mt-1">Performance breakdown by class (Sorted by Support)</p>
        </div>
        <span className="text-xs font-mono bg-gray-200 text-gray-600 px-2 py-1 rounded">Top-1 Metrics</span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 w-24">Class</th>
              <th className="px-6 py-3 w-24 text-right">Support</th>
              <th className="px-6 py-3 w-48">Precision</th>
              <th className="px-6 py-3 w-48">Recall</th>
              <th className="px-6 py-3 w-48">F1-Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {activeClasses.map((row) => (
              <tr key={row.class} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-3 font-semibold text-gray-700">
                  {row.class}
                </td>
                <td className="px-6 py-3 text-right text-gray-600">
                  {row.support}
                </td>
                <td className="px-6 py-3">
                  <MetricBar value={row.precision} colorClass="bg-indigo-500" />
                </td>
                <td className="px-6 py-3">
                  <MetricBar value={row.recall} colorClass="bg-purple-500" />
                </td>
                <td className="px-6 py-3">
                  <div className="flex items-center justify-between">
                    <span className={`font-bold ${(row.f1 < 0.3) ? 'text-red-500' : (row.f1 > 0.7) ? 'text-green-600' : 'text-yellow-600'}`}>
                        {row.f1.toFixed(2)}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50 text-gray-500 text-xs border-t border-gray-200">
            <tr>
                <td colSpan={5} className="px-6 py-3 text-center">
                    * Classes with 0 support are hidden for clarity
                </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

function LanguageSummary({ languages }: { languages: LanguageMetric[] }) {
    // Find best performing language based on accuracy
    const bestLang = [...languages].sort((a, b) => b.accuracy - a.accuracy)[0];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {languages.map((lang) => {
                const isBest = lang.lang === bestLang.lang;
                return (
                    <div key={lang.lang} className={`relative p-4 rounded-xl border ${isBest ? 'border-green-200 bg-green-50/50' : 'border-gray-200 bg-white'}`}>
                         {isBest && (
                            <div className="absolute -top-3 left-4 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full border border-green-200 font-bold">
                                Top Performer
                            </div>
                        )}
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="text-lg font-bold text-gray-800 uppercase">{lang.lang}</h4>
                                <span className="text-xs text-gray-500">{lang.samples} Samples</span>
                            </div>
                            <div className="text-right">
                                <span className="block text-2xl font-bold text-gray-900">{(lang.accuracy * 100).toFixed(0)}%</span>
                                <span className="text-[10px] uppercase text-gray-400 tracking-wider">Accuracy</span>
                            </div>
                        </div>
                        
                        <div className="space-y-2 mt-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">mAP</span>
                                <span className="font-medium text-gray-700">{lang.mAP.toFixed(3)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">KL-Div</span>
                                <span className={`font-medium ${lang.klDivergence > 5 ? 'text-red-500' : 'text-gray-700'}`}>
                                    {lang.klDivergence.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

// --- Main Dashboard Component ---
export default function ModelEvaluationDashboard() {
  const { overall, classificationReport, languages } = reportData;

  return (
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 border-b border-gray-200">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Model Evaluation Report</h1>
            <p className="text-gray-500 mt-1">Analysis run on {overall.samples} samples across {languages.length} languages</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${overall.successRate === 100 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
              Success Rate: {overall.successRate}%
            </span>
          </div>
        </header>

        {/* Key Metrics Grid */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Overall Performance Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard 
                title="Accuracy" 
                value={`${(overall.accuracy * 100).toFixed(1)}%`} 
                type={overall.accuracy < 0.5 ? 'bad' : 'warning'}
                subtext="Low accuracy indicates high confusion"
            />
            <StatCard 
                title="mAP" 
                value={overall.mAP.toFixed(3)} 
                type="neutral"
                subtext="Mean Average Precision"
            />
            <StatCard 
                title="KL Divergence" 
                value={overall.klDivergence.toFixed(3)} 
                type={overall.klDivergence > 4 ? 'bad' : 'good'}
                subtext="Lower is better"
            />
             <StatCard 
                title="Jaccard Sim" 
                value={overall.jaccard.toFixed(3)} 
                type="good"
                subtext="Set similarity score"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
             <StatCard title="Exact Match" value={`${(overall.exactMatch * 100).toFixed(1)}%`} type="bad" />
             <StatCard title="Top-1 Recall" value={`${(overall.top1Recall * 100).toFixed(1)}%`} type="bad" />
             <StatCard title="Top-3 Recall" value={`${(overall.top3Recall * 100).toFixed(1)}%`} type="good" />
             <StatCard title="Avg Samples" value={(overall.samples / languages.length).toFixed(0)} subtext="Per language" />
          </div>
        </section>

        {/* Language Breakdown */}
        <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Language Performance</h2>
            <LanguageSummary languages={languages} />
        </section>

        {/* Detailed Classification Table (Replaces Confusion Matrix) */}
        <section>
          <DetailedClassificationTable data={classificationReport} />
        </section>

      </div>

  );
}