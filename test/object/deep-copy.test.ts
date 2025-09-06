import { describe, expect, it } from 'vitest'
import { deepCopy } from '../../src/object/deep-copy'

describe('deepCopy', () => {
  it('should copy primitive values', () => {
    expect(deepCopy(42)).toBe(42)
    expect(deepCopy('hello')).toBe('hello')
    expect(deepCopy(true)).toBe(true)
    expect(deepCopy(null)).toBe(null)
    expect(deepCopy(undefined)).toBe(undefined)
  })

  it('should deep copy objects', () => {
    const original = { a: 1, b: { c: 2 } }
    const copied = deepCopy(original)

    expect(copied).toEqual(original)
    expect(copied).not.toBe(original)
    expect(copied.b).not.toBe(original.b)
  })

  it('should deep copy arrays', () => {
    const original = [1, [2, 3], { a: 4 }]
    const copied = deepCopy(original)

    expect(copied).toEqual(original)
    expect(copied).not.toBe(original)
    expect(copied[1]).not.toBe(original[1])
    expect(copied[2]).not.toBe(original[2])
  })

  it('should handle nested structures', () => {
    const original = {
      a: 1,
      b: [2, { c: 3, d: [4, 5] }],
      e: { f: { g: 6 } },
    }
    const copied = deepCopy(original)

    expect(copied).toEqual(original)
    expect(copied.b[1]).not.toBe(original.b[1])
    expect(copied.b[1].d).not.toBe(original.b[1].d)
    expect(copied.e.f).not.toBe(original.e.f)
  })

  it('should handle circular references', () => {
    const original: any = { a: 1 }
    original.self = original

    expect(() => deepCopy(original)).toThrow()
  })

  it('should handle Date objects', () => {
    const date = new Date('2023-01-01')
    const copied = deepCopy(date)

    expect(copied).toEqual(date)
    expect(copied).not.toBe(date)
  })

  it('should handle RegExp objects', () => {
    const regex = /test/gi
    const copied = deepCopy(regex)

    expect(copied).toEqual({})
    expect(copied).not.toBe(regex)
  })
})
