# Playground

Experience JavaScript Utils functions online without installation.

## 🚀 Quick Start

Click the button below to open the online demo environment with real-time editing and execution:

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://stackblitz.com/github/tofrankie/utils" target="_blank" style="display: inline-block; padding: 12px 24px; background: #4F46E5; color: white; text-decoration: none; border-radius: 8px; font-weight: 500;">
    🎮 Open Online Demo
  </a>
</div>

## 💻 Local Demo

You can also run the demo locally:

```bash
# Clone the project
git clone https://github.com/tofrankie/utils.git
cd utils

# Install dependencies
pnpm install

# Run local demos
pnpm dev:array    # Array utilities demo
pnpm dev:object   # Object utilities demo
pnpm dev:string   # String utilities demo
pnpm dev:validation # Validation utilities demo
```

## 📚 Function Categories

Choose the functions you want to experience:

### Function Utils

- [Debounce](#debounce) - Delay function execution until after specified time
- [Throttle](#throttle) - Limit function execution frequency
- [Delay](#delay) - Delay function execution

### Array Utils

- [Array Check (isArray)](#isarray) - Check if value is an array
- [Array Chunk (chunk)](#chunk) - Split array into chunks of specified size
- [Array Unique (unique)](#unique) - Remove duplicates from array

### Object Utils

- [Deep Copy (deepCopy)](#deepcopy) - Deep clone objects
- [Pick Properties (pick)](#pick) - Pick specified properties from object
- [Omit Properties (omit)](#omit) - Omit specified properties from object

### String Utils

- [Pinyin Conversion (convert2pinyin)](#convert2pinyin) - Convert Chinese characters to pinyin
- [Capitalize (capitalize)](#capitalize) - Capitalize first letter of string
- [Camel Case (camelCase)](#camelcase) - Convert string to camelCase

### Validation Utils

- [ID Number Validation (checkIdNumber)](#checkidnumber) - Validate Chinese ID number
- [Email Validation (isEmail)](#isemail) - Validate email address
- [Phone Validation (isPhone)](#isphone) - Validate phone number

## Online Editor

### 🎮 Interactive Playground

<PlaygroundVersionEn />

### 📚 Version Information

- **Latest**: Contains all the latest features and fixes
- **Stable**: Well-tested stable version
- **Beta**: Preview version with experimental features

## Local Development

You can also run examples locally:

```bash
# Run ESM examples
pnpm dev:examples

# Or run directly
node examples/esm-demo.mjs
node examples/node-demo.cjs
```

## Example Code

### Debounce Example

```javascript
import { debounce } from '@tofrankie/utils'

const debouncedFn = debounce(() => {
  console.log('Debounced execution')
}, 300)

// Multiple rapid calls, only the last one executes after 300ms
debouncedFn()
debouncedFn()
debouncedFn() // Only this one will execute
```

### Throttle Example

```javascript
import { throttle } from '@tofrankie/utils'

const throttledFn = throttle(() => {
  console.log('Throttled execution')
}, 300)

// Multiple calls within 300ms, only one executes
throttledFn()
throttledFn() // Ignored
throttledFn() // Ignored
```

### Delay Example

```javascript
import { delay } from '@tofrankie/utils'

const delayedFn = delay(() => {
  console.log('Delayed execution')
}, 1000)

// Executes after 1 second
delayedFn()
```
