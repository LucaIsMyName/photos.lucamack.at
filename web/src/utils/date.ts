import type { DateFormat } from '../types';

export const parseCreateDate = (date: DateFormat | null | undefined): Date | null => {
  if (!date) {
    return null;
  }
  
  // Handle string format (ISO string: YYYY-MM-DDTHH:mm:ss.sssZ)
  if (typeof date === 'string') {
    return new Date(date);
  }
  
  // Handle legacy object format
  if (date && typeof date === 'object' && date.year && date.month && date.day) {
    // Month is 0-indexed in JavaScript Date
    return new Date(date.year, date.month - 1, date.day, date.hour || 0, date.minute || 0, date.second || 0);
  }
  
  return null;
};
