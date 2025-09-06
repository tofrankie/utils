import { describe, expect, it } from 'vitest'
import { unique } from '../../src/array/unique'

describe('unique', () => {
  it('should remove duplicates from array', () => {
    expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
    expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c'])
    expect(unique([1, 1, 1, 1])).toEqual([1])
  })

  it('should handle empty array', () => {
    expect(unique([])).toEqual([])
  })

  it('should handle array with no duplicates', () => {
    expect(unique([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })
})
