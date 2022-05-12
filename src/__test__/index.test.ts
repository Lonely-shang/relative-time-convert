/*
 * @Author: Eliauk
 * @Date: 2021-11-19 15:12:28
 * @LastEditTime: 2022-05-11 21:56:36
 * @LastEditors: Eliauk
 * @Description: 
 * @FilePath: /relative-time-convert/src/__test__/index.test.ts
 * 一行代码一行诗，一个系统一座城。（talk is cheap,show me the code）
 */

import relativeTimeConvert from '../relativeTimeConvert'

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

describe('测试日时间转换', () => {

  test('前一天日期生成昨天', () => {
    expect(relativeTimeConvert(`${year}-${month}-${day - 1}`)).toBe('昨天')
  })

  test('两天之前的信息生成两天前', () => {
    expect(relativeTimeConvert(`${year}-${month}-${day - 2}`)).toBe('2天前')
  })

  test('时间戳前一天日期生成昨天', () => {
    expect(relativeTimeConvert(new Date(`${year}/${month}/${day - 1}`).getTime())).toBe('昨天')
  })

  test('时间戳两天之前的信息生成两天前', () => {
    expect(relativeTimeConvert(new Date(`${year}/${month}/${day - 2}`).getTime())).toBe('2天前')
  })

})

describe('测试周时间转换', () => {
  test('>7天生成下周', () => {
    expect(relativeTimeConvert(`${year}-${month}-${day + 7}`)).toBe('下周')
  })
  
})

describe('测试月时间转换', () => {

  test('前一个月日期生成上个月', () => {
    expect(relativeTimeConvert(`${year}-${month - 1}-${day}`)).toBe('上个月')
  })

  test('两个月之前的信息生成两个月前', () => {
    expect(relativeTimeConvert(`${year}-${month - 2}-${day}`)).toBe('2个月前')
  })

  test('时间戳前一个月日期生成上个月', () => {
    expect(relativeTimeConvert(new Date(`${year}/${month - 1}/${day}`).getTime())).toBe('上个月')
  })

  test('时间戳两个月之前的信息生成两个月前', () => {
    expect(relativeTimeConvert(new Date(`${year}/${month - 2}/${day}`).getTime())).toBe('2个月前')
  })

})

describe('测试年时间转换', () => {
  test('>1年生成明年', () => {
    expect(relativeTimeConvert(`${year + 1}-${month}-${day}`)).toBe('明年')
  })

  test('<1年生成去年', () => {
    expect(relativeTimeConvert(`${year - 1}-${month}-${day}`)).toBe('去年')
  })
})
