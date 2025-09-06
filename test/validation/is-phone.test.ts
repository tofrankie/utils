import { describe, expect, it } from 'vitest'
import { isPhone } from '../../src/validation/is-phone'

describe('isPhone', () => {
  it('should validate correct Chinese mobile numbers', () => {
    expect(isPhone('13800138000')).toBe(true)
    expect(isPhone('15912345678')).toBe(true)
    expect(isPhone('18612345678')).toBe(true)
    expect(isPhone('17712345678')).toBe(true)
  })

  it('should validate different mobile prefixes', () => {
    expect(isPhone('13012345678')).toBe(true) // China Unicom
    expect(isPhone('13112345678')).toBe(true) // China Unicom
    expect(isPhone('13212345678')).toBe(true) // China Unicom
    expect(isPhone('13312345678')).toBe(true) // China Telecom
    expect(isPhone('13412345678')).toBe(true) // China Mobile
    expect(isPhone('13512345678')).toBe(true) // China Mobile
    expect(isPhone('13612345678')).toBe(true) // China Mobile
    expect(isPhone('13712345678')).toBe(true) // China Mobile
    expect(isPhone('13812345678')).toBe(true) // China Mobile
    expect(isPhone('13912345678')).toBe(true) // China Mobile
    expect(isPhone('15012345678')).toBe(true) // China Mobile
    expect(isPhone('15112345678')).toBe(true) // China Mobile
    expect(isPhone('15212345678')).toBe(true) // China Mobile
    expect(isPhone('15312345678')).toBe(true) // China Telecom
    expect(isPhone('15512345678')).toBe(true) // China Unicom
    expect(isPhone('15612345678')).toBe(true) // China Unicom
    expect(isPhone('15712345678')).toBe(true) // China Mobile
    expect(isPhone('15812345678')).toBe(true) // China Mobile
    expect(isPhone('15912345678')).toBe(true) // China Mobile
    expect(isPhone('18012345678')).toBe(true) // China Telecom
    expect(isPhone('18112345678')).toBe(true) // China Telecom
    expect(isPhone('18212345678')).toBe(true) // China Mobile
    expect(isPhone('18312345678')).toBe(true) // China Mobile
    expect(isPhone('18412345678')).toBe(true) // China Mobile
    expect(isPhone('18512345678')).toBe(true) // China Unicom
    expect(isPhone('18612345678')).toBe(true) // China Unicom
    expect(isPhone('18712345678')).toBe(true) // China Mobile
    expect(isPhone('18812345678')).toBe(true) // China Mobile
    expect(isPhone('18912345678')).toBe(true) // China Telecom
  })

  it('should reject invalid length', () => {
    expect(isPhone('1380013800')).toBe(false) // 10 digits
    expect(isPhone('138001380000')).toBe(false) // 12 digits
  })

  it('should reject non-numeric characters', () => {
    expect(isPhone('1380013800a')).toBe(false)
    expect(isPhone('1380013800 ')).toBe(false)
    expect(isPhone('138-0013-8000')).toBe(false)
  })

  it('should reject invalid prefixes', () => {
    expect(isPhone('12012345678')).toBe(false) // Invalid prefix
    expect(isPhone('19012345678')).toBe(true) // This passes the current regex (1[3-9])
  })

  it('should handle edge cases', () => {
    expect(isPhone('')).toBe(false)
    expect(isPhone('123')).toBe(false)
    expect(isPhone('abcdefghijk')).toBe(false)
  })

  it('should handle international format', () => {
    expect(isPhone('+8613800138000')).toBe(false) // Should not include country code
    expect(isPhone('8613800138000')).toBe(false) // Should not include country code
  })
})
