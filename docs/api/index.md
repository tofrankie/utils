# API 参考

JavaScript Utils 函数的完整 API 文档。

## 函数分类

### 函数工具

- [debounce](/api/functions/debounce) - 延迟函数执行直到等待时间结束
- [throttle](/api/functions/throttle) - 限制函数执行频率
- [delay](/api/functions/delay) - 延迟函数执行

### 数组工具

- [isArray](/api/array#isarray) - 检查值是否为数组
- [chunk](/api/array#chunk) - 将数组分割成指定大小的块
- [unique](/api/array#unique) - 从数组中移除重复项

### 对象工具

- [deepCopy](/api/object#deepcopy) - 深拷贝对象
- [pick](/api/object#pick) - 从对象中选择指定属性
- [omit](/api/object#omit) - 从对象中排除指定属性

### 字符串工具

- [convert2pinyin](/api/string#convert2pinyin) - 将中文字符转换为拼音
- [capitalize](/api/string#capitalize) - 将字符串首字母大写
- [camelCase](/api/string#camelcase) - 将字符串转换为驼峰命名

### 验证工具

- [checkIdNumber](/api/validation#checkidnumber) - 验证中国身份证号
- [isEmail](/api/validation#isemail) - 验证邮箱地址
- [isPhone](/api/validation#isphone) - 验证手机号码

## 按需导入

```typescript
import { debounce, throttle } from '@tofrankie/utils'
```

## TypeScript 支持

JavaScript Utils 使用 TypeScript 构建，提供完整的类型定义：

```typescript
import { debounce } from '@tofrankie/utils'

// TypeScript 知道确切的类型
const debouncedFn: (...args: any[]) => void = debounce(() => {
  console.log('Hello')
}, 300)
```

## 打包体积

每个函数都针对最小打包体积进行了优化：

- **debounce**: ~0.5KB
- **throttle**: ~0.5KB
- **isArray**: ~0.2KB
- **deepCopy**: ~0.4KB
- **convert2pinyin**: ~0.3KB

## 快速链接

- [快速开始](/guide/getting-started) - 学习如何使用 JavaScript Utils
- [使用示例](/guide/examples) - 实际使用示例
- [在线演示](/playground/) - 在线试用函数
