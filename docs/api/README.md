**JavaScript Utils API v0.0.1**

***

# JavaScript Utils

[![npm version](https://img.shields.io/npm/v/@tofrankie/utils.svg)](https://www.npmjs.com/package/@tofrankie/utils)
[![Build Status](https://github.com/tofrankie/utils/workflows/CI/badge.svg)](https://github.com/tofrankie/utils/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> 现代化的 JavaScript 工具函数库，提供类型安全、Tree Shaking和良好的开发体验。

## ✨ 特性

- 🚀 **现代化构建** - 使用 tsdown 构建
- 📦 **Tree Shaking** - 支持按需导入
- 🔒 **TypeScript** - 完整的类型定义和智能提示
- 🧪 **完善测试** - 100% 测试覆盖率，包含性能基准测试
- 📚 **在线文档** - 完整的 API 文档和在线演示
- 🎯 **零依赖** - 无外部依赖，轻量级设计
- 🌍 **多格式** - 支持 ESM、CJS 和 TypeScript 声明文件

## 📦 安装

```bash
# npm
npm install @tofrankie/utils

# pnpm
pnpm add @tofrankie/utils

# yarn
yarn add @tofrankie/utils
```

## 🚀 快速开始

### 按需导入

```typescript
import { debounce, throttle } from '@tofrankie/utils'

// 防抖
const debouncedFn = debounce(() => {
  console.log('防抖执行')
}, 300)

// 节流
const throttledFn = throttle(() => {
  console.log('节流执行')
}, 300)
```

### 按需导入（）

```typescript
// 按函数导入（）
import debounce from '@tofrankie/utils/debounce'
import throttle from '@tofrankie/utils/throttle'

// 新增函数时无需修改配置，自动支持
// import newFunction from '@tofrankie/utils/newFunction'
```

### 在 Node.js 中使用

```javascript
// CommonJS
const { debounce, throttle } = require('@tofrankie/utils')
```

```javascript
// ES Modules
import { debounce, throttle } from '@tofrankie/utils'
```

## 📖 API 文档

### 函数工具 (Function)

#### `debounce(fn, delay, immediate?)`

创建一个防抖函数，在延迟期间内只执行最后一次调用。

**参数：**
- `fn: Function` - 要防抖的函数
- `delay: number` - 延迟时间（毫秒）
- `immediate?: boolean` - 是否立即执行（默认 false）

**返回值：**
- `Function` - 防抖后的函数

**示例：**
```typescript
import debounce from '@tofrankie/utils/function/debounce'

const searchFn = debounce((query: string) => {
  console.log('搜索:', query)
}, 300)

// 用户输入时，只有停止输入 300ms 后才会执行搜索
searchFn('hello')
searchFn('hello world')
searchFn('hello world!') // 只有这次会执行
```

#### `throttle(fn, delay)`

创建一个节流函数，在指定时间内最多执行一次。

**参数：**
- `fn: Function` - 要节流的函数
- `delay: number` - 节流时间（毫秒）

**返回值：**
- `Function` - 节流后的函数

**示例：**
```typescript
import throttle from '@tofrankie/utils/function/throttle'

const scrollHandler = throttle(() => {
  console.log('滚动事件')
}, 100)

// 滚动时，每 100ms 最多执行一次
window.addEventListener('scroll', scrollHandler)
```

## 📊 包体积

| 导入方式 | 大小 | Gzipped |
|---------|------|---------|
| 按需导入 | ~158 B | ~50 B |
| 按需导入 (debounce) | ~952 B | ~286 B |
| 按需导入 (throttle) | ~1006 B | ~318 B |
| 按需导入 (delay) | ~525 B | ~158 B |

## 🛠️ 开发

### 环境要求

- Node.js >= 22.0.0
- pnpm >= 8.0.0

### 安装依赖

```bash
pnpm install
```

### 开发命令

```bash
# 开发模式
pnpm dev

# 构建
pnpm build

# 测试
pnpm test

# 代码检查
pnpm lint

# 格式化
pnpm format

# 包体积分析
pnpm analyze

# 文档开发
pnpm docs:dev
```

### 项目结构

```
@tofrankie/utils/
├── src/                    # 源码
│   ├── function/          # 函数工具
│   └── index.ts           # 统一导出
├── dist/                  # 构建产物
├── test/                  # 测试文件
├── docs/                  # 文档站点
├── examples/              # 示例代码
└── scripts/               # 构建脚本
```

## 🧪 测试

项目使用 Vitest 进行测试，包含单元测试和性能基准测试。

```bash
# 运行测试
pnpm test

# 运行基准测试
pnpm bench

# 测试覆盖率
pnpm test:coverage
```

## 📚 文档

- [在线文档](https://tofrankie.github.io/utils/)
- [API 参考](https://tofrankie.github.io/utils/api/)
- [在线演示](https://tofrankie.github.io/utils/playground/)

## 🤝 贡献

欢迎贡献代码！请查看 [贡献指南](_media/CONTRIBUTING.md) 了解详细信息。

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📄 许可证

本项目基于 [MIT 许可证](https://github.com/tofrankie/utils/blob/main/LICENSE) 开源。

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

---

**注意：** 本项目主要用于学习和演示现代化 JavaScript 工具库的开发流程。在生产环境中，建议使用经过充分测试的成熟工具库如 [Lodash](https://lodash.com/) 或 [Ramda](https://ramdajs.com/)。
