/**
 * Cookie 读写
 *
 * Usage:
 *
 * cookie.setItem(name, value[, end[, path[, domain[, secure]]]])
 * cookie.getItem(name)
 * cookie.removeItem(name[, path], domain)
 * cookie.hasItem(name)
 * cookie.keys()
 *
 * Details: https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
 */
export const cookie = {
  getItem(sKey) {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            `(?:(?:^|.*;)\\s*${encodeURIComponent(sKey).replace(
              /[-.+*]/g,
              '\\$&',
            )}\\s*\\=\\s*([^;]*).*$)|^.*$`,
          ),
          '$1',
        ),
      ) || null
    )
  },

  setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) return false

    let sExpires = ''
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires =
            vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : `; max-age=${vEnd}`
          break
        case String:
          sExpires = `; expires=${vEnd}`
          break
        case Date:
          sExpires = `; expires=${vEnd.toUTCString()}`
          break
      }
    }

    document.cookie = `${encodeURIComponent(sKey)}=${encodeURIComponent(
      sValue,
    )}${sExpires}${sDomain ? `; domain=${sDomain}` : ''}${
      sPath ? `; path=${sPath}` : ''
    }${bSecure ? '; secure' : ''}`
    return true
  },

  removeItem(sKey, sPath, sDomain) {
    if (!sKey || !this.hasItem(sKey)) return false

    document.cookie = `${encodeURIComponent(sKey)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${
      sDomain ? `; domain=${sDomain}` : ''
    }${sPath ? `; path=${sPath}` : ''}`
    return true
  },

  hasItem(sKey) {
    return new RegExp(
      `(?:^|;\\s*)${encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&')}\\s*\\=`,
    ).test(document.cookie)
  },

  /* optional method: you can safely remove it! */
  keys() {
    const aKeys = document.cookie
      .replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:|$)/g, '')
      .split(/\s*(?:=[^;]*)?;\s*/)
    for (let nIdx = 0; nIdx < aKeys.length; nIdx++) aKeys[nIdx] = decodeURIComponent(aKeys[nIdx])

    return aKeys
  },
}
