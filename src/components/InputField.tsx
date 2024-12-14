import { AlertCircle } from "lucide-react";
import React, { ChangeEvent } from "react";

interface InputFieldProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  error,
}) => (
  <div className="space-y-4">
    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
      Enter Amount
    </label>
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
        Tk.
      </span>
      <input
        type="text"
        inputMode="decimal"
        id="amount"
        value={value}
        onChange={onChange}
        placeholder="0.00"
        className="block w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
        aria-invalid={!!error}
        aria-describedby={error ? "amount-error" : undefined}
      />
    </div>

    {error && (
      <div
        id="amount-error"
        role="alert"
        className="flex items-center space-x-2 text-red-600 min-h-[24px]"
      >
        <AlertCircle className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm">{error}</span>
      </div>
    )}
  </div>
);
