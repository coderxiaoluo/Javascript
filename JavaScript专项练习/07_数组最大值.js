/* 
coderxiaoluo
描述
请补全JavaScript函数，要求找到数组参数中的最大值并返回。
注意：数组中只包含数字。
*/

function _max(array) {
  // 将数组中第一项赋值给 max
  let max = array[0]
  // 进行for循环遍历数组的每一项
  for (let i = 0; i < array; i++) {
    // 进行if判断, 第一项和数组中的每一项进行比对 
    if(max < array[i]) {
      // 数组中如果有比第一项大的就赋值给max
      max = array[i]
    }
  }
  return max
}