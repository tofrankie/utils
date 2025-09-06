import { bench, describe } from 'vitest'
import { camelCase, capitalize, convert2pinyin } from '../../src/string'

describe('string utilities benchmark', () => {
  const shortText = 'Hello World'
  const longText = 'Hello World '.repeat(1000)
  const chineseText = '你好世界'
  const mixedText = 'Hello 世界 World'
  const kebabText = 'hello-world-test-string'
  const snakeText = 'hello_world_test_string'
  const spaceText = 'hello world test string'

  bench('convert2pinyin - short text', () => {
    convert2pinyin(shortText)
  })

  bench('convert2pinyin - long text', () => {
    convert2pinyin(longText)
  })

  bench('convert2pinyin - Chinese text', () => {
    convert2pinyin(chineseText)
  })

  bench('convert2pinyin - mixed text', () => {
    convert2pinyin(mixedText)
  })

  bench('capitalize - short text', () => {
    capitalize(shortText)
  })

  bench('capitalize - long text', () => {
    capitalize(longText)
  })

  bench('camelCase - kebab case', () => {
    camelCase(kebabText)
  })

  bench('camelCase - snake case', () => {
    camelCase(snakeText)
  })

  bench('camelCase - space separated', () => {
    camelCase(spaceText)
  })

  bench('camelCase - long text', () => {
    camelCase(longText)
  })
})
