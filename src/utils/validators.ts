export const validateAmount = (value: string): string | null => {
  if (!value) return null;
  
  // Remove any commas and spaces
  const cleanValue = value.replace(/[,\s]/g, '');
  
  // Check if it's a valid decimal number
  if (!/^\d*\.?\d{0,2}$/.test(cleanValue)) {
    return 'Please enter a valid amount (up to 2 decimal places)';
  }
  
  const numValue = parseFloat(cleanValue);
  
  if (numValue < 0) {
    return 'Amount cannot be negative';
  }
  
  if (numValue > 999999999.99) {
    return 'Amount is too large';
  }
  
  return null;
};