import { format } from 'date-fns';

/**
 * @example
 * Year-Month-Day
 * date_to_html_date(new Date()) // 2021-01-01
 */
export const date_to_html_date = (date: Date): string => format(date, 'yyyy-MM-dd');

/**
 * @example
 * Month Day, Year
 * date_to_short_date(new Date()) // Jan 1, 2021
 */
export const date_to_month_day_year = (date: Date): string => format(date, 'MMM d, yyyy');

/**
 * @example
 * Month Year
 * date_to_tiny_date(new Date()) // Jan 2021
 */
export const date_to_month_year = (date: Date): string => format(date, 'MMM yyyy');

/**
 * @example
 * Hours:Minutes AM/PM
 * date_to_time(new Date()) // 12:00 AM
 */
export const date_to_time = (date: Date): string => format(date, 'h:mm a');

/**
 * @example
 * Day, Month
 * date_to_day_month(new Date()) // 12 April
 */
export const date_to_day_month = (date: Date): string => format(date, 'd MMMM');
