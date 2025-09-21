/**
 * 深拷贝方法
 * PS：仅供学习，生产环境建议使用 https://www.lodashjs.com/docs/lodash.cloneDeep
 *
 * @param {*} source 被拷贝的值
 * @returns 返回一个拷贝值
 */
export function deepCopy(source) {
  // 创建一个 WeakMap 对象，记录已拷贝过的对象
  const weakmap = new WeakMap()

  // 获取数据类型，返回值如："Object"、"Array"、"Symbol" 等
  const getClass = x => {
    const type = Object.prototype.toString.call(x)
    return /^\[object (.*)\]$/.exec(type)[1]
  }

  // 判断是否为数组
  const isArray = arr => getClass(arr) === 'Array'

  // 判断是否为引用类型
  const isObject = obj => obj !== null && (typeof obj === 'object' || typeof obj === 'function')

  // 判断是否为“特殊”对象（需要特殊处理）
  const isSepcialObject = obj => {
    const type = getClass(obj)
    return [
      'Boolean',
      'Number',
      'String',
      'Symbol',
      'BigInt',
      'Date',
      'Map',
      'Set',
      'RegExp',
    ].includes(type)
  }

  // 处理特殊对象
  const handleSepcialObject = obj => {
    const type = getClass(obj)
    const Ctor = obj.constructor // 对象的构造函数
    const primitiveValue = obj.valueOf() // 获取对象的原始值

    switch (type) {
      case 'Boolean':
      case 'Number':
      case 'String':
      case 'Symbol':
      case 'BigInt':
        // 处理包装对象 Wrapper Object

        return new Object(primitiveValue)
      case 'Date':
        return new Ctor(primitiveValue) // new Date(+obj)
      case 'RegExp': {
        const { source, flags, lastIndex } = obj
        const re = new RegExp(source, flags)
        re.lastIndex = lastIndex
        return re
      }
      case 'Map': {
        const map = new Ctor()
        obj.forEach((item, key) => {
          // 注意，即使 Map 对象的 key 为引用类型，这里也不能 copy(key)，否则会失去引用，导致该属性无法访问得到。
          map.set(key, copy(item))
        })
        return map
      }
      case 'Set': {
        const set = new Ctor()
        obj.forEach(item => {
          set.add(copy(item))
        })
        return set
      }
      default:
        return undefined
    }
  }

  // 创建输出对象（原型拷贝关键就在这一步）
  const initCloneObject = obj => {
    if (obj.constructor === undefined) {
      return Object.create(null)
    }

    if (
      typeof obj.constructor === 'function' &&
      (obj !== obj.constructor || obj !== Object.prototype)
    ) {
      const proto = Object.getPrototypeOf(obj)
      return Object.create(proto)
    }

    return {}
  }

  // 拷贝方法（递归思路）
  const copy = input => {
    if (typeof input === 'function' || !isObject(input)) return input

    // 针对已拷贝过的对象，直接返回（解决循环引用的问题）
    if (weakmap.has(input)) return weakmap.get(input)

    // 处理包装对象
    if (isSepcialObject(input)) return handleSepcialObject(input)

    // 创建输出对象
    const output = isArray(input) ? [] : initCloneObject(input)

    // 记录每次拷贝的对象
    weakmap.set(input, output)

    // 仅遍历对象自身可枚举的属性（包括字符串属性和 Symbol 属性）
    Reflect.ownKeys(input).forEach(key => {
      if (input.propertyIsEnumerable(key)) output[key] = copy(input[key])
    })

    return output
  }

  return copy(source)
}
