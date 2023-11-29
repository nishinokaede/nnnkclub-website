/**
 * 判断是不是闰年
 * @param year 年份
 * @returns {boolean} true是闰年 false不是闰年
 */
export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * 判断每个月有多少天
 * @param value YYYYMM格式的日期
 * @returns {number|number} 天数
 */
export function getDaysInMonth(value) {
  const year = value.substring(0, 4);
  const month = value.substring(4, 6);
  const lastDay = new Date(year, month, 0).getDate();
  return month === 2 && isLeapYear(year) ? 29 : lastDay;
}
