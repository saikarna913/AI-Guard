import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function BinaryMetrics() {
  return (
    <Card className="p-8 bg-gradient-to-br from-white to-blue-50/30 border-blue-100 shadow-lg">
      {/* Enhanced Header */}
      <div className="text-center mb-8">

        <h2 className="text-3xl font-bold text-gray-800 mb-2">Binary Classification Evaluation</h2>
        <p className="text-gray-600 text-lg">Comprehensive performance analysis of the safety classification model</p>
      </div>
      
      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="text-sm font-semibold text-blue-800">Accuracy</div>
          </div>
          <div className="text-2xl font-bold text-blue-900 mb-2">95.60%</div>
          <div className="w-full bg-blue-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: '95.6%' }}></div>
          </div>
        </Card>
        
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="text-sm font-semibold text-green-800">Precision (UNSAFE)</div>
          </div>
          <div className="text-2xl font-bold text-green-900 mb-2">96.80%</div>
          <div className="w-full bg-green-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full transition-all duration-1000" style={{ width: '96.8%' }}></div>
          </div>
        </Card>
        
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <div className="text-sm font-semibold text-purple-800">Recall (UNSAFE)</div>
          </div>
          <div className="text-2xl font-bold text-purple-900 mb-2">95.91%</div>
          <div className="w-full bg-purple-200 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full transition-all duration-1000" style={{ width: '95.91%' }}></div>
          </div>
        </Card>
        
        <Card className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <div className="text-sm font-semibold text-amber-800">F1 Score</div>
          </div>
          <div className="text-2xl font-bold text-amber-900 mb-2">0.9635</div>
          <div className="w-full bg-amber-200 rounded-full h-2">
            <div className="bg-amber-600 h-2 rounded-full transition-all duration-1000" style={{ width: '96.35%' }}></div>
          </div>
        </Card>
      </div>

      {/* Confusion Matrix Visualization */}
      <Card className="p-6 mb-8 border-gray-200 shadow-sm">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Confusion Matrix</h3>
          <p className="text-gray-600">Model prediction vs actual results distribution</p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center max-w-2xl mx-auto">
          <div className="p-3"></div>
          <div className="p-3 font-semibold text-gray-700 bg-gray-100 rounded-lg">Predicted SAFE</div>
          <div className="p-3 font-semibold text-gray-700 bg-gray-100 rounded-lg">Predicted UNSAFE</div>
          
          <div className="p-3 font-semibold text-gray-700 bg-gray-100 rounded-lg flex items-center justify-center">Actual SAFE</div>
          <div className="p-5 bg-green-50 border-2 border-green-300 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl font-bold text-green-800">10,103</div>
            <div className="text-sm text-green-600 font-medium">True Negative</div>
          </div>
          <div className="p-5 bg-red-50 border-2 border-red-300 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl font-bold text-red-800">518</div>
            <div className="text-sm text-red-600 font-medium">False Positive</div>
          </div>
          
          <div className="p-3 font-semibold text-gray-700 bg-gray-100 rounded-lg flex items-center justify-center">Actual UNSAFE</div>
          <div className="p-5 bg-red-50 border-2 border-red-300 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl font-bold text-red-800">669</div>
            <div className="text-sm text-red-600 font-medium">False Negative</div>
          </div>
          <div className="p-5 bg-green-50 border-2 border-green-300 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl font-bold text-green-800">15,670</div>
            <div className="text-sm text-green-600 font-medium">True Positive</div>
          </div>
        </div>
      </Card>

      {/* Detailed Classification Report */}
      <Card className="p-6 mb-8 border-gray-200 shadow-sm">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Detailed Classification Report</h3>
          <p className="text-gray-600">Per-class performance metrics</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="font-semibold text-gray-700">Class</TableHead>
              <TableHead className="font-semibold text-gray-700">Precision</TableHead>
              <TableHead className="font-semibold text-gray-700">Recall</TableHead>
              <TableHead className="font-semibold text-gray-700">F1-Score</TableHead>
              <TableHead className="font-semibold text-gray-700">Support</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-blue-50/30 transition-colors">
              <TableCell className="font-semibold text-gray-800">SAFE</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-700">0.9400</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-700">0.9500</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium text-gray-700">0.9400</TableCell>
              <TableCell className="font-medium text-gray-700">10,621</TableCell>
            </TableRow>
            <TableRow className="hover:bg-green-50/30 transition-colors">
              <TableCell className="font-semibold text-gray-800">UNSAFE</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-700">0.9680</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: '96.8%' }}></div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-700">0.9591</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full transition-all duration-1000" style={{ width: '95.91%' }}></div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium text-gray-700">0.9635</TableCell>
              <TableCell className="font-medium text-gray-700">16,339</TableCell>
            </TableRow>
          </TableBody>
          <TableCaption className="text-gray-500 mt-4">
            Binary classification performance metrics (LoRA fine-tuned adapter) • Total samples: 26,960
          </TableCaption>
        </Table>
      </Card>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <div className="text-sm font-semibold text-gray-800">Cohen's Kappa</div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">0.9080</div>
          <div className="text-sm text-gray-600 bg-white/50 px-3 py-1 rounded-full inline-block">
            Excellent agreement (&gt;0.8)
          </div>
        </Card>
        
        <Card className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <div className="text-sm font-semibold text-gray-800">Matthews Correlation Coefficient</div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">0.9081</div>
          <div className="text-sm text-gray-600 bg-white/50 px-3 py-1 rounded-full inline-block">
            Strong positive correlation
          </div>
        </Card>
      </div>
    </Card>
  );
}