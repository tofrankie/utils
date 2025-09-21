/**
 * 函数防抖
 * @template A, R
 * @param {(...args: A) => R} func 要防抖的函数
 * @param {number} wait 防抖时间
 * @param {boolean} [immediate] 立即执行
 * @returns {(...args: A) => void} 返回被防抖处理的函数
 */
export function debounce(func, wait, immediate = false) {
  let timerId
  return function (...args) {
    if (timerId) clearTimeout(timerId)

    if (immediate && !timerId) {
      func.apply(this, args)
    }

    timerId = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
