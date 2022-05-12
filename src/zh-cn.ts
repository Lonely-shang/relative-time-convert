export default {
  yearsAgo(num: number) {
    return num === 1 ? '去年' : `${num}年前`;
  },
  monthsAgo (num: number) {
    return num === 1 ? '上个月' : `${num}个月前`;
  },
  weeksAgo (num: number) {
    return num === 1 ? '上周' : `${num}周前`;
  },
  daysAgo (num: number) {
    return num === 1 ? '昨天' : `${num}天前`;
  },
  daysLater(num: number) {
    return num === 1 ? '明天' : `${num}天后`;
  },
  weeksLater(num: number) {
    return num === 1 ? '下周' : `${num}周后`;
  },
  monthsLater(num: number) {
    return num === 1 ? '下个月' : `${num}个月后`;
  },
  yearsLater(num: number) {
    return num === 1 ? '明年' : `${num}年后`;
  },
  hoursAgo: '小时前',
  minutesAgo: '分钟前',
  justnow: '刚刚',
  later: '稍后',
  minutesLater: '分钟后',
  hoursLater: '小时后',
}