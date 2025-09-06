/**
 * 验证手机号码
 *
 * @category Validation
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * isPhone('13800138000') // true
 * isPhone('12345678901') // false
 * ```
 *
 * @param phone - 手机号码
 * @returns 验证结果
 */
export function isPhone(phone: string): boolean {
  const phoneRegex = /^1[3-9]\d{9}$/
  return phoneRegex.test(phone)
}
