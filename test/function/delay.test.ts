import { describe, expect, it, vi } from 'vitest'
import { delay } from '../../src/function/delay'

describe('delay', () => {
  it('should delay execution for specified time', async () => {
    const mockFn = vi.fn()
    const delayedFn = delay(mockFn, 100)

    delayedFn()
    expect(mockFn).not.toHaveBeenCalled()

    await new Promise(resolve => setTimeout(resolve, 150))
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should pass arguments to delayed function', async () => {
    const mockFn = vi.fn()
    const delayedFn = delay(mockFn, 50)

    delayedFn('arg1', 'arg2')

    await new Promise(resolve => setTimeout(resolve, 100))
    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2')
  })

  it('should work with 0 delay', async () => {
    const mockFn = vi.fn()
    const delayedFn = delay(mockFn, 0)

    delayedFn()

    await new Promise(resolve => setTimeout(resolve, 10))
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should return a function', () => {
    const mockFn = vi.fn()
    const delayedFn = delay(mockFn, 100)

    expect(typeof delayedFn).toBe('function')
  })
})
