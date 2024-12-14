import { InfoIcon } from "lucide-react";
import React from "react";
import { CalculationResult } from "../types/calculator";
import { formatCurrency } from "../utils/formatters";

interface ResultCardProps {
  result: CalculationResult;
  value: number;
  isValid: boolean;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  result,
  value,
  isValid,
}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
    <div className="flex items-start justify-between mb-2">
      <h3 className="text-sm font-medium text-gray-500">{result.label}</h3>
      {result.description && (
        <div className="group relative">
          <InfoIcon className="w-4 h-4 text-gray-400 cursor-help" />
          <div className="invisible group-hover:visible absolute right-0 w-48 p-2 mt-2 text-xs text-white bg-gray-800 rounded-md shadow-lg z-10">
            {result.description}
          </div>
        </div>
      )}
    </div>
    <p className={`text-xl font-semibold text-BDT:{result.color}`}>
      BDT:{isValid ? formatCurrency(value) : "0.00"}
    </p>
  </div>
);
