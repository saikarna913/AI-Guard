import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table";
import { ArrowRight } from "lucide-react";

// 10 illustrative sample rows (anonymized)
const sampleRows = [
  { id: 1, text: "I will make you pay!", label: "Abusive", language: "English", safety: "unsafe" },
  { id: 2, text: "This is a friendly reminder to submit the report.", label: "Neutral", language: "English", safety: "safe" },
  { id: 3, text: "ତୁମକୁ ମାରିଦେଉଛି", label: "Threat", language: "Odia", safety: "unsafe" },
  { id: 4, text: "আমরা তোমাকে সাহায্য করবো", label: "Supportive", language: "Bengali", safety: "safe" },
  { id: 5, text: "ನೀವು ಅಸಹ್ಯ ವಾಗಿದ್ದೀರಿ", label: "Abusive", language: "Kannada", safety: "unsafe" },
  { id: 6, text: "Please review the attached file.", label: "Neutral", language: "English", safety: "safe" },
  { id: 7, text: "তুমি খারাপ কাজ করেছ", label: "Abusive", language: "Bengali", safety: "unsafe" },
  { id: 8, text: "ସହଯୋଗ ପାଇଁ ଧନ୍ୟବାଦ", label: "Supportive", language: "Odia", safety: "safe" },
  { id: 9, text: "Report this immediately", label: "Directive", language: "English", safety: "neutral" },
  { id: 10, text: "Don't talk to me", label: "Dismissive", language: "English", safety: "neutral" },
];

// Small correlation matrix example between features (values 0..1)
const features = ["toxicity", "abusive", "threat", "supportive"];
const corrMatrix = [
  [1.0, 0.78, 0.62, -0.15],
  [0.78, 1.0, 0.54, -0.23],
  [0.62, 0.54, 1.0, -0.10],
  [-0.15, -0.23, -0.10, 1.0],
];

const getHeatColor = (v: number) => {
  // map -1..1 to red->white->green
  const val = Math.max(-1, Math.min(1, v));
  if (val >= 0) {
    const g = Math.round(255 - (1 - val) * 150);
    return `rgb(${200 - Math.round(val * 80)}, ${g}, ${200 - Math.round(val * 80)})`;
  }
  const pv = Math.abs(val);
  const r = Math.round(255 - (1 - pv) * 150);
  return `rgb(${r}, ${200 - Math.round(pv * 80)}, ${200 - Math.round(pv * 80)})`;
};

const Datasets = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center mb-6 animate-in fade-in duration-700">
            <h1 className="text-4xl font-bold">Datasets & Samples</h1>
            <p className="text-muted-foreground">Explore anonymized samples, dataset statistics and a correlation matrix to understand feature relationships.</p>
          </div>

          <Card className="p-6 animate-in slide-in-from-bottom duration-700">
            <h2 className="text-2xl font-semibold mb-4">Sample Dataset Entries (10 shown)</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Text</TableHead>
                  <TableHead>Label</TableHead>
                  <TableHead>Language</TableHead>
                  <TableHead>Safety</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleRows.map((r) => (
                  <TableRow key={r.id} className="hover:scale-[1.01] transition-transform">
                    <TableCell className="font-medium">{r.id}</TableCell>
                    <TableCell className="max-w-2xl truncate">{r.text}</TableCell>
                    <TableCell>
                      <Badge className="uppercase">{r.label}</Badge>
                    </TableCell>
                    <TableCell>{r.language}</TableCell>
                    <TableCell>
                      <Badge variant={r.safety === "safe" ? undefined : r.safety === "unsafe" ? "destructive" : "outline"}>
                        {r.safety.toUpperCase()}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableCaption>These are anonymized example rows from our multi-lingual dataset (10 samples).</TableCaption>
            </Table>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 animate-in slide-in-from-left duration-700">
              <h2 className="text-2xl font-semibold mb-4">Dataset Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/10 rounded-lg">
                  <div className="text-muted-foreground text-sm">Total samples</div>
                  <div className="text-3xl font-bold">12,340</div>
                </div>
                <div className="p-4 bg-muted/10 rounded-lg">
                  <div className="text-muted-foreground text-sm">Languages</div>
                  <div className="text-3xl font-bold">6</div>
                </div>
                <div className="p-4 bg-muted/10 rounded-lg">
                  <div className="text-muted-foreground text-sm">Classes</div>
                  <div className="text-3xl font-bold">8</div>
                </div>
                <div className="p-4 bg-muted/10 rounded-lg">
                  <div className="text-muted-foreground text-sm">Imbalance (max/min)</div>
                  <div className="text-3xl font-bold">4.2x</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 animate-in slide-in-from-right duration-700">
              <h2 className="text-2xl font-semibold mb-4">Feature Correlation Matrix</h2>
              <div className="overflow-auto">
                <table className="w-full table-fixed border-collapse">
                  <thead>
                    <tr>
                      <th className="p-2 text-left" />
                      {features.map((f) => (
                        <th key={f} className="p-2 text-left text-sm text-muted-foreground">{f}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {corrMatrix.map((row, i) => (
                      <tr key={i}>
                        <td className="p-2 font-medium">{features[i]}</td>
                        {row.map((v, j) => (
                          <td key={j} className="p-2">
                            <div
                              className="rounded-md px-2 py-1 text-center text-sm"
                              style={{ background: getHeatColor(v), color: "#0f172a" }}
                              title={v.toFixed(2)}
                            >
                              {v.toFixed(2)}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Heat colors map correlation values (-1 to 1). Strong positive correlations are green-ish, negative correlations red-ish.</p>
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Datasets;
