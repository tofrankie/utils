# Functions Overview

JavaScript Utils provides 15 utility functions organized into 5 categories. All functions are tree-shakable and can be imported individually.

## Function Utils

### debounce

Delay function execution until after wait time has elapsed since the last time it was invoked.

```typescript
import { debounce } from '@tofrankie/utils'

const debouncedFn = debounce(() => {
  console.log('Executed after 300ms of inactivity')
}, 300)
```

### throttle

Limit function execution frequency to at most once per specified time period.

```typescript
import { throttle } from '@tofrankie/utils'

const throttledFn = throttle(() => {
  console.log('Executed at most once per 300ms')
}, 300)
```

### delay

Delay function execution by specified milliseconds.

```typescript
import { delay } from '@tofrankie/utils'

const delayedFn = delay(() => {
  console.log('Executed after 1000ms')
}, 1000)
```

## Array Utils

### isArray

Check if a value is an array.

```typescript
import { isArray } from '@tofrankie/utils'

console.log(isArray([1, 2, 3])) // true
console.log(isArray('hello')) // false
```

### chunk

Split an array into chunks of specified size.

```typescript
import { chunk } from '@tofrankie/utils'

const chunks = chunk([1, 2, 3, 4, 5], 2)
console.log(chunks) // [[1, 2], [3, 4], [5]]
```

### unique

Remove duplicates from an array.

```typescript
import { unique } from '@tofrankie/utils'

const uniqueArray = unique([1, 2, 2, 3, 3, 3])
console.log(uniqueArray) // [1, 2, 3]
```

## Object Utils

### deepCopy

Deep clone an object.

```typescript
import { deepCopy } from '@tofrankie/utils'

const original = { a: { b: 1 } }
const copied = deepCopy(original)
copied.a.b = 2
console.log(original.a.b) // 1 (unchanged)
```

### pick

Pick specified properties from an object.

```typescript
import { pick } from '@tofrankie/utils'

const user = { name: 'John', age: 30, email: 'john@example.com' }
const nameAndAge = pick(user, ['name', 'age'])
console.log(nameAndAge) // { name: 'John', age: 30 }
```

### omit

Omit specified properties from an object.

```typescript
import { omit } from '@tofrankie/utils'

const user = { name: 'John', age: 30, email: 'john@example.com' }
const withoutEmail = omit(user, ['email'])
console.log(withoutEmail) // { name: 'John', age: 30 }
```

## String Utils

### convert2pinyin

Convert Chinese characters to pinyin.

```typescript
import { convert2pinyin } from '@tofrankie/utils'

const pinyin = convert2pinyin('你好世界')
console.log(pinyin) // 'nihao shijie'
```

### capitalize

Capitalize the first letter of a string.

```typescript
import { capitalize } from '@tofrankie/utils'

console.log(capitalize('hello world')) // 'Hello world'
```

### camelCase

Convert a string to camelCase.

```typescript
import { camelCase } from '@tofrankie/utils'

console.log(camelCase('hello-world')) // 'helloWorld'
console.log(camelCase('hello_world')) // 'helloWorld'
```

## Validation Utils

### checkIdNumber

Validate Chinese ID number.

```typescript
import { checkIdNumber } from '@tofrankie/utils'

console.log(checkIdNumber('110101199003071234')) // true
console.log(checkIdNumber('123456789012345678')) // false
```

### isEmail

Validate email address.

```typescript
import { isEmail } from '@tofrankie/utils'

console.log(isEmail('user@example.com')) // true
console.log(isEmail('invalid-email')) // false
```

### isPhone

Validate phone number.

```typescript
import { isPhone } from '@tofrankie/utils'

console.log(isPhone('13800138000')) // true
console.log(isPhone('12345678901')) // false
```

## Import Methods

```typescript
import { debounce, throttle } from '@tofrankie/utils'
```

## Bundle Size

Each function is optimized for minimal bundle size:

- **debounce**: ~0.5KB
- **throttle**: ~0.5KB
- **isArray**: ~0.2KB
- **deepCopy**: ~0.4KB
- **convert2pinyin**: ~0.3KB

## Next Steps

- [Examples](/en/guide/examples) - Practical usage examples
- [API Reference](/en/api/) - Detailed API documentation
- [Playground](/en/playground/) - Try functions online
