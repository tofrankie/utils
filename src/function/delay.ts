/**
 * 延迟执行函数
 *
 * @category Function
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * const delayedFn = delay(() => {
 *   console.log('延迟执行')
 * }, 1000)
 *
 * // 1秒后执行
 * delayedFn()
 * ```
 *
 * @param func - 要延迟执行的函数
 * @param ms - 延迟时间（毫秒）
 * @returns 延迟执行的函数
 */
export function delay<T extends (...args: any[]) => any>(
  func: T,
  ms: number,
): (...args: Parameters<T>) => void {
  return (...args: Parameters<T>) => {
    setTimeout(() => func(...args), ms)
  }
}
