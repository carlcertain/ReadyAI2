import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Calculator } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [seats, setSeats] = useState<number>(50);
  const [pricePerSeat, setPricePerSeat] = useState<number>(200);
  const [calculated, setCalculated] = useState<boolean>(false);
  const [annualSavings, setAnnualSavings] = useState<number>(0);
  const [percentageSavings, setPercentageSavings] = useState<number>(0);

  const handleCalculate = () => {
    const currentAnnualCost = seats * pricePerSeat * 12;
    const devsAiCost = seats * 30 * 12; // $30 per seat per month
    const savings = currentAnnualCost - devsAiCost;
    const savingsPercentage = (savings / currentAnnualCost) * 100;
    
    setAnnualSavings(savings);
    setPercentageSavings(savingsPercentage);
    setCalculated(true);
  };

  // Reset calculation when inputs change
  useEffect(() => {
    if (calculated) {
      setCalculated(false);
    }
  }, [seats, pricePerSeat]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex items-center mb-6">
          <Calculator className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-xl font-bold text-gray-900">AI ROI Calculator</h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          Calculate your potential savings by switching to our platform.
        </p>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="seats" className="block text-sm font-medium text-gray-700 mb-1">
              Number of AI Users
            </label>
            <input
              type="number"
              id="seats"
              min="1"
              value={seats}
              onChange={(e) => setSeats(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="pricePerSeat" className="block text-sm font-medium text-gray-700 mb-1">
              Current Monthly Cost Per User ($)
            </label>
            <input
              type="number"
              id="pricePerSeat"
              min="0"
              value={pricePerSeat}
              onChange={(e) => setPricePerSeat(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <Button 
            onClick={handleCalculate}
            isFullWidth={true}
            className="mt-2"
          >
            Calculate Savings
          </Button>
        </div>
        
        {calculated && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-semibold text-blue-900 mb-3">Your Potential Savings</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-blue-700">Annual Savings</p>
                <p className="text-2xl font-bold text-blue-900">${annualSavings.toLocaleString()}</p>
              </div>
              
              <div>
                <p className="text-sm text-blue-700">Percentage Savings</p>
                <p className="text-2xl font-bold text-blue-900">{percentageSavings.toFixed(1)}%</p>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-blue-700">
              By switching to our platform, you could save ${annualSavings.toLocaleString()} annually,
              which is {percentageSavings.toFixed(1)}% of your current AI spending.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ROICalculator;