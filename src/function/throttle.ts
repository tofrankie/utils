/**
 * 节流函数
 *
 * @category Function
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * const throttledFn = throttle(() => {
 *   console.log('执行节流函数')
 * }, 300)
 *
 * // 在 300ms 内多次调用，只会执行一次
 * throttledFn()
 * throttledFn() // 被忽略
 * throttledFn() // 被忽略
 * ```
 *
 * @param func - 要节流的函数
 * @param wait - 节流时间（毫秒）
 * @returns 节流后的函数
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  let previous = 0

  return function executedFunction(...args: Parameters<T>) {
    const now = Date.now()
    const remaining = wait - (now - previous)

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func(...args)
    }
    else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now()
        timeout = null
        func(...args)
      }, remaining)
    }
  }
}
