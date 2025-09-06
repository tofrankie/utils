/**
 * 从对象中排除指定的属性
 *
 * @category Object
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 }
 * omit(obj, ['b']) // { a: 1, c: 3 }
 * ```
 *
 * @param obj - 源对象
 * @param keys - 要排除的属性名数组
 * @returns 排除指定属性后的新对象
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const result = { ...obj }
  for (const key of keys) {
    delete result[key]
  }
  return result
}
