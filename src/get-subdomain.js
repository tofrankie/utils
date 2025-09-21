/**
 * 获取当前 URL 二级域名
 *
 * 1. 如果当前是 IP 地址，则直接返回 IP Address；
 * 2. 需要注意的是，baidu.com 应属于二级域名。
 * 3. 如理解有偏差，自行搜索关于顶级域名、二级域名、三级域名等划分。可参考：https://www.zhihu.com/question/29998374/answer/399176525
 * 4. 当前采用部分 es6 语法，若需兼容 es5 自行修改即可。
 *
 * 首先要理解：
 * 1. 一个完整的域名由二个或二个以上部分组成，各部分之间用英文的句号"."来分隔；
 * 2. 在设置 cookie 时，如省略 domain 参数，那么它默认设置为当前域名；
 * 3. domain 参数可以设置父域名以及当前域名，不能设置为其他域名，包括子域名；
 * 4. cookie 的作用域是 domain 本身以及 domain 下的所有子域名；(这里忽略 path 参数限制，当做 "/")
 *
 * 以 https://shortcuts.sspai.com 为例，思路是这样的：
 * 接着我们对 URL 进行拆分，按先后顺序对 com、sspai.com、shortcuts.sspai.com （以此类推）设置 cookie
 * 倘若能设置 cookie 则说明域名是合法的，停止继续往下执行，直接返回结果 "sspai.com"，同时删掉该 cookie。
 */
export function getSubdomain() {
  try {
    let subdomain = ''
    const key = `mh_${Math.random()}`
    const expiredDate = new Date(0)
    const { domain } = document
    const domainList = domain.split('.')

    const reg = new RegExp(`(^|;)\\s*${key}=12345`)
    const ipAddressReg =
      /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/

    // 若为 IP 地址、localhost，则直接返回
    if (ipAddressReg.test(domain) || domain === 'localhost') return domain

    const urlItems = []
    urlItems.unshift(domainList.pop())

    while (domainList.length) {
      urlItems.unshift(domainList.pop())
      subdomain = urlItems.join('.')

      const cookie = `${key}=12345;domain=.${subdomain}`
      document.cookie = cookie

      if (reg.test(document.cookie)) {
        document.cookie = `${cookie};expires=${expiredDate}`
        break
      }
    }

    return subdomain || document.domain
  } catch {
    return document.domain
  }
}
