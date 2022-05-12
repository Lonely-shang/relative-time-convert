"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
class ComputedDate {
    constructor(value, weekStartsOn = 1, compareDate) {
        this.value = value;
        this.weekStartsOn = weekStartsOn;
        this.now = compareDate ? new Date(compareDate) : Date.now();
    }
    diffYears() {
        const startOfYearForTarget = (0, date_fns_1.startOfYear)(this.value);
        const startOfYearForToday = (0, date_fns_1.startOfYear)(this.now);
        return (0, date_fns_1.differenceInYears)(startOfYearForToday, startOfYearForTarget);
    }
    absDiffYears() {
        return Math.abs(this.diffYears());
    }
    diffMonths() {
        const startOfMonthForTarget = (0, date_fns_1.startOfMonth)(this.value);
        const startOfMonthForToday = (0, date_fns_1.startOfMonth)(this.now);
        return (0, date_fns_1.differenceInMonths)(startOfMonthForToday, startOfMonthForTarget);
    }
    absDiffMonths() {
        return Math.abs(this.diffMonths());
    }
    diffWeeks() {
        const startOfWeekForTarget = (0, date_fns_1.startOfWeek)(this.value, { weekStartsOn: this.weekStartsOn });
        const startOfWeekForToday = (0, date_fns_1.startOfWeek)(this.now, { weekStartsOn: this.weekStartsOn });
        return (0, date_fns_1.differenceInWeeks)(startOfWeekForToday, startOfWeekForTarget);
    }
    absDiffWeeks() {
        return Math.abs(this.diffWeeks());
    }
    diffDays() {
        const startOfDayForTarget = (0, date_fns_1.startOfDay)(this.value);
        const startOfDayForToday = (0, date_fns_1.startOfDay)(this.now);
        return (0, date_fns_1.differenceInDays)(startOfDayForToday, startOfDayForTarget);
    }
    absDiffDays() {
        return Math.abs(this.diffDays());
    }
    diffHours() {
        return (0, date_fns_1.differenceInHours)(this.now, this.value);
    }
    absDiffHours() {
        return Math.abs(this.diffHours());
    }
    diffMinutes() {
        return (0, date_fns_1.differenceInMinutes)(this.now, this.value);
    }
    absDiffMinutes() {
        return Math.abs(this.diffMinutes());
    }
    diffSeconds() {
        return (0, date_fns_1.differenceInSeconds)(this.now, this.value);
    }
    absDiffSeconds() {
        return Math.abs(this.diffSeconds());
    }
}
exports.default = ComputedDate;
