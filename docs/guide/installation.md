# 安装

## 环境要求

- Node.js >= 22.0.0
- 现代浏览器（支持 ES2022）

## 包管理器安装

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

## CDN 使用

### ESM

```html
<script type="module">
  import { debounce, throttle } from 'https://unpkg.com/@tofrankie/utils@latest/dist/index.mjs'
</script>
```

### UMD

```html
<script src="https://unpkg.com/@tofrankie/utils@latest/dist/index.cjs"></script>
<script>
  const { debounce, throttle } = window.JavaScriptUtils
</script>
```

## 验证安装

```typescript
import { debounce, throttle } from '@tofrankie/utils'

console.log(typeof debounce) // 'function'
console.log(typeof throttle) // 'function'
```

## 版本管理

### 查看版本

```bash
npm list @tofrankie/utils
```

### 更新版本

```bash
npm update @tofrankie/utils
```

### 指定版本

```bash
npm install @tofrankie/utils@1.0.0
```
