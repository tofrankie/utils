/**
 * 深拷贝对象
 *
 * @category Object
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * const obj = { a: 1, b: { c: 2 } }
 * const copied = deepCopy(obj)
 * copied.b.c = 3
 * console.log(obj.b.c) // 2 (原对象未改变)
 * ```
 *
 * @param obj - 要拷贝的对象
 * @returns 深拷贝后的对象
 */
export function deepCopy<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item)) as T
  }

  if (typeof obj === 'object') {
    const copied = {} as T
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copied[key] = deepCopy(obj[key])
      }
    }
    return copied
  }

  return obj
}
