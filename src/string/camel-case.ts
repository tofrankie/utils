/**
 * 将字符串转换为驼峰命名
 *
 * @category String
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * camelCase('hello-world') // 'helloWorld'
 * camelCase('hello_world') // 'helloWorld'
 * camelCase('hello world') // 'helloWorld'
 * ```
 *
 * @param str - 要转换的字符串
 * @returns 驼峰命名的字符串
 */
export function camelCase(str: string): string {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''))
    .replace(/^[A-Z]/, char => char.toLowerCase())
}
