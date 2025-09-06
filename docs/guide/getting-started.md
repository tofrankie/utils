# 快速开始

## 安装

```bash
# 使用 pnpm
pnpm add @tofrankie/utils

# 使用 npm
npm install @tofrankie/utils

# 使用 yarn
yarn add @tofrankie/utils
```

## 基本使用

### ES 模块（按需导入）

```typescript
import { debounce, throttle } from '@tofrankie/utils'
```

### CommonJS

```javascript
const { debounce, throttle } = require('@tofrankie/utils')
```

## TypeScript 支持

```typescript
import { debounce, throttle } from '@tofrankie/utils'

// 完整的类型支持
const debouncedFn = debounce<(value: string) => void>(
  (value) => {
    console.log(value)
  },
  300
)

debouncedFn('Hello World')
```

## 下一步

- [安装指南](./installation)
- [API 参考](../api/README)
- [Playground](../playground/)
