/**
 * 防抖函数
 *
 * @category Function
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * const debouncedFn = debounce(() => {
 *   console.log('执行防抖函数')
 * }, 300)
 *
 * // 快速调用多次，只会在最后一次调用后 300ms 执行
 * debouncedFn()
 * debouncedFn()
 * debouncedFn() // 只有这次会执行
 * ```
 *
 * @param func - 要防抖的函数
 * @param wait - 延迟时间（毫秒）
 * @param immediate - 是否立即执行第一次调用
 * @returns 防抖后的函数
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      if (!immediate)
        func(...args)
    }

    const callNow = immediate && !timeout

    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)

    if (callNow)
      func(...args)
  }
}
