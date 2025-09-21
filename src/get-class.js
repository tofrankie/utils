/**
 * 获取一个值的数据类型，返回一个字符串。如：Object、Array、Function、Undefined、Null、String、Boolean、Date、RegExp、JSON、Symbol、BigInt、Window 等
 *
 * Object.prototype.toString() 原理：
 * 1. 如果参数 undefined，则返回 [object Undefined] 字符串；
 * 2. 如果参数 null，则返回 [object Null] 字符串；
 * 3. 如果参数是一个对象，则返回 "[object " + obj.[[Class]] + "]" 字符串，例如 [object Array]；
 * 4. 如果参数是一个原始值，则会先将其转换为相应的对象，然后按照以上的规则输出。
 *
 * 其中 Object.prototype.toString() 是唯一一个可以访问对象内部 [[Class]] 属性的方法。
 * 推荐文章：https://github.com/tofrankie/blog/issues/239
 */
export function getClass(x) {
  const str = Object.prototype.toString.call(x)
  return /^\[object (.*)\]$/.exec(str)[1]
}
