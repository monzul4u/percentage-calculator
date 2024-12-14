import { Calculator } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { InputField } from "./components/InputField";
import { ResultCard } from "./components/ResultCard";
import { CalculationResult } from "./types/calculator";
import {
  calculateAddition,
  calculateCommission,
  calculateDeduction,
  calculateMinimumRequired,
  calculateTotal,
} from "./utils/calculations";
import { validateAmount } from "./utils/validators";

const CALCULATION_RESULTS: CalculationResult[] = [
  {
    label: "Commission (2.5%)",
    value: 0,
    color: "blue-600",
  },
  {
    label: "Amount After Deduction",
    value: 0,
    color: "red-600",
  },
  {
    label: "Amount After Addition",
    value: 0,
    color: "green-600",
  },
  {
    label: "Total (102.5%)",
    value: 0,
    color: "purple-600",
  },
  {
    label: "Minimum Amount Required",
    value: 0,
    color: "amber-600",
    description: "Amount needed to reach your target after 2.5% increase",
  },
];

export function App() {
  const [amount, setAmount] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setAmount("");
      setError("");
      return;
    }

    const validationError = validateAmount(value);
    if (validationError) {
      setError(validationError);
      setAmount(value);
      return;
    }

    setAmount(value);
    setError("");
  };

  const clearAll = () => {
    setAmount("");
    setError("");
  };

  const numericAmount = parseFloat(amount);
  const isValidAmount = !isNaN(numericAmount) && numericAmount >= 0 && !error;

  const calculations = [
    calculateCommission(numericAmount),
    calculateDeduction(numericAmount),
    calculateAddition(numericAmount),
    calculateTotal(numericAmount),
    calculateMinimumRequired(numericAmount),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-center space-x-3">
          <Calculator className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-800">
            Percentage Calculator
          </h1>
        </div>

        {/* Input Section */}
        <InputField value={amount} onChange={handleInputChange} error={error} />

        {/* Results Section */}
        <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CALCULATION_RESULTS.map((result, index) => (
              <ResultCard
                key={result.label}
                result={result}
                value={isValidAmount ? calculations[index] : 0}
                isValid={isValidAmount}
              />
            ))}
          </div>
        </div>

        {/* Clear Button */}
        <div className="flex justify-center">
          <button
            onClick={clearAll}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
