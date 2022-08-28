
/* 
描述
请补全JavaScript函数，要求以字符串的形式输出时间戳参数所对应的"年-月-日"。
示例：
1. _date(1631159776311) -> '2021-9-9'
*/

function _date(number) {
  // 获取时间
  let date = new Date(number)
  // 获取年份
  let year = date.getFullYear()
  // 获取月份 月份从0开始 所以要加 1
  let month = date.getMonth() + 1
  // 获取日期
  let dates = date.getDate()
  // 用模板字符串拼接
  return `${year}-${month}-${dates}`

}
//获取当前时间戳
let now = Date.now()
_date(now)



