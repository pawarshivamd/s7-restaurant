import { OPERATING_HOURS } from './constants';

/**
 * Get operating hours for a given day of week
 * @param {number} dayOfWeek - 0=Sunday, 1=Monday, ..., 6=Saturday
 * @returns {{ start: number, end: number, label: string }}
 */
export const getOperatingHours = (dayOfWeek) => {
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  return isWeekend ? OPERATING_HOURS.weekend : OPERATING_HOURS.weekdays;
};

/**
 * Convert minutes to "HH:mm" string
 * @param {number} mins - Minutes from midnight
 * @returns {string}
 */
export const minutesToTimeStr = (mins) =>
  `${Math.floor(mins / 60).toString().padStart(2, '0')}:${(mins % 60).toString().padStart(2, '0')}`;

/**
 * Get day name from day of week
 * @param {number} day - 0=Sunday, 6=Saturday
 * @returns {string}
 */
export const getDayName = (day) => {
  if (day === 0) return 'Sunday';
  if (day === 6) return 'Saturday';
  return 'weekdays (Mon-Fri)';
};
