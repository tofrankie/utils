# Function Utils

Utility functions for function manipulation.

## Function List

### debounce

Delay function execution until after wait time has elapsed.

```typescript
import { debounce } from '@tofrankie/utils'

const debouncedFn = debounce(() => {
  console.log('executed')
}, 300)
```

**Features:**
- Debounce functionality to avoid frequent calls
- Support for immediate execution option
- Support for cancellation

[View detailed documentation →](/en/api/functions/debounce)

### throttle

Limit function execution frequency.

```typescript
import { throttle } from '@tofrankie/utils'

const throttledFn = throttle(() => {
  console.log('executed')
}, 300)
```

**Features:**
- Throttle functionality to control execution frequency
- Support for immediate execution option
- Support for cancellation

[View detailed documentation →](/en/api/functions/throttle)

### delay

Delay function execution.

```typescript
import { delay } from '@tofrankie/utils'

await delay(1000) // Delay 1 second
console.log('executed after 1 second')
```

**Features:**
- Simple delay execution
- Returns Promise
- Support for cancellation

[View detailed documentation →](/en/api/functions/delay)

## Use Cases

### Debounce
- Search input fields
- Window resize events
- Button click prevention

### Throttle
- Scroll event handling
- Mouse move events
- API request rate limiting

### Delay
- Animation delays
- Asynchronous operation intervals
- Testing waits

## Performance Optimization

All functions are optimized for minimal bundle size:

- **debounce**: ~0.5KB
- **throttle**: ~0.5KB
- **delay**: ~0.3KB

## Type Safety

Full TypeScript support with complete type definitions and intelligent hints.
