/**
 * 函数节流
 * @template A, R
 * @param {(...args: A) => R} func 要节流的函数
 * @param {number} wait 节流时间
 * @returns {(...args: A) => void} 返回被节流处理的函数
 */
export function throttle(func, wait = 0) {
  let prev = 0
  let timerId

  return function (...args) {
    const now = Number(new Date()) // +new Date()

    // 保证每次触发都清除定时器，避免一些边界 Case 也会执行两遍
    if (timerId) clearTimeout(timerId)

    if (now >= prev + wait) {
      prev = now
      func.apply(this, args)
    } else {
      timerId = setTimeout(() => {
        prev = now
        func.apply(this, args)
      }, wait)
    }
  }
}
