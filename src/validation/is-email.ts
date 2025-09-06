/**
 * 验证邮箱地址
 *
 * @category Validation
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * isEmail('test@example.com') // true
 * isEmail('invalid-email') // false
 * ```
 *
 * @param email - 邮箱地址
 * @returns 验证结果
 */
export function isEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/
  return emailRegex.test(email)
}
