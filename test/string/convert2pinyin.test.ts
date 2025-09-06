import { describe, expect, it } from 'vitest'
import { convert2pinyin } from '../../src/string/convert2pinyin'

describe('convert2pinyin', () => {
  it('should convert Chinese characters to pinyin', () => {
    expect(convert2pinyin('你好')).toBe('ni hao')
    expect(convert2pinyin('世界')).toBe('shi jie')
    expect(convert2pinyin('中国')).toBe('zhong 国') // 国 is not in the map
  })

  it('should handle mixed Chinese and English', () => {
    expect(convert2pinyin('Hello 世界')).toBe('H e l l o   shi jie')
    expect(convert2pinyin('你好 World')).toBe('ni hao   W o r l d')
    expect(convert2pinyin('Hello 世界 World')).toBe('H e l l o   shi jie   W o r l d')
  })

  it('should handle empty string', () => {
    expect(convert2pinyin('')).toBe('')
  })

  it('should handle only English', () => {
    expect(convert2pinyin('Hello World')).toBe('H e l l o   W o r l d')
  })

  it('should handle only Chinese', () => {
    expect(convert2pinyin('你好世界')).toBe('ni hao shi jie')
  })

  it('should handle numbers and symbols', () => {
    expect(convert2pinyin('123')).toBe('1 2 3')
    expect(convert2pinyin('!@#')).toBe('! @ #')
    expect(convert2pinyin('你好123')).toBe('ni hao 1 2 3')
  })

  it('should handle single character', () => {
    expect(convert2pinyin('你')).toBe('ni')
    expect(convert2pinyin('a')).toBe('a')
  })

  it('should handle unknown characters', () => {
    expect(convert2pinyin('你')).toBe('ni')
    expect(convert2pinyin('国')).toBe('国') // Not in the map
  })
})
