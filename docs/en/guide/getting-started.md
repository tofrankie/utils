# Getting Started

JavaScript Utils is a modern JavaScript utility library that provides type-safe, tree-shaking optimized utility functions for daily development.

## Installation

### npm

```bash
npm install @tofrankie/utils
```

### pnpm

```bash
pnpm add @tofrankie/utils
```

### yarn

```bash
yarn add @tofrankie/utils
```

## Basic Usage

```typescript
import { debounce, throttle } from '@tofrankie/utils'
```

### Use Functions

```typescript
import { debounce, throttle, isArray, deepCopy } from '@tofrankie/utils'

// Debounce function calls
const debouncedSearch = debounce((query: string) => {
  console.log('Searching for:', query)
}, 300)

// Throttle function calls
const throttledScroll = throttle(() => {
  console.log('Scroll event')
}, 100)

// Check if value is array
console.log(isArray([1, 2, 3])) // true
console.log(isArray('hello')) // false

// Deep copy objects
const original = { a: { b: 1 } }
const copied = deepCopy(original)
copied.a.b = 2
console.log(original.a.b) // 1 (unchanged)
```

## Function Categories

### Function Utils

- **debounce** - Delay function execution until after wait time has elapsed
- **throttle** - Limit function execution frequency
- **delay** - Delay function execution

### Array Utils

- **isArray** - Check if value is an array
- **chunk** - Split array into chunks of specified size
- **unique** - Remove duplicates from array

### Object Utils

- **deepCopy** - Deep clone objects
- **pick** - Pick specified properties from object
- **omit** - Omit specified properties from object

### String Utils

- **convert2pinyin** - Convert Chinese characters to pinyin
- **capitalize** - Capitalize first letter of string
- **camelCase** - Convert string to camelCase

### Validation Utils

- **checkIdNumber** - Validate Chinese ID number
- **isEmail** - Validate email address
- **isPhone** - Validate phone number

## Tree Shaking

JavaScript Utils supports tree shaking, allowing you to import only the functions you need:

```typescript
// ✅ Good - Only imports debounce
import { debounce } from '@tofrankie/utils'

// ✅ Good - Imports multiple functions
import { debounce, throttle } from '@tofrankie/utils'

// ❌ Avoid - Imports entire library
import * as utils from '@tofrankie/utils'
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

## Next Steps

- [Functions Overview](/en/guide/functions) - Complete list of available functions
- [Examples](/en/guide/examples) - Practical usage examples
- [API Reference](/en/api/) - Detailed API documentation
- [Playground](/en/playground/) - Try functions online
