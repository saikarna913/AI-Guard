import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table";

const Ablation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Ablation Study</h1>
          <Card className="p-6">
            <p className="text-muted-foreground mb-4">The table below shows approaches tried and the effect of removing or adding components.</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Approach</TableHead>
                  <TableHead>Removed Component</TableHead>
                  <TableHead>Accuracy</TableHead>
                  <TableHead>F1</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Full Model</TableCell>
                  <TableCell>—</TableCell>
                  <TableCell>86.7%</TableCell>
                  <TableCell>0.84</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>No Augmentation</TableCell>
                  <TableCell>Data Augmentation</TableCell>
                  <TableCell>83.2%</TableCell>
                  <TableCell>0.80</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>No Ensembling</TableCell>
                  <TableCell>Ensembling</TableCell>
                  <TableCell>84.5%</TableCell>
                  <TableCell>0.81</TableCell>
                </TableRow>
              </TableBody>
              <TableCaption>Remove one component at a time to measure its contribution.</TableCaption>
            </Table>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Ablation;
