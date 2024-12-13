import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ROICalculator = () => {
  const [employees, setEmployees] = useState(20);
  const [costPerEmployee, setCostPerEmployee] = useState(50000);
  const [conversationsPerDay, setConversationsPerDay] = useState(20);
  const [shiftPercentage, setShiftPercentage] = useState(50);

  const calculateSavings = () => {
    const yearlyBaseCost = employees * costPerEmployee;
    const years = [0, 1, 2, 3];
    
    return years.map(year => {
      const agentCost = year === 0 ? yearlyBaseCost : yearlyBaseCost * (1 - (shiftPercentage / 100) * (year / 3));
      const serviceCost = year === 0 ? 0 : (50000 + (year * 20000));
      const savings = year === 0 ? 0 : (yearlyBaseCost - agentCost - serviceCost);
      
      return {
        year,
        agentCost: Math.round(agentCost),
        serviceCost: Math.round(serviceCost),
        savings: Math.round(savings)
      };
    });
  };

  const results = calculateSavings();
  const totalSavings = results.reduce((acc, curr) => acc + curr.savings, 0);

  return (
    <Dialog>
      <DialogTrigger className="bg-gradient-glass backdrop-blur-sm border border-white/20 px-6 md:px-8 py-3 md:py-4 rounded-full hover:shadow-glass transition-all duration-300 hover:-translate-y-1 text-primary">
        Calculate ROI
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-6">
            ROI Calculator
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Tell us about your business</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Number of customer service employees</Label>
                <Input
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Average annual cost per employee (USD)</Label>
                <Input
                  type="number"
                  value={costPerEmployee}
                  onChange={(e) => setCostPerEmployee(Number(e.target.value))}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Conversations handled by each rep on an average day</Label>
                <Input
                  type="number"
                  value={conversationsPerDay}
                  onChange={(e) => setConversationsPerDay(Number(e.target.value))}
                />
              </div>
              
              <div className="space-y-2">
                <Label>% of support conversations shifted to AI over 3 years</Label>
                <Slider
                  value={[shiftPercentage]}
                  onValueChange={(value) => setShiftPercentage(value[0])}
                  max={100}
                  step={1}
                />
                <div className="text-right text-sm text-muted-foreground">
                  {shiftPercentage}%
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">With AI Service Agent handling</p>
              <p className="text-primary font-bold text-xl">{shiftPercentage}% of conversations you will save</p>
              <h2 className="text-4xl md:text-5xl font-bold">${totalSavings.toLocaleString()}</h2>
              <p className="text-sm text-muted-foreground">3-year total net savings</p>
            </div>
            
            <Tabs defaultValue="table">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="table">Table</TabsTrigger>
                <TabsTrigger value="chart">Chart</TabsTrigger>
              </TabsList>
              
              <TabsContent value="table" className="border rounded-lg p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Year</TableHead>
                      <TableHead>Agent-related cost</TableHead>
                      <TableHead>AI cost</TableHead>
                      <TableHead>Your savings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map((row) => (
                      <TableRow key={row.year}>
                        <TableCell>Year {row.year}</TableCell>
                        <TableCell>${row.agentCost.toLocaleString()}</TableCell>
                        <TableCell>${row.serviceCost.toLocaleString()}</TableCell>
                        <TableCell>${row.savings.toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="chart">
                Chart view coming soon...
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ROICalculator;