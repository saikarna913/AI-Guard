import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function BinaryMetrics() {
  return (
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
  </Card>
  );}
