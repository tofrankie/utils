# 使用示例

这里提供了一些实际的使用示例，展示如何在项目中使用 JavaScript Utils 库。

## 基础用法

### 函数工具

```typescript
import { debounce, throttle, delay } from '@tofrankie/utils'

// 防抖 - 搜索输入
const searchInput = document.getElementById('search')
const debouncedSearch = debounce((query: string) => {
  console.log('搜索:', query)
  // 执行搜索逻辑
}, 300)

searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value)
})

// 节流 - 滚动事件
const throttledScroll = throttle(() => {
  console.log('滚动位置:', window.scrollY)
  // 更新滚动位置指示器
}, 100)

window.addEventListener('scroll', throttledScroll)

// 延迟执行
const delayedNotification = delay(() => {
  console.log('延迟通知')
}, 2000)

delayedNotification()
```

### 数组工具

```typescript
import { isArray, chunk, unique } from '@tofrankie/utils'

// 类型检查
console.log(isArray([1, 2, 3])) // true
console.log(isArray('hello')) // false

// 数组分块
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const chunks = chunk(numbers, 3)
console.log(chunks) // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

// 数组去重
const duplicates = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
const uniqueNumbers = unique(duplicates)
console.log(uniqueNumbers) // [1, 2, 3, 4]
```

### 对象工具

```typescript
import { deepCopy, pick, omit } from '@tofrankie/utils'

// 深拷贝
const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
}

const copied = deepCopy(original)
copied.address.city = 'Los Angeles'
console.log(original.address.city) // 'New York' (未改变)

// 选择属性
const user = { id: 1, name: 'John', email: 'john@example.com', password: 'secret' }
const publicUser = pick(user, ['id', 'name', 'email'])
console.log(publicUser) // { id: 1, name: 'John', email: 'john@example.com' }

// 排除属性
const userWithoutPassword = omit(user, ['password'])
console.log(userWithoutPassword) // { id: 1, name: 'John', email: 'john@example.com' }
```

### 字符串工具

```typescript
import { convert2pinyin, capitalize, camelCase } from '@tofrankie/utils'

// 中文转拼音
console.log(convert2pinyin('你好世界')) // 'ni hao shi jie'
console.log(convert2pinyin('Hello 世界')) // 'H e l l o   shi jie'

// 首字母大写
console.log(capitalize('hello world')) // 'Hello world'
console.log(capitalize('javascript')) // 'Javascript'

// 驼峰转换
console.log(camelCase('hello-world')) // 'helloWorld'
console.log(camelCase('hello_world')) // 'helloWorld'
console.log(camelCase('hello world')) // 'helloWorld'
```

### 验证工具

```typescript
import { checkIdNumber, isEmail, isPhone } from '@tofrankie/utils'

// 身份证验证
console.log(checkIdNumber('110101199003074515')) // true/false
console.log(checkIdNumber('123456789012345678')) // false

// 邮箱验证
console.log(isEmail('test@example.com')) // true
console.log(isEmail('invalid-email')) // false

// 手机号验证
console.log(isPhone('13800138000')) // true
console.log(isPhone('12345678901')) // false
```

## 实际应用场景

### 1. 表单验证

```typescript
import { isEmail, isPhone, checkIdNumber } from '@tofrankie/utils'

class FormValidator {
  validateEmail(email: string): boolean {
    return isEmail(email)
  }

  validatePhone(phone: string): boolean {
    return isPhone(phone)
  }

  validateIdNumber(idNumber: string): boolean {
    return checkIdNumber(idNumber)
  }

  validateForm(formData: any): { isValid: boolean; errors: string[] } {
    const errors: string[] = []

    if (!this.validateEmail(formData.email)) {
      errors.push('邮箱格式不正确')
    }

    if (!this.validatePhone(formData.phone)) {
      errors.push('手机号格式不正确')
    }

    if (!this.validateIdNumber(formData.idNumber)) {
      errors.push('身份证号格式不正确')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }
}
```

### 2. 数据处理

```typescript
import { chunk, unique, deepCopy } from '@tofrankie/utils'

class DataProcessor {
  // 批量处理数据
  async processBatch<T>(data: T[], batchSize: number, processor: (batch: T[]) => Promise<void>) {
    const batches = chunk(data, batchSize)
    
    for (const batch of batches) {
      await processor(batch)
    }
  }

  // 数据去重
  deduplicate<T>(data: T[]): T[] {
    return unique(data)
  }

  // 数据备份
  createBackup<T>(data: T): T {
    return deepCopy(data)
  }
}
```

### 3. 搜索功能

```typescript
import { debounce, convert2pinyin } from '@tofrankie/utils'

class SearchService {
  private searchResults: any[] = []
  private debouncedSearch: (query: string) => void

  constructor() {
    this.debouncedSearch = debounce(this.performSearch.bind(this), 300)
  }

  search(query: string) {
    this.debouncedSearch(query)
  }

  private async performSearch(query: string) {
    // 支持中文搜索
    const pinyinQuery = convert2pinyin(query)
    
    // 执行搜索逻辑
    const results = await this.searchAPI(query, pinyinQuery)
    this.searchResults = results
    this.updateUI()
  }

  private updateUI() {
    // 更新搜索结果UI
  }

  private async searchAPI(query: string, pinyinQuery: string) {
    // 实际的搜索API调用
    return []
  }
}
```

### 4. 事件处理

```typescript
import { throttle, debounce } from '@tofrankie/utils'

class EventHandler {
  private throttledResize: () => void
  private debouncedInput: (value: string) => void

  constructor() {
    this.throttledResize = throttle(this.handleResize.bind(this), 100)
    this.debouncedInput = debounce(this.handleInput.bind(this), 300)
  }

  init() {
    window.addEventListener('resize', this.throttledResize)
    
    const input = document.getElementById('search-input') as HTMLInputElement
    input.addEventListener('input', (e) => {
      this.debouncedInput(e.target.value)
    })
  }

  private handleResize() {
    console.log('窗口大小改变:', window.innerWidth, window.innerHeight)
    // 处理窗口大小改变
  }

  private handleInput(value: string) {
    console.log('输入内容:', value)
    // 处理输入内容
  }
}
```

## 最佳实践

### 1. 按需导入

```typescript
// ✅ 推荐：按需导入
import { debounce, throttle } from '@tofrankie/utils'

// ❌ 不推荐：全量导入
import * as utils from '@tofrankie/utils'
```

### 2. 类型安全

```typescript
import { debounce } from '@tofrankie/utils'

// ✅ 推荐：使用类型注解
const debouncedFn = debounce((value: string) => {
  console.log(value)
}, 300)

// ✅ 推荐：泛型类型
const debouncedSearch = debounce<string>((query: string) => {
  // 搜索逻辑
}, 300)
```

### 3. 性能优化

```typescript
import { chunk, unique } from '@tofrankie/utils'

// ✅ 推荐：大数据分批处理
const processLargeData = async (data: any[]) => {
  const batches = chunk(data, 1000) // 每批1000条
  
  for (const batch of batches) {
    await processBatch(batch)
  }
}

// ✅ 推荐：避免重复去重
const processedData = unique(rawData) // 只去重一次
```

### 4. 错误处理

```typescript
import { checkIdNumber, isEmail } from '@tofrankie/utils'

const validateUser = (user: any) => {
  try {
    if (!isEmail(user.email)) {
      throw new Error('邮箱格式不正确')
    }
    
    if (!checkIdNumber(user.idNumber)) {
      throw new Error('身份证号格式不正确')
    }
    
    return true
  } catch (error) {
    console.error('验证失败:', error.message)
    return false
  }
}
```

## 🚀 高级应用场景

### 1. 数据表格处理

```typescript
import { chunk, unique, pick, omit } from '@tofrankie/utils'

class DataTable {
  private data: any[] = []
  
  // 分页显示
  getPageData(page: number, pageSize: number) {
    const chunks = chunk(this.data, pageSize)
    return chunks[page - 1] || []
  }
  
  // 去重显示
  getUniqueData() {
    return unique(this.data)
  }
  
  // 选择列
  selectColumns(columns: string[]) {
    return this.data.map(item => pick(item, columns))
  }
  
  // 排除列
  excludeColumns(columns: string[]) {
    return this.data.map(item => omit(item, columns))
  }
}
```

### 2. 表单构建器

```typescript
import { deepCopy, camelCase, isArray } from '@tofrankie/utils'

class FormBuilder {
  private schema: any = {}
  
  // 克隆表单配置
  cloneSchema() {
    return deepCopy(this.schema)
  }
  
  // 添加字段
  addField(field: any) {
    const fieldName = camelCase(field.name)
    this.schema[fieldName] = field
  }
  
  // 验证字段类型
  validateField(field: any) {
    if (field.type === 'array' && !isArray(field.value)) {
      throw new Error('数组字段值必须是数组类型')
    }
  }
}
```

### 3. 缓存管理

```typescript
import { debounce, deepCopy } from '@tofrankie/utils'

class CacheManager {
  private cache: Map<string, any> = new Map()
  private saveToStorage: () => void
  
  constructor() {
    this.saveToStorage = debounce(() => {
      localStorage.setItem('cache', JSON.stringify([...this.cache]))
    }, 1000)
  }
  
  set(key: string, value: any) {
    this.cache.set(key, deepCopy(value))
    this.saveToStorage()
  }
  
  get(key: string) {
    const value = this.cache.get(key)
    return value ? deepCopy(value) : null
  }
}
```

### 4. 搜索建议

```typescript
import { debounce, convert2pinyin, unique } from '@tofrankie/utils'

class SearchSuggestion {
  private suggestions: string[] = []
  private debouncedSearch: (query: string) => void
  
  constructor() {
    this.debouncedSearch = debounce(this.search.bind(this), 200)
  }
  
  search(query: string) {
    const pinyinQuery = convert2pinyin(query)
    const results = this.suggestions.filter(item => {
      const pinyin = convert2pinyin(item)
      return item.includes(query) || pinyin.includes(pinyinQuery)
    })
    
    return unique(results).slice(0, 10)
  }
  
  updateSuggestions(suggestions: string[]) {
    this.suggestions = unique(suggestions)
  }
}
```

## 更多示例

查看 [Playground](/playground/) 获取更多交互式示例，或者查看 [API 文档](/api/README) 了解详细的函数说明。
