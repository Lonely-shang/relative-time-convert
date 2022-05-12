"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    yearsAgo(num) {
        return num === 1 ? '去年' : `${num}年前`;
    },
    monthsAgo(num) {
        return num === 1 ? '上个月' : `${num}个月前`;
    },
    weeksAgo(num) {
        return num === 1 ? '上周' : `${num}周前`;
    },
    daysAgo(num) {
        return num === 1 ? '昨天' : `${num}天前`;
    },
    daysLater(num) {
        return num === 1 ? '明天' : `${num}天后`;
    },
    weeksLater(num) {
        return num === 1 ? '下周' : `${num}周后`;
    },
    monthsLater(num) {
        return num === 1 ? '下个月' : `${num}个月后`;
    },
    yearsLater(num) {
        return num === 1 ? '明年' : `${num}年后`;
    },
    hoursAgo: '小时前',
    minutesAgo: '分钟前',
    justnow: '刚刚',
    later: '稍后',
    minutesLater: '分钟后',
    hoursLater: '小时后',
};
