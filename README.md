# JavaScript Utils

[![npm version](https://img.shields.io/npm/v/@tofrankie/utils.svg)](https://www.npmjs.com/package/@tofrankie/utils)
[![npm downloads](https://img.shields.io/npm/dm/@tofrankie/utils.svg)](https://www.npmjs.com/package/@tofrankie/utils)
[![Build Status](https://github.com/tofrankie/utils/workflows/CI/badge.svg)](https://github.com/tofrankie/utils/actions)
[![Coverage](https://codecov.io/gh/tofrankie/@tofrankie/utils/branch/main/graph/badge.svg)](https://codecov.io/gh/tofrankie/@tofrankie/utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22+-green.svg)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-10.15.1+-orange.svg)](https://pnpm.io/)

> [!CAUTION]
> 仅学习用，请勿在生产环境使用！

> 现代化的 JavaScript 工具函数库，提供类型安全、Tree Shaking 和良好的开发体验。

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

```javascript
// ES Modules
import { debounce, throttle } from '@tofrankie/utils'
```

```javascript
// CommonJS
const { debounce, throttle } = require('@tofrankie/utils')
```

## 📚 文档

- [在线文档](https://tofrankie.github.io/utils/)
- [API 参考](https://tofrankie.github.io/utils/api/)
- [在线演示](https://tofrankie.github.io/utils/playground/)

## 🛠️ 开发

### 环境要求

- Node.js >= 22.0.0
- pnpm >= 10.15.1

### 安装依赖

```bash
# 启用 Corepack（首次使用）
corepack enable

# 或者手动激活指定版本的 pnpm
corepack prepare pnpm@10.15.1 --activate

# 安装依赖
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

## 🤝 贡献

欢迎贡献代码！请查看 [贡献指南](CONTRIBUTING.md) 了解详细信息。

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

---

**注意：** 本项目主要用于学习和演示现代化 JavaScript 工具库的开发流程。在生产环境中，建议使用经过充分测试的成熟工具库如 [Lodash](https://lodash.com/) 或 [Ramda](https://ramdajs.com/)。
