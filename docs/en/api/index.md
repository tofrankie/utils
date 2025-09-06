# API Reference

Complete API documentation for JavaScript Utils functions.

## Function Categories

### Function Utils

- [debounce](/en/api/functions/debounce) - Delay function execution until after wait time has elapsed
- [throttle](/en/api/functions/throttle) - Limit function execution frequency
- [delay](/en/api/functions/delay) - Delay function execution

### Array Utils

- [isArray](/en/api/array#isarray) - Check if value is an array
- [chunk](/en/api/array#chunk) - Split array into chunks of specified size
- [unique](/en/api/array#unique) - Remove duplicates from array

### Object Utils

- [deepCopy](/en/api/object#deepcopy) - Deep clone objects
- [pick](/en/api/object#pick) - Pick specified properties from object
- [omit](/en/api/object#omit) - Omit specified properties from object

### String Utils

- [convert2pinyin](/en/api/string#convert2pinyin) - Convert Chinese characters to pinyin
- [capitalize](/en/api/string#capitalize) - Capitalize first letter of string
- [camelCase](/en/api/string#camelcase) - Convert string to camelCase

### Validation Utils

- [checkIdNumber](/en/api/validation#checkidnumber) - Validate Chinese ID number
- [isEmail](/en/api/validation#isemail) - Validate email address
- [isPhone](/en/api/validation#isphone) - Validate phone number

## Import Methods

```typescript
import { debounce, throttle } from '@tofrankie/utils'
```

## TypeScript Support

JavaScript Utils is built with TypeScript and provides complete type definitions:

```typescript
import { debounce } from '@tofrankie/utils'

// TypeScript knows the exact type
const debouncedFn: (...args: any[]) => void = debounce(() => {
  console.log('Hello')
}, 300)
```

## Bundle Size

Each function is optimized for minimal bundle size:

- **debounce**: ~0.5KB
- **throttle**: ~0.5KB
- **isArray**: ~0.2KB
- **deepCopy**: ~0.4KB
- **convert2pinyin**: ~0.3KB

## Quick Links

- [Getting Started](/en/guide/getting-started) - Learn how to use JavaScript Utils
- [Examples](/en/guide/examples) - Practical usage examples
- [Playground](/en/playground/) - Try functions online
