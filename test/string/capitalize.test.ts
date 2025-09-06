import { describe, expect, it } from 'vitest'
import { capitalize } from '../../src/string/capitalize'

describe('capitalize', () => {
  it('should capitalize first letter of string', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('world')).toBe('World')
    expect(capitalize('javascript')).toBe('Javascript')
  })

  it('should handle empty string', () => {
    expect(capitalize('')).toBe('')
  })

  it('should handle single character', () => {
    expect(capitalize('a')).toBe('A')
    expect(capitalize('A')).toBe('A')
  })

  it('should handle already capitalized string', () => {
    expect(capitalize('Hello')).toBe('Hello')
    expect(capitalize('WORLD')).toBe('WORLD')
  })

  it('should handle string with numbers', () => {
    expect(capitalize('123hello')).toBe('123hello')
    expect(capitalize('hello123')).toBe('Hello123')
  })

  it('should handle string with special characters', () => {
    expect(capitalize('!hello')).toBe('!hello')
    expect(capitalize('hello!')).toBe('Hello!')
  })

  it('should handle string with spaces', () => {
    expect(capitalize('hello world')).toBe('Hello world')
    expect(capitalize(' hello')).toBe(' hello')
  })

  it('should handle unicode characters', () => {
    expect(capitalize('你好')).toBe('你好')
    expect(capitalize('αβγ')).toBe('Αβγ')
  })
})
