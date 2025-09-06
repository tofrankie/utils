/**
 * 检查值是否为数组
 *
 * @category Array
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * isArray([1, 2, 3]) // true
 * isArray('hello') // false
 * isArray(null) // false
 * ```
 *
 * @param value - 要检查的值
 * @returns 如果值是数组则返回 true，否则返回 false
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}
