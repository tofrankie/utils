import { describe, expect, it } from 'vitest'
import { pick } from '../../src/object/pick'

describe('pick', () => {
  it('should pick specified keys from object', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 }
    const result = pick(obj, ['a', 'c'])

    expect(result).toEqual({ a: 1, c: 3 })
  })

  it('should handle empty keys array', () => {
    const obj = { a: 1, b: 2 }
    const result = pick(obj, [])

    expect(result).toEqual({})
  })

  it('should handle non-existent keys', () => {
    const obj = { a: 1, b: 2 }
    const result = pick(obj, ['a', 'c', 'd'])

    expect(result).toEqual({ a: 1 })
  })

  it('should handle all keys', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const result = pick(obj, ['a', 'b', 'c'])

    expect(result).toEqual(obj)
    expect(result).not.toBe(obj)
  })

  it('should handle nested values', () => {
    const obj = { a: 1, b: { c: 2 }, d: 3 }
    const result = pick(obj, ['a', 'b'])

    expect(result).toEqual({ a: 1, b: { c: 2 } })
    expect(result.b).toBe(obj.b)
  })

  it('should handle empty object', () => {
    const obj = {}
    const result = pick(obj, ['a', 'b'])

    expect(result).toEqual({})
  })
})
