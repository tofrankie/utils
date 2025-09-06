import { describe, expect, it } from 'vitest'
import { chunk } from '../../src/array/chunk'

describe('chunk', () => {
  it('should chunk array into specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2, 3],
      [4, 5],
    ])
    expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]])
  })

  it('should handle empty array', () => {
    expect(chunk([], 2)).toEqual([])
  })

  it('should throw error for invalid size', () => {
    expect(() => chunk([1, 2, 3], 0)).toThrow('Size must be greater than 0')
    expect(() => chunk([1, 2, 3], -1)).toThrow('Size must be greater than 0')
  })
})
