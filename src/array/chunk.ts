/**
 * 将数组分割成指定大小的块
 *
 * @category Array
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 3) // [[1, 2, 3], [4, 5]]
 * ```
 *
 * @param array - 要分割的数组
 * @param size - 每个块的大小
 * @returns 分割后的数组
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) {
    throw new Error('Size must be greater than 0')
  }

  const result: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}
