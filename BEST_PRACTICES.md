# 最佳实践指南

本指南将帮助您更好地使用 JavaScript Utils 工具函数库。

## 🎯 导入策略

### 按需导入

```typescript
// 导入多个函数，支持 Tree Shaking
import { debounce, deepCopy, isArray, throttle } from '@tofrankie/utils'
```

### 按需导入

```typescript
// 只导入需要的函数，
import debounce from '@tofrankie/utils/debounce'
import isArray from '@tofrankie/utils/is-array'
```

## 🚀 性能优化

### 1. 使用 Tree Shaking

```typescript
// ✅ 好的做法 - 按需导入
import { debounce, throttle } from '@tofrankie/utils'

// ❌ 避免 - 全量导入（如果只需要部分函数）
import * as utils from '@tofrankie/utils'
```

### 2. 按需导入

```typescript
// ✅ 最小包体积
import debounce from '@tofrankie/utils/debounce'

// 包体积：~1KB
```

### 3. 缓存函数引用

```typescript
// ✅ 缓存函数引用，避免重复导入
const { debounce, throttle } = await import('@tofrankie/utils')

// 在需要时使用
const debouncedFn = debounce(callback, 300)
```

## 🛠️ 使用技巧

### 函数工具

#### debounce - 防抖函数

```typescript
import { debounce } from '@tofrankie/utils'

// 搜索输入防抖
const searchInput = document.getElementById('search')
const debouncedSearch = debounce((query: string) => {
  // 执行搜索
  console.log('搜索:', query)
}, 300)

searchInput.addEventListener('input', e => {
  debouncedSearch(e.target.value)
})
```

#### throttle - 节流函数

```typescript
import { throttle } from '@tofrankie/utils'

// 滚动事件节流
const throttledScroll = throttle(() => {
  // 处理滚动事件
  console.log('滚动位置:', window.scrollY)
}, 100)

window.addEventListener('scroll', throttledScroll)
```

#### delay - 延迟执行

```typescript
import { delay } from '@tofrankie/utils'

// 异步流程控制
async function processData() {
  console.log('开始处理')
  await delay(1000) // 延迟 1 秒
  console.log('处理完成')
}
```

### 数组工具

#### isArray - 数组检查

```typescript
import { isArray } from '@tofrankie/utils'

// 类型守卫
function processData(data: unknown) {
  if (isArray(data)) {
    // TypeScript 知道 data 是数组类型
    return data.map(item => item * 2)
  }
  return []
}
```

#### chunk - 数组分块

```typescript
import { chunk } from '@tofrankie/utils'

// 分批处理数据
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const chunks = chunk(data, 3) // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

// 分批发送请求
for (const chunk of chunks) {
  await sendBatchRequest(chunk)
}
```

#### unique - 数组去重

```typescript
import { unique } from '@tofrankie/utils'

// 去重处理
const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
const uniqueNumbers = unique(numbers) // [1, 2, 3, 4]
```

### 对象工具

#### deepCopy - 深拷贝

```typescript
import { deepCopy } from '@tofrankie/utils'

// 深拷贝对象
const original = {
  user: { name: 'John', age: 30 },
  settings: { theme: 'dark', language: 'en' }
}

const copied = deepCopy(original)
// 修改拷贝不会影响原对象
copied.user.name = 'Jane'
console.log(original.user.name) // 仍然是 'John'
```

#### pick - 属性选择

```typescript
import { pick } from '@tofrankie/utils'

// 选择需要的属性
const user = {
  id: 1,
  name: 'John',
  email: 'john@example.com',
  password: 'secret',
  createdAt: '2024-01-01'
}

// 只选择公开属性
const publicUser = pick(user, ['id', 'name', 'email'])
```

#### omit - 属性排除

```typescript
import { omit } from '@tofrankie/utils'

// 排除敏感属性
const user = {
  id: 1,
  name: 'John',
  email: 'john@example.com',
  password: 'secret'
}

// 排除密码字段
const safeUser = omit(user, ['password'])
```

### 字符串工具

#### convert2pinyin - 中文转拼音

```typescript
import { convert2pinyin } from '@tofrankie/utils'

// 中文转拼音
const chinese = '你好世界'
const pinyin = convert2pinyin(chinese) // 'ni hao shi jie'

// 用于搜索功能
const searchText = convert2pinyin(userInput)
```

#### capitalize - 首字母大写

```typescript
import { capitalize } from '@tofrankie/utils'

// 格式化文本
const text = 'hello world'
const capitalized = capitalize(text) // 'Hello world'

// 格式化用户名
const username = 'john doe'
const displayName = capitalize(username) // 'John doe'
```

#### camelCase - 驼峰命名

```typescript
import { camelCase } from '@tofrankie/utils'

// 转换命名格式
const kebabCase = 'hello-world'
const camelCaseResult = camelCase(kebabCase) // 'helloWorld'

// 处理 API 响应
const apiResponse = { 'user-name': 'John', 'user-age': 30 }
const formatted = Object.keys(apiResponse).reduce((acc, key) => {
  acc[camelCase(key)] = apiResponse[key]
  return acc
}, {})
```

### 验证工具

#### checkIdNumber - 身份证验证

```typescript
import { checkIdNumber } from '@tofrankie/utils'

// 表单验证
function validateForm(formData: { idNumber: string }) {
  if (!checkIdNumber(formData.idNumber)) {
    throw new Error('身份证号码格式不正确')
  }
}
```

#### isEmail - 邮箱验证

```typescript
import { isEmail } from '@tofrankie/utils'

// 邮箱验证
function validateEmail(email: string): boolean {
  return isEmail(email)
}

// 在表单中使用
const emailInput = document.getElementById('email')
emailInput.addEventListener('blur', () => {
  if (!isEmail(emailInput.value)) {
    showError('请输入有效的邮箱地址')
  }
})
```

#### isPhone - 手机号验证

```typescript
import { isPhone } from '@tofrankie/utils'

// 手机号验证
function validatePhone(phone: string): boolean {
  return isPhone(phone)
}
```

## 🔧 开发环境配置

### TypeScript 配置

```json
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

### ESLint 配置

```javascript
// eslint.config.js
export default {
  rules: {
    // 允许使用 @tofrankie/utils 的函数
    'no-restricted-imports': 'off'
  }
}
```

## 📦 打包优化

### Webpack 配置

```javascript
// webpack.config.js
module.exports = {
  optimization: {
    usedExports: true, // 启用 Tree Shaking
  },
  resolve: {
    alias: {
      '@tofrankie/utils': '@tofrankie/utils/dist/index.mjs'
    }
  }
}
```

### Vite 配置

```javascript
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@tofrankie/utils']
    }
  }
})
```

## 🧪 测试最佳实践

```typescript
import { debounce, isArray } from '@tofrankie/utils'
import { describe, expect, it } from 'vitest'

describe('工具函数测试', () => {
  it('debounce 应该延迟执行', async () => {
    let count = 0
    const debouncedFn = debounce(() => count++, 100)

    debouncedFn()
    debouncedFn()
    debouncedFn()

    expect(count).toBe(0)

    await new Promise(resolve => setTimeout(resolve, 150))
    expect(count).toBe(1)
  })

  it('isArray 应该正确识别数组', () => {
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray('hello')).toBe(false)
    expect(isArray(null)).toBe(false)
  })
})
```

## 🚀 性能监控

```typescript
// 性能监控示例
import { debounce } from '@tofrankie/utils'

const performanceMonitor = {
  start: performance.now(),

  log: debounce((message: string) => {
    const duration = performance.now() - this.start
    console.log(`${message}: ${duration.toFixed(2)}ms`)
  }, 100)
}

// 使用
performanceMonitor.log('页面加载完成')
```

## 📚 更多资源

- [完整文档](https://tofrankie.github.io/utils/)
- [在线演示](https://stackblitz.com/github/tofrankie/utils)
- [GitHub 仓库](https://github.com/tofrankie/utils)
- [API 参考](https://tofrankie.github.io/utils/api/)

---

**遵循这些最佳实践，您将能够更好地使用 JavaScript Utils 工具函数库！**
