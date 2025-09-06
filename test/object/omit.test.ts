import { describe, expect, it } from 'vitest'
import { omit } from '../../src/object/omit'

describe('omit', () => {
  it('should omit specified keys from object', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 }
    const result = omit(obj, ['b', 'd'])

    expect(result).toEqual({ a: 1, c: 3 })
  })

  it('should handle empty keys array', () => {
    const obj = { a: 1, b: 2 }
    const result = omit(obj, [])

    expect(result).toEqual(obj)
    expect(result).not.toBe(obj)
  })

  it('should handle non-existent keys', () => {
    const obj = { a: 1, b: 2 }
    const result = omit(obj, ['c', 'd'])

    expect(result).toEqual(obj)
    expect(result).not.toBe(obj)
  })

  it('should handle all keys', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const result = omit(obj, ['a', 'b', 'c'])

    expect(result).toEqual({})
  })

  it('should handle nested values', () => {
    const obj = { a: 1, b: { c: 2 }, d: 3 }
    const result = omit(obj, ['a', 'd'])

    expect(result).toEqual({ b: { c: 2 } })
    expect(result.b).toBe(obj.b)
  })

  it('should handle empty object', () => {
    const obj = {}
    const result = omit(obj, ['a', 'b'])

    expect(result).toEqual({})
  })
})
