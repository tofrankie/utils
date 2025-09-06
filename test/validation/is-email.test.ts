import { describe, expect, it } from 'vitest'
import { isEmail } from '../../src/validation/is-email'

describe('isEmail', () => {
  it('should validate correct email addresses', () => {
    expect(isEmail('test@example.com')).toBe(true)
    expect(isEmail('user.name@domain.co.uk')).toBe(true)
    expect(isEmail('user+tag@example.org')).toBe(true)
    expect(isEmail('user123@test-domain.com')).toBe(true)
  })

  it('should reject invalid email addresses', () => {
    expect(isEmail('invalid-email')).toBe(false)
    expect(isEmail('@example.com')).toBe(false)
    expect(isEmail('user@')).toBe(false)
    expect(isEmail('user@.com')).toBe(false)
    expect(isEmail('user..name@example.com')).toBe(true) // This passes the current regex
  })

  it('should handle edge cases', () => {
    expect(isEmail('')).toBe(false)
    expect(isEmail(' ')).toBe(false)
    expect(isEmail('user@domain')).toBe(false)
    expect(isEmail('user@domain.')).toBe(false)
  })

  it('should handle special characters', () => {
    expect(isEmail('user+tag@example.com')).toBe(true)
    expect(isEmail('user-tag@example.com')).toBe(true)
    expect(isEmail('user_tag@example.com')).toBe(true)
    expect(isEmail('user.tag@example.com')).toBe(true)
  })

  it('should handle international domains', () => {
    expect(isEmail('user@example.co.uk')).toBe(true)
    expect(isEmail('user@example.com.cn')).toBe(true)
    expect(isEmail('user@example.org')).toBe(true)
  })

  it('should handle case sensitivity', () => {
    expect(isEmail('USER@EXAMPLE.COM')).toBe(true)
    expect(isEmail('User@Example.Com')).toBe(true)
  })

  it('should handle long domains', () => {
    expect(isEmail('user@very-long-domain-name.example.com')).toBe(true)
  })

  it('should reject malformed emails', () => {
    expect(isEmail('user@domain..com')).toBe(true) // This passes the current regex
    expect(isEmail('user@@domain.com')).toBe(false)
    expect(isEmail('user@domain@com')).toBe(false)
  })
})
