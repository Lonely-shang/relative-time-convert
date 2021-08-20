import ComputedDate from './computedDate';
import relativeTimeText from './zh-cn';

type Num = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
/**
 *
 * @param value 转换的值
 * @param limit 为最大限制的时间戳，超过这个时间戳就返回绝对时间 默认最大相差时间为三年
 * @param compareDate 非必选， 传入被比较时间，默认被比较时间为当前时间
 * @param weekStartsOn 非必选，每周起始日期的index，0为周日
 * @returns 返回相对时间
 */
export default function relativeTime(
  value: number | Date,
  limit: number = 94694400,
  compareDate?: string | number | Date,
  weekStartsOn: Num = 1,
) {
  if (!value) return '';

  const computedDate = new ComputedDate(value, weekStartsOn, compareDate);

  const threshold = {
    month: 3, // at least 3 months using year.
    week: 4, // at least 4 weeks using month.
    day: 6, // at least 6 days using weeks.
    hour: 6, // at least 6 hours using day.
    minute: 59, // at least 59 minutes using hour.
    second: 59 // at least 59 seconds using minute.
  };
  /**
   *  相差时间大于最大限制的时间戳，超过这个时间戳就返回绝对时间
   */
  if (computedDate.absDiffSeconds() > limit) {
    return new Date(value);
  }
  if (computedDate.absDiffYears() > 0 && computedDate.absDiffMonths() > threshold.month) {
    return computedDate.diffYears() > 0 ? relativeTimeText.yearsAgo(computedDate.absDiffYears()) : relativeTimeText.yearsLater(computedDate.absDiffYears());
  } else if (computedDate.absDiffMonths() > 0 && computedDate.absDiffWeeks() >= threshold.week) {
    return computedDate.diffMonths() > 0 ? relativeTimeText.monthsAgo(computedDate.absDiffMonths()) : relativeTimeText.monthsLater(computedDate.absDiffMonths());
  } else if (computedDate.absDiffWeeks() > 0 && computedDate.absDiffDays() > threshold.day) {
    return computedDate.diffWeeks() > 0 ? relativeTimeText.weeksAgo(computedDate.absDiffWeeks()) : relativeTimeText.weeksLater(computedDate.absDiffWeeks());
  } else if (computedDate.absDiffDays() > 0 && computedDate.absDiffHours() > threshold.hour) {
    return computedDate.diffDays() > 0 ? relativeTimeText.daysAgo(computedDate.absDiffDays()) : relativeTimeText.daysLater(computedDate.absDiffDays());
  } else if (computedDate.absDiffHours() > 0 && computedDate.absDiffMinutes() > threshold.minute) {
    return computedDate.absDiffHours() + (computedDate.diffHours() > 0 ? relativeTimeText.hoursAgo : relativeTimeText.hoursLater);
  } else if (computedDate.absDiffMinutes() > 0 && computedDate.absDiffSeconds() > threshold.second) {
    return computedDate.absDiffMinutes() + (computedDate.diffMinutes() > 0 ? relativeTimeText.minutesAgo : relativeTimeText.minutesLater);
  } else if (computedDate.diffSeconds()) {
    return computedDate.diffSeconds() > 0 ? relativeTimeText.justnow : relativeTimeText.later;
  } else {
    return '';
  }
}