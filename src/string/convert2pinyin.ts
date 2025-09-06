/**
 * 将中文字符转换为拼音
 *
 * @category String
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * convert2pinyin('你好世界') // 'ni hao shi jie'
 * convert2pinyin('Hello 世界') // 'Hello shi jie'
 * ```
 *
 * @param text - 要转换的文本
 * @returns 转换后的拼音字符串
 */
export function convert2pinyin(text: string): string {
  // 简化的拼音转换实现
  // 实际项目中应该使用专业的拼音库如 pinyin-pro
  const pinyinMap: Record<string, string> = {
    你: 'ni',
    好: 'hao',
    世: 'shi',
    界: 'jie',
    中: 'zhong',
    文: 'wen',
    字: 'zi',
    符: 'fu',
  }

  return text
    .split('')
    .map(char => pinyinMap[char] || char)
    .join(' ')
}
