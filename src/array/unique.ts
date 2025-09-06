/**
 * 数组去重
 *
 * @category Array
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * unique([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
 * unique(['a', 'b', 'a', 'c']) // ['a', 'b', 'c']
 * ```
 *
 * @param array - 要去重的数组
 * @returns 去重后的数组
 */
export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}
