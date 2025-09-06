---
layout: home

hero:
  name: "JavaScript Utils"
  text: "Modern JavaScript utility library"
  tagline: "Type-safe, Tree Shaking optimized, and developer-friendly"
  image:
    src: /logo.svg
    alt: JavaScript Utils
  actions:
    - theme: brand
      text: Get Started
      link: /en/guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/toFrankie/utils

features:
  - icon: 🚀
    title: Modern Build
    details: Built with tsdown for modern development
  - icon: 📦
    title: Tree Shaking
    details: Support on-demand imports to reduce bundle size
  - icon: 🔒
    title: TypeScript
    details: Complete type definitions and intelligent hints
  - icon: 🧪
    title: Well Tested
    details: 100% test coverage with performance benchmarks
  - icon: 📚
    title: Online Docs
    details: Complete API documentation and online demos
  - icon: 🎯
    title: Zero Dependencies
    details: No external dependencies, lightweight design
  - icon: 🌍
    title: Multi-format
    details: Support ESM, CJS and TypeScript declaration files
  - icon: ⚡
    title: High Performance
    details: Optimized for speed and minimal bundle size
---

## Quick Start

```bash
# Install
npm install @tofrankie/utils
# or
pnpm add @tofrankie/utils
# or
yarn add @tofrankie/utils
```

```typescript
// Use
import { debounce, throttle } from '@tofrankie/utils'

const debouncedFn = debounce(() => {
  console.log('Debounced execution')
}, 300)

const throttledFn = throttle(() => {
  console.log('Throttled execution')
}, 300)
```

## Why JavaScript Utils?

- **🎯 Focused**: Each function has a single responsibility
- **🔧 Practical**: Functions you actually need in daily development
- **📈 Performant**: Optimized for speed and minimal bundle size
- **🛡️ Type-safe**: Full TypeScript support with intelligent hints
- **🌳 Tree-shakable**: Import only what you need
- **📖 Well-documented**: Complete documentation with examples
- **🧪 Tested**: Comprehensive test coverage with benchmarks

## Bundle Size

| Import Method | Bundle Size | Tree Shaking |
|---------------|-------------|--------------|
| `import { debounce } from '@tofrankie/utils'` | ~0.5KB | ✅ |
| `import { debounce, throttle } from '@tofrankie/utils'` | ~1.0KB | ✅ |
| `import * as utils from '@tofrankie/utils'` | ~15KB | ❌ |

## Online Demo

Try JavaScript Utils in your browser without installation:

[🎮 Open Playground](/en/playground/)

## Community

- [GitHub](https://github.com/toFrankie/utils) - Source code and issues
- [NPM](https://www.npmjs.com/package/@tofrankie/utils) - Package registry
- [Documentation](https://toFrankie.github.io/) - Complete docs
