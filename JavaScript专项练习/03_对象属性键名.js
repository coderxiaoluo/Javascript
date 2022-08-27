/* 
描述
请补全JavaScript函数，要求以数组的形式输出对象各个属性的键名。
示例：
1. _keys({name:'nowcoder',age:7}) -> ['name','age']
注意：只需考虑对象属性均为原始数据类型的情况。
 */
function _keys(object) {
  // 补全代码
  /* 
  Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，也就是获取对象的key 返回的是一个数组
  */
  return Object.keys(object)
}

/* 
Object.values() 方法返回一个给定对象自身的所有可枚举属性值的数组 也就是获取对象的value值 返回的是一个数组

Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组 也就是获取对象的key和value，返回的是一个数组

*/
