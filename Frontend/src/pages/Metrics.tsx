import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table";

const Metrics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Metrics</h1>
          <Card className="p-6">
            <p className="text-muted-foreground mb-4">Key metrics used across experiments: Precision, Recall, F1, Accuracy, and per-language breakdowns.</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Used For</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Precision</TableCell>
                  <TableCell>True Positives / (True Positives + False Positives)</TableCell>
                  <TableCell>Safety label accuracy</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Recall</TableCell>
                  <TableCell>True Positives / (True Positives + False Negatives)</TableCell>
                  <TableCell>Capturing abusive content</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>F1</TableCell>
                  <TableCell>Harmonic mean of Precision and Recall</TableCell>
                  <TableCell>Overall balance</TableCell>
                </TableRow>
              </TableBody>
              <TableCaption>Metric definitions and their roles in evaluation.</TableCaption>
            </Table>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Metrics;
