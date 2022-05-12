interface IComputedDate {
    diffYears: () => number;
    absDiffYears: () => number;
    diffMonths: () => number;
    absDiffMonths: () => number;
    diffWeeks: () => number;
    absDiffWeeks: () => number;
    diffDays: () => number;
    absDiffDays: () => number;
    diffHours: () => number;
    absDiffHours: () => number;
    diffMinutes: () => number;
    absDiffMinutes: () => number;
    diffSeconds: () => number;
    absDiffSeconds: () => number;
}
export default class ComputedDate implements IComputedDate {
    private now;
    private value;
    private weekStartsOn;
    constructor(value: number | Date, weekStartsOn?: WeekStart, compareDate?: string | number);
    diffYears(): number;
    absDiffYears(): number;
    diffMonths(): number;
    absDiffMonths(): number;
    diffWeeks(): number;
    absDiffWeeks(): number;
    diffDays(): number;
    absDiffDays(): number;
    diffHours(): number;
    absDiffHours(): number;
    diffMinutes(): number;
    absDiffMinutes(): number;
    diffSeconds(): number;
    absDiffSeconds(): number;
}
export {};
