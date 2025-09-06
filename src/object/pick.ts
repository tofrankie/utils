/**
 * 从对象中选取指定的属性
 *
 * @category Object
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 }
 * pick(obj, ['a', 'c']) // { a: 1, c: 3 }
 * ```
 *
 * @param obj - 源对象
 * @param keys - 要选取的属性名数组
 * @returns 包含指定属性的新对象
 */
export function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> {
  const result = {} as Pick<T, K>
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result
}
