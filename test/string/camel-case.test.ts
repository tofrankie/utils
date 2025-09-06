import { describe, expect, it } from 'vitest'
import { camelCase } from '../../src/string/camel-case'

describe('camelCase', () => {
  it('should convert kebab-case to camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld')
    expect(camelCase('foo-bar-baz')).toBe('fooBarBaz')
  })

  it('should convert snake_case to camelCase', () => {
    expect(camelCase('hello_world')).toBe('helloWorld')
    expect(camelCase('foo_bar_baz')).toBe('fooBarBaz')
  })

  it('should convert space-separated to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld')
    expect(camelCase('foo bar baz')).toBe('fooBarBaz')
  })

  it('should handle already camelCase', () => {
    expect(camelCase('helloWorld')).toBe('helloWorld')
    expect(camelCase('fooBarBaz')).toBe('fooBarBaz')
  })

  it('should handle PascalCase', () => {
    expect(camelCase('HelloWorld')).toBe('helloWorld')
    expect(camelCase('FooBarBaz')).toBe('fooBarBaz')
  })

  it('should handle empty string', () => {
    expect(camelCase('')).toBe('')
  })

  it('should handle single word', () => {
    expect(camelCase('hello')).toBe('hello')
    expect(camelCase('Hello')).toBe('hello')
  })

  it('should handle numbers', () => {
    expect(camelCase('hello-world-123')).toBe('helloWorld123')
    expect(camelCase('123-hello')).toBe('123Hello')
  })

  it('should handle special characters', () => {
    expect(camelCase('hello-world!')).toBe('helloWorld!')
    expect(camelCase('hello@world')).toBe('hello@world')
  })

  it('should handle multiple separators', () => {
    expect(camelCase('hello_world-foo bar')).toBe('helloWorldFooBar')
  })
})
