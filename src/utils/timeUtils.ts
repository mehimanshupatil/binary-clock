export const formatTime = (date: Date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return { hours, minutes, seconds };
};

export const digitToBinary = (digit: string): number[] => {
  const num = parseInt(digit);
  return [
    (num & 8) >> 3,
    (num & 4) >> 2,
    (num & 2) >> 1,
    num & 1
  ];
};