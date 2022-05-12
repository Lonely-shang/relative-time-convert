# relative-time-convert
人性化时间转换

```javascript
  const relativeTimeConvert = require('relative-time-convert');
  let count = relativeTimeConvert(new Date('2021/11/11'))
```

转换规则
```text
跟当前时间相比：
不同年份且相差3个月以上转换为年，否则转换为月
不同月份且相差4周以上转换为月，否则转换为周
不是同一周且相差6天以上转换为周，否则转换为天
不是同一天且相差6小时以上转换为天，否则转换为小时
不是同一小时内且相差59分钟以上转换为小时，否则转化为分钟
不是同一分钟内且相差59秒以上转换为分钟，否则转化为“刚刚”或“稍后”
接受limit参数，当时间相差的秒数超过limit时，不做转换
```

|       参数       |                  说明                   |              类型             |   默认值   |
| :-------------: | :------------------------------------: | :--------------------------: | :--------: |
|       value     |                转换的时间                |          number,Date         |      -     |
|       limit     | 最大限制的时间戳，超过这个时间戳就返回绝对时间  |             number           | `94694400` |
|   compareDate   |               传入被比较时间              |    string, number, Date     |      -     |
|   weekStartsOn  |        每周起始日期的index，0为周日        |     0, 1, 2, 3, 4, 5, 6     |     `1`    |
