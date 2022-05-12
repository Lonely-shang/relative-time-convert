"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computedDate_1 = require("./computedDate");
const zh_cn_1 = require("./zh-cn");
function relativeTimeConvert(value, limit = 94694400, compareDate, weekStartsOn = 1) {
    if (!value)
        return '';
    let _value = typeof value === 'number' ? value : new Date(value.toString().replace(/-/g, '/')).getTime();
    const computedDate = new computedDate_1.default(_value, weekStartsOn, compareDate);
    const threshold = {
        month: 3,
        week: 4,
        day: 6,
        hour: 6,
        minute: 59,
        second: 59
    };
    if (computedDate.absDiffSeconds() > limit) {
        return new Date(value);
    }
    if (computedDate.absDiffYears() > 0 && computedDate.absDiffMonths() > threshold.month) {
        return computedDate.diffYears() > 0 ? zh_cn_1.default.yearsAgo(computedDate.absDiffYears()) : zh_cn_1.default.yearsLater(computedDate.absDiffYears());
    }
    else if (computedDate.absDiffMonths() > 0 && computedDate.absDiffWeeks() >= threshold.week) {
        return computedDate.diffMonths() > 0 ? zh_cn_1.default.monthsAgo(computedDate.absDiffMonths()) : zh_cn_1.default.monthsLater(computedDate.absDiffMonths());
    }
    else if (computedDate.absDiffWeeks() > 0 && computedDate.absDiffDays() > threshold.day) {
        return computedDate.diffWeeks() > 0 ? zh_cn_1.default.weeksAgo(computedDate.absDiffWeeks()) : zh_cn_1.default.weeksLater(computedDate.absDiffWeeks());
    }
    else if (computedDate.absDiffDays() > 0 && computedDate.absDiffHours() > threshold.hour) {
        return computedDate.diffDays() > 0 ? zh_cn_1.default.daysAgo(computedDate.absDiffDays()) : zh_cn_1.default.daysLater(computedDate.absDiffDays());
    }
    else if (computedDate.absDiffHours() > 0 && computedDate.absDiffMinutes() > threshold.minute) {
        return computedDate.absDiffHours() + (computedDate.diffHours() > 0 ? zh_cn_1.default.hoursAgo : zh_cn_1.default.hoursLater);
    }
    else if (computedDate.absDiffMinutes() > 0 && computedDate.absDiffSeconds() > threshold.second) {
        return computedDate.absDiffMinutes() + (computedDate.diffMinutes() > 0 ? zh_cn_1.default.minutesAgo : zh_cn_1.default.minutesLater);
    }
    else if (computedDate.diffSeconds()) {
        return computedDate.diffSeconds() > 0 ? zh_cn_1.default.justnow : zh_cn_1.default.later;
    }
    else {
        return '';
    }
}
exports.default = relativeTimeConvert;
