# Installation

JavaScript Utils can be installed via npm, pnpm, or yarn.

## Package Managers

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

## CDN Usage

### ESM

```html
<script type="module">
  import { debounce, throttle } from 'https://unpkg.com/@tofrankie/utils@latest/dist/index.mjs'
  
  const debouncedFn = debounce(() => {
    console.log('Debounced execution')
  }, 300)
</script>
```

### UMD

```html
<script src="https://unpkg.com/@tofrankie/utils@latest/dist/index.umd.js"></script>
<script>
  const { debounce, throttle } = window.JavaScriptUtils
  
  const debouncedFn = debounce(() => {
    console.log('Debounced execution')
  }, 300)
</script>
```

## Import Methods

### Recommended: Main Entry Import

```typescript
// Import from main entry (tree-shakable)
import { debounce, throttle } from '@tofrankie/utils'
```

### Alternative: Individual Function Import

```typescript
// Import individual functions (also tree-shakable)
import debounce from '@tofrankie/utils/debounce'
import throttle from '@tofrankie/utils/throttle'
```

Both methods achieve the same tree-shaking effect and minimal bundle size.

## TypeScript Support

JavaScript Utils is built with TypeScript and provides complete type definitions. No additional type packages are needed.

```typescript
import { debounce } from '@tofrankie/utils'

// TypeScript knows the exact type
const debouncedFn: (...args: any[]) => void = debounce(() => {
  console.log('Hello')
}, 300)
```

## Browser Support

JavaScript Utils supports all modern browsers:

- Chrome >= 88
- Firefox >= 85
- Safari >= 14
- Edge >= 88

## Node.js Support

- Node.js >= 22.0.0

## Bundle Size

JavaScript Utils is optimized for minimal bundle size:

| Import Method | Bundle Size | Tree Shaking |
|---------------|-------------|--------------|
| `import { debounce } from '@tofrankie/utils'` | ~0.5KB | ✅ |
| `import { debounce, throttle } from '@tofrankie/utils'` | ~1.0KB | ✅ |
| `import * as utils from '@tofrankie/utils'` | ~15KB | ❌ |

## Next Steps

- [Getting Started](/en/guide/getting-started) - Learn how to use JavaScript Utils
- [Functions Overview](/en/guide/functions) - Complete list of available functions
- [Examples](/en/guide/examples) - Practical usage examples
