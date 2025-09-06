# Examples

This page provides practical examples of using JavaScript Utils functions in real-world scenarios.

## Basic Usage

### Function Utils

```typescript
import { debounce, throttle, delay } from '@tofrankie/utils'

// Debounce search input
const searchInput = debounce((query: string) => {
  console.log('Searching for:', query)
}, 300)

// Throttle scroll events
const handleScroll = throttle(() => {
  console.log('Scroll event')
}, 100)

// Delay function execution
const delayedFn = delay(() => {
  console.log('Executed after 1 second')
}, 1000)
```

### Array Utils

```typescript
import { isArray, chunk, unique } from '@tofrankie/utils'

// Check if value is array
console.log(isArray([1, 2, 3])) // true
console.log(isArray('hello')) // false

// Split array into chunks
const chunks = chunk([1, 2, 3, 4, 5], 2)
console.log(chunks) // [[1, 2], [3, 4], [5]]

// Remove duplicates
const uniqueArray = unique([1, 2, 2, 3, 3, 3])
console.log(uniqueArray) // [1, 2, 3]
```

### Object Utils

```typescript
import { deepCopy, pick, omit } from '@tofrankie/utils'

// Deep copy objects
const original = { a: { b: 1 } }
const copied = deepCopy(original)
copied.a.b = 2
console.log(original.a.b) // 1 (unchanged)

// Pick specific properties
const user = { name: 'John', age: 30, email: 'john@example.com' }
const nameAndAge = pick(user, ['name', 'age'])
console.log(nameAndAge) // { name: 'John', age: 30 }

// Omit specific properties
const withoutEmail = omit(user, ['email'])
console.log(withoutEmail) // { name: 'John', age: 30 }
```

### String Utils

```typescript
import { convert2pinyin, capitalize, camelCase } from '@tofrankie/utils'

// Convert Chinese to pinyin
const pinyin = convert2pinyin('你好世界')
console.log(pinyin) // 'nihao shijie'

// Capitalize first letter
console.log(capitalize('hello world')) // 'Hello world'

// Convert to camelCase
console.log(camelCase('hello-world')) // 'helloWorld'
```

### Validation Utils

```typescript
import { checkIdNumber, isEmail, isPhone } from '@tofrankie/utils'

// Validate Chinese ID number
console.log(checkIdNumber('110101199003071234')) // true

// Validate email
console.log(isEmail('user@example.com')) // true

// Validate phone number
console.log(isPhone('13800138000')) // true
```

## Real-world Scenarios

### Form Validation

```typescript
import { isEmail, isPhone, checkIdNumber } from '@tofrankie/utils'

// Form validation
const validateForm = (formData: any) => {
  const errors: any = {}
  
  if (!isEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }
  
  if (!isPhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }
  
  if (!checkIdNumber(formData.idNumber)) {
    errors.idNumber = 'Please enter a valid ID number'
  }
  
  return errors
}
```

### Data Processing

```typescript
import { chunk, unique, deepCopy } from '@tofrankie/utils'

// Pagination
const paginateData = (data: any[], pageSize: number) => {
  return chunk(data, pageSize)
}

// Remove duplicates
const removeDuplicates = (data: any[]) => {
  return unique(data)
}

// Data backup
const backupData = (data: any) => {
  return deepCopy(data)
}
```

### Search Functionality

```typescript
import { convert2pinyin, camelCase } from '@tofrankie/utils'

// Chinese search
const searchData = (data: any[], keyword: string) => {
  return data.filter(item => {
    const pinyin = convert2pinyin(item.name)
    return pinyin.includes(keyword.toLowerCase()) || 
           item.name.includes(keyword)
  })
}

// Object property conversion
const normalizeData = (data: any[]) => {
  return data.map(item => ({
    ...item,
    camelCaseName: camelCase(item.name)
  }))
}
```

### Performance Optimization

```typescript
import { debounce, throttle } from '@tofrankie/utils'

// Search input debouncing
const searchInput = debounce((value: string) => {
  // Perform search
  performSearch(value)
}, 300)

// Scroll event throttling
const handleScroll = throttle(() => {
  // Handle scroll logic
  updateScrollPosition()
}, 100)

// Window resize
window.addEventListener('resize', debounce(() => {
  // Recalculate layout
  recalculateLayout()
}, 250))
```

## Advanced Application Scenarios

### 1. Data Table Processing

```typescript
import { chunk, unique, pick, omit } from '@tofrankie/utils'

class DataTable {
  private data: any[] = []
  
  // Pagination display
  getPageData(page: number, pageSize: number) {
    const chunks = chunk(this.data, pageSize)
    return chunks[page - 1] || []
  }
  
  // Unique display
  getUniqueData() {
    return unique(this.data)
  }
  
  // Select columns
  selectColumns(columns: string[]) {
    return this.data.map(item => pick(item, columns))
  }
  
  // Exclude columns
  excludeColumns(columns: string[]) {
    return this.data.map(item => omit(item, columns))
  }
}
```

### 2. Form Builder

```typescript
import { deepCopy, camelCase, isArray } from '@tofrankie/utils'

class FormBuilder {
  private schema: any = {}
  
  // Clone form configuration
  cloneSchema() {
    return deepCopy(this.schema)
  }
  
  // Add field
  addField(field: any) {
    const fieldName = camelCase(field.name)
    this.schema[fieldName] = field
  }
  
  // Validate field type
  validateField(field: any) {
    if (field.type === 'array' && !isArray(field.value)) {
      throw new Error('Array field value must be array type')
    }
  }
}
```

### 3. Cache Management

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

### 4. Search Suggestions

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

## More Examples

Check out the [Playground](/en/playground/) for more interactive examples, or see the [API Documentation](/en/api/) for detailed function descriptions.
