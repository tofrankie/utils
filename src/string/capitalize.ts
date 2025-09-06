/**
 * 将字符串首字母大写
 *
 * @category String
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * capitalize('hello') // 'Hello'
 * capitalize('HELLO') // 'HELLO'
 * capitalize('') // ''
 * ```
 *
 * @param str - 要转换的字符串
 * @returns 首字母大写的字符串
 */
export function capitalize(str: string): string {
  if (!str)
    return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}
