export const calculateCommission = (value: number): number => {
  if (isNaN(value)) return 0;
  return Math.round(value * 0.025);
};

export const calculateDeduction = (value: number): number => {
  if (isNaN(value)) return 0;
  return Math.round(value * 0.975);
};

export const calculateAddition = (value: number): number => {
  if (isNaN(value)) return 0;
  return Math.round(value * 1.025);
};

export const calculateTotal = (value: number): number => {
  if (isNaN(value)) return 0;
  return Math.round(value * 1.025);
};

export const calculateMinimumRequired = (value: number): number => {
  if (isNaN(value)) return 0;
  return Math.round(value / 1.025);
};