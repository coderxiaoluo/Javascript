/* 
描述
请补全JavaScript函数，要求将参数数组转换为字符串输出。
示例：
1. _join([1,'2',3]) -> "123"
注意：只需考虑一维数组且数据类型为原始数据类型。
*/


function _join(array) {
  // Array.prototype.join()方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串
  return array.join('')

 // 方法2
//  先定义一个字符串
    let str = ''
    // 将传进来的数组进行遍历
    array.forEach(item => {
      // 将每一项item赋值给str
        str = str + item
    })
    return str
}


_join([1,'2',3])