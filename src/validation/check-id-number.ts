/**
 * 验证中国身份证号码
 *
 * @category Validation
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * checkIdNumber('110101199003074515') // true
 * checkIdNumber('123456789012345678') // false
 * ```
 *
 * @param idNumber - 身份证号码
 * @returns 验证结果
 */
export function checkIdNumber(idNumber: string): boolean {
  if (!/^\d{17}[\dX]$/i.test(idNumber)) {
    return false
  }

  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']

  let sum = 0
  for (let i = 0; i < 17; i++) {
    sum += Number.parseInt(idNumber[i]) * weights[i]
  }

  const checkCode = checkCodes[sum % 11]
  return checkCode === idNumber[17].toUpperCase()
}
