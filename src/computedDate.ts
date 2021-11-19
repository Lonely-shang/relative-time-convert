import {
  startOfYear,
  differenceInYears,
  startOfMonth,
  differenceInMonths,
  startOfWeek,
  differenceInWeeks,
  startOfDay,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

type Num = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
interface IComputedDate {
  diffYears:() => number;
  absDiffYears:() => number;
  diffMonths: ()=> number;
  absDiffMonths: ()=> number;
  diffWeeks: ()=> number;
  absDiffWeeks: ()=> number;
  diffDays: ()=> number;
  absDiffDays: ()=> number;
  diffHours: ()=> number;
  absDiffHours: ()=> number;
  diffMinutes: ()=> number;
  absDiffMinutes: ()=> number;
  diffSeconds: ()=> number;
  absDiffSeconds: ()=> number;
}

export default class ComputedDate implements IComputedDate{

  private now: Date | number;
  private value: number | Date;
  private weekStartsOn: Num;

  constructor(value: number | Date, weekStartsOn: Num = 1, compareDate?: string | number ){
    this.value = value;
    this.weekStartsOn = weekStartsOn;
    this.now = compareDate ? new Date(compareDate) : Date.now();
  }

  diffYears() {
    const startOfYearForTarget = startOfYear(this.value);
    const startOfYearForToday = startOfYear(this.now);
    return differenceInYears(startOfYearForToday, startOfYearForTarget);
  }
  absDiffYears () {
    return Math.abs(this.diffYears());
  }

  diffMonths () {
    const startOfMonthForTarget = startOfMonth(this.value);
    const startOfMonthForToday = startOfMonth(this.now);
    return differenceInMonths(startOfMonthForToday, startOfMonthForTarget);
  }
  absDiffMonths () {
    return Math.abs(this.diffMonths());
  }

  diffWeeks () {
    const startOfWeekForTarget = startOfWeek(this.value, { weekStartsOn: this.weekStartsOn });
    const startOfWeekForToday = startOfWeek(this.now, { weekStartsOn: this.weekStartsOn });
    return differenceInWeeks(startOfWeekForToday, startOfWeekForTarget);
  }
  absDiffWeeks () {
    return Math.abs(this.diffWeeks());
  }

  diffDays () {
    const startOfDayForTarget = startOfDay(this.value);
    const startOfDayForToday = startOfDay(this.now);
    return differenceInDays(startOfDayForToday, startOfDayForTarget);
  }
  absDiffDays () {
    return Math.abs(this.diffDays());
  }

  diffHours () {
    return differenceInHours(this.now, this.value);
  }
  absDiffHours () {
    return Math.abs(this.diffHours());
  }

  diffMinutes () {
    return differenceInMinutes(this.now, this.value);
  }
  absDiffMinutes () {
    return Math.abs(this.diffMinutes());
  }

  diffSeconds () {
    console.log(differenceInSeconds(1629388800000, 1534694400000))
    return differenceInSeconds(this.now, this.value);
  }
  absDiffSeconds () {
    return Math.abs(this.diffSeconds());
  }

}