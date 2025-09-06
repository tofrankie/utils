import { beforeEach, describe, expect, it, vi } from 'vitest'
import { throttle } from '../../src/function/throttle'

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('should call function immediately on first call', () => {
    const fn = vi.fn()
    const throttledFn = throttle(fn, 100)

    throttledFn()
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should not call function again within throttle period', () => {
    const fn = vi.fn()
    const throttledFn = throttle(fn, 100)

    throttledFn()
    throttledFn()
    throttledFn()

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should call function again after throttle period', () => {
    const fn = vi.fn()
    const throttledFn = throttle(fn, 100)

    throttledFn()
    vi.advanceTimersByTime(100)
    throttledFn()

    expect(fn).toHaveBeenCalledTimes(2)
  })

  it('should pass arguments to function', () => {
    const fn = vi.fn()
    const throttledFn = throttle(fn, 100)

    throttledFn('arg1', 'arg2')
    vi.advanceTimersByTime(100)
    throttledFn('arg3', 'arg4')

    expect(fn).toHaveBeenNthCalledWith(1, 'arg1', 'arg2')
    expect(fn).toHaveBeenNthCalledWith(2, 'arg3', 'arg4')
  })
})
