import { Card } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Ablation = () => {
  return (
    <Card className="p-6 space-y-6">

      <h2 className="text-2xl font-semibold">Ablation Study</h2>

      <Tabs defaultValue="binary" className="w-full">

        {/* TAB SWITCHER */}
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="binary">Binary Classification</TabsTrigger>
          <TabsTrigger value="multiclass">Multiclass Classification</TabsTrigger>
        </TabsList>

        {/* ------------------ BINARY TAB ------------------ */}
        <TabsContent value="binary">
          <Card className="p-6 mt-4">
            <p className="text-muted-foreground mb-4">
              Evaluation results for <b>binary safety classifier</b> (SAFE vs UNSAFE).
            </p>

            <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Setting</TableHead>
      <TableHead>Samples</TableHead>
      <TableHead>Accuracy</TableHead>
      <TableHead>SAFE (F1)</TableHead>
      <TableHead>UNSAFE (F1)</TableHead>
      <TableHead>Latency (s)</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    <TableRow>
      <TableCell>Zero-shot (Llama-3.2-1B-Instruct)</TableCell>
      <TableCell>3300</TableCell>
      <TableCell>—</TableCell>
      <TableCell>—</TableCell>
      <TableCell>—</TableCell>
      <TableCell>—</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>Few-shot (Llama-3.2-1B)</TableCell>
      <TableCell>3600</TableCell>
      <TableCell>0.5553</TableCell>
      <TableCell>0.6367</TableCell>
      <TableCell>0.4268</TableCell>
      <TableCell>0.2778</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>Few-shot (aya-expanse-8b)</TableCell>
      <TableCell>3600</TableCell>
      <TableCell>0.5544</TableCell>
      <TableCell>0.6561</TableCell>
      <TableCell>0.3675</TableCell>
      <TableCell>0.8558</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>SFT LoRA (Binary head, 14k)</TableCell>
      <TableCell>3300</TableCell>
      <TableCell>0.5912</TableCell>
      <TableCell>0.4559</TableCell>
      <TableCell>0.6959</TableCell>
      <TableCell>0.7272</TableCell>
    </TableRow>
  </TableBody>

  <TableCaption>Binary safety classification evaluation.</TableCaption>
</Table>
          </Card>
        </TabsContent>

        {/* ------------------ MULTICLASS TAB ------------------ */}
        <TabsContent value="multiclass">
          <Card className="p-6 mt-4">
            <p className="text-muted-foreground mb-4">
              Multiclass classifier results (placeholder sample data).
            </p>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Classes</TableHead>
                  <TableHead>Accuracy</TableHead>
                  <TableHead>Macro F1</TableHead>
                  <TableHead>Latency (s)</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell>Zero-shot Llama-3.2-1B</TableCell>
                  <TableCell>—</TableCell>
      <TableCell>—</TableCell>
      <TableCell>—</TableCell>
      <TableCell>—</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Few-shot Llama-3.2-1B</TableCell>
                  <TableCell>—</TableCell>
      <TableCell>—</TableCell>
      <TableCell>—</TableCell>
      <TableCell>—</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>SFT LoRA (Multiclass head)</TableCell>
                  <TableCell>—</TableCell>
      <TableCell>—</TableCell>
      <TableCell>—</TableCell>
      <TableCell>—</TableCell>
                </TableRow>
              </TableBody>

              <TableCaption>Multiclass classification performance.</TableCaption>
            </Table>
          </Card>
        </TabsContent>

      </Tabs>
    </Card>
  );
};

export default Ablation;
