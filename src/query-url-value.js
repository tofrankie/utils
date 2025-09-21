/**
 * 获取 URL 上的某参数值
 *
 * @param {*} key 参数名称
 * @returns 参数值
 */
export function queryUrlValue(key) {
  if (!key) return ''

  const url = decodeURIComponent(window.location.href)
  const re = new RegExp(`[?|&]${key}=([^&]+)`, 'g')
  const matchResult = re.exec(url)

  if (!matchResult) return ''

  let value = matchResult[1]
  if (value.includes('#')) {
    const separator = value.includes('/#') ? '/#' : '#'
    value = value.split(separator)[0]
  }

  return value
}
