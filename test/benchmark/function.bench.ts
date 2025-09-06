import { bench, describe } from 'vitest'
import { debounce, delay, throttle } from '../../src/function'

describe('function utilities benchmark', () => {
  const mockFn = () => {
    let sum = 0
    for (let i = 0; i < 1000; i++) {
      sum += i
    }
    return sum
  }

  bench('debounce - creation', () => {
    debounce(mockFn, 100)
  })

  bench('throttle - creation', () => {
    throttle(mockFn, 100)
  })

  bench('delay - creation', () => {
    delay(mockFn, 100)
  })

  bench('debounce - execution', () => {
    const debouncedFn = debounce(mockFn, 100)
    debouncedFn()
  })

  bench('throttle - execution', () => {
    const throttledFn = throttle(mockFn, 100)
    throttledFn()
  })

  bench('delay - execution', () => {
    const delayedFn = delay(mockFn, 100)
    delayedFn()
  })
})
