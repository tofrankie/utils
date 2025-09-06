# 函数概览

JavaScript Utils 提供了 15 个实用的工具函数，分为 5 个类别：

## 函数工具 (3个)

### debounce
防抖函数，延迟执行函数调用

```typescript
import { debounce } from '@tofrankie/utils'

const debouncedFn = debounce(() => {
  console.log('防抖执行')
}, 300)
```

### throttle
节流函数，限制函数调用频率

```typescript
import { throttle } from '@tofrankie/utils'

const throttledFn = throttle(() => {
  console.log('节流执行')
}, 300)
```

### delay
延迟执行函数

```typescript
import { delay } from '@tofrankie/utils'

await delay(1000) // 延迟 1 秒
```

## 数组工具 (3个)

### isArray
检查值是否为数组

```typescript
import { isArray } from '@tofrankie/utils'

isArray([1, 2, 3]) // true
isArray('hello')   // false
```

### chunk
将数组分割成指定大小的块

```typescript
import { chunk } from '@tofrankie/utils'

chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
```

### unique
数组去重

```typescript
import { unique } from '@tofrankie/utils'

unique([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
```

## 对象工具 (3个)

### deepCopy
深拷贝对象

```typescript
import { deepCopy } from '@tofrankie/utils'

const original = { a: { b: 1 } }
const copied = deepCopy(original)
```

### pick
选择对象的指定属性

```typescript
import { pick } from '@tofrankie/utils'

pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { a: 1, c: 3 }
```

### omit
排除对象的指定属性

```typescript
import { omit } from '@tofrankie/utils'

omit({ a: 1, b: 2, c: 3 }, ['b']) // { a: 1, c: 3 }
```

## 字符串工具 (3个)

### convert2pinyin
中文转拼音

```typescript
import { convert2pinyin } from '@tofrankie/utils'

convert2pinyin('你好世界') // 'ni hao shi jie'
```

### capitalize
首字母大写

```typescript
import { capitalize } from '@tofrankie/utils'

capitalize('hello world') // 'Hello world'
```

### camelCase
转换为驼峰命名

```typescript
import { camelCase } from '@tofrankie/utils'

camelCase('hello-world') // 'helloWorld'
```

## 验证工具 (3个)

### checkIdNumber
身份证号验证

```typescript
import { checkIdNumber } from '@tofrankie/utils'

checkIdNumber('110101199003071234') // true
```

### isEmail
邮箱格式验证

```typescript
import { isEmail } from '@tofrankie/utils'

isEmail('user@example.com') // true
```

### isPhone
手机号验证

```typescript
import { isPhone } from '@tofrankie/utils'

isPhone('13800138000') // true
```

## 使用建议

1. **按需导入**：使用按需导入，支持 Tree Shaking
3. **类型安全**：所有函数都有完整的 TypeScript 类型定义
4. **性能优化**：函数经过优化，性能表现优异

## 下一步

- [API 参考](../api/README)
- [在线演示](../playground/)
- [安装指南](./installation)
