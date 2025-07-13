export const parseCreateDate = (date: any): Date | null => {
  if (!date || !date.year || !date.month || !date.day) {
    return null;
  }
  // Month is 0-indexed in JavaScript Date
  return new Date(date.year, date.month - 1, date.day, date.hour, date.minute, date.second);
};
