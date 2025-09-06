# 贡献指南

感谢您对 JavaScript Utils 项目的关注！我们欢迎所有形式的贡献，包括但不限于：

- 🐛 报告 Bug
- ✨ 提出新功能
- 📝 改进文档
- 🧪 添加测试
- 🔧 代码优化

## 开发环境设置

### 环境要求

- **Node.js**: >= 22.0.0
- **包管理器**: pnpm >= 10.15.1 (推荐使用 Corepack 管理版本)

> **注意**: 项目使用 Corepack 来管理 pnpm 版本，确保所有开发者使用相同的版本。首次使用前请运行 `corepack enable` 启用 Corepack。

### 1. Fork 项目

首先在 GitHub 上 Fork 本项目到你的账户下。

### 2. 克隆项目

```bash
# 克隆你的 fork
git clone https://github.com/YOUR_USERNAME/utils.git
cd utils

# 添加上游仓库
git remote add upstream https://github.com/toFrankie/utils.git

# 同步上游仓库（可选，用于获取最新代码）
git fetch upstream
git checkout develop
git merge upstream/develop

# 启用 Corepack（首次使用）
corepack enable
```

### 3. 安装依赖

项目使用 Corepack 管理 pnpm 版本

```bash
# 启用 Corepack（首次使用）
corepack enable

# 或者手动激活指定版本的 pnpm
corepack prepare pnpm@10.15.1 --activate
```

```bash
pnpm install
```

### 4. 开发命令

```bash
# 开发模式
pnpm dev

# 运行测试
pnpm test

# 运行测试（一次性）
pnpm test:run

# 运行测试覆盖率
pnpm test:coverage

# 运行基准测试
pnpm test:bench

# 代码检查
pnpm lint

# 代码格式化
pnpm format

# 类型检查
pnpm type:check

# 验证所有检查（类型、代码、格式化、测试）
pnpm validate

# 构建项目
pnpm build

# 清理构建产物
pnpm clean

# 文档开发
pnpm docs:dev

# 构建文档
pnpm docs:build

# 预览文档
pnpm docs:preview
```

### 5. 包管理器版本管理

项目使用 **Corepack** 来管理 pnpm 版本，确保所有开发者使用相同的版本。

#### 什么是 Corepack？

Corepack 是 Node.js 内置的包管理器版本管理工具，可以自动使用 `package.json` 中 `packageManager` 字段指定的版本。

#### 使用方法

```bash
# 1. 启用 Corepack（一次性设置）
corepack enable

# 2. 手动激活指定版本的 pnpm
corepack prepare pnpm@10.15.1 --activate

# 或者激活其他版本（如 10.15.1）
corepack prepare pnpm@10.15.1 --activate

# 3. 验证版本
pnpm --version
```

#### 优势

- ✅ **版本一致性**: 确保所有开发者使用相同的 pnpm 版本
- ✅ **自动管理**: 无需手动安装或升级 pnpm
- ✅ **CI/CD 友好**: 在 CI 环境中也能自动使用正确版本
- ✅ **零配置**: 克隆项目后直接使用 `pnpm install` 即可

## 代码规范

### 1. 代码风格

我们使用 ESLint 和 Prettier 来确保代码风格的一致性：

- **ESLint**: 使用 `@antfu/eslint-config` 配置
- **Prettier**: 仅用于格式化 Markdown 和 JSON 文件
- **TypeScript**: 严格的类型检查

### 2. 文件命名

- 所有文件使用 `kebab-case` 命名
- 测试文件以 `.test.ts` 结尾
- 基准测试文件以 `.bench.ts` 结尾

### 3. 提交规范

我们使用 Conventional Commits 规范：

```bash
# 功能
feat: add new utility function

# 修复
fix: resolve issue with debounce function

# 文档
docs: update API documentation

# 样式
style: fix code formatting

# 重构
refactor: improve function performance

# 测试
test: add unit tests for new function

# 构建
build: update build configuration

# 性能
perf: optimize function performance

# 其他
chore: update dependencies
```

## 添加新功能

### 1. 创建新函数

```typescript
// src/function/new-function.ts
/**
 * 新函数的描述
 *
 * @category Function
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * newFunction('example') // 'result'
 * ```
 *
 * @param input - 输入参数描述
 * @returns 返回值描述
 */
export function newFunction(input: string): string {
  // 函数实现
  return input
}
```

### 2. 添加测试

```typescript
// test/function/new-function.test.ts
import { describe, expect, it } from 'vitest'
import { newFunction } from '../../src/function/new-function'

describe('newFunction', () => {
  it('should work correctly', () => {
    expect(newFunction('test')).toBe('expected result')
  })

  it('should handle edge cases', () => {
    expect(newFunction('')).toBe('')
  })
})
```

### 3. 添加基准测试

```typescript
// test/benchmark/function.bench.ts
import { bench, describe } from 'vitest'
import { newFunction } from '../../src/function/new-function'

describe('Function utilities benchmark', () => {
  bench('newFunction', () => {
    newFunction('test input')
  })
})
```

### 4. 更新导出

```typescript
// src/function/index.ts
export * from './new-function'
```

### 5. 更新文档

- 在 `docs/guide/functions.md` 中添加函数说明
- 在 `docs/guide/examples.md` 中添加使用示例
- 运行 `pnpm docs:api` 更新 API 文档

## 报告 Bug

### 1. 检查现有问题

在报告新 Bug 之前，请先检查 [Issues](https://github.com/toFrankie/utils/issues) 中是否已经存在相同的问题。

### 2. 创建 Issue

使用以下模板创建 Bug 报告：

```markdown
## Bug 描述
简要描述 Bug 的内容。

## 重现步骤
1. 执行 '...'
2. 点击 '...'
3. 看到错误

## 预期行为
描述您期望发生的情况。

## 实际行为
描述实际发生的情况。

## 环境信息
- OS: [e.g. macOS, Windows, Linux]
- Node.js 版本: [e.g. 18.0.0]
- 浏览器版本: [e.g. Chrome 91.0.4472.124]

## 代码示例
```typescript
// 重现 Bug 的最小代码示例
```

## 附加信息
添加任何其他相关信息。
```

## 提出新功能

### 1. 功能请求模板

```markdown
## 功能描述
简要描述您希望添加的功能。

## 使用场景
描述这个功能的使用场景和解决的问题。

## 建议的 API
```typescript
// 建议的函数签名和用法
```

## 替代方案
描述您考虑过的其他解决方案。

## 附加信息
添加任何其他相关信息。
```

## 提交 Pull Request

### 1. 创建分支

```bash
git checkout -b feature/your-feature-name
# 或
git checkout -b fix/your-bug-fix
```

### 2. 提交更改

```bash
git add .
git commit -m "feat: add new utility function"
```

### 3. 推送分支

```bash
git push origin feature/your-feature-name
```

### 4. 创建 Pull Request

在 GitHub 上创建 Pull Request，并填写以下信息：

- **标题**: 简洁描述更改内容
- **描述**: 详细说明更改内容、解决的问题、测试情况等
- **关联 Issue**: 如果相关，关联对应的 Issue

### 5. PR 检查清单

- [ ] 代码符合项目规范
- [ ] 添加了相应的测试
- [ ] 测试全部通过
- [ ] 更新了相关文档
- [ ] 提交信息符合规范

## 代码审查

### 1. 审查要点

- 代码质量和可读性
- 性能影响
- 测试覆盖率
- 文档完整性
- 向后兼容性

### 2. 审查流程

1. 自动化检查 (CI/CD)
2. 代码审查
3. 测试验证
4. 文档检查
5. 合并批准

## 发布流程

### 1. 版本管理

我们使用 Changesets 进行版本管理：

```bash
# 创建变更集
pnpm changeset

# 更新版本
pnpm changeset version

# 发布
pnpm release
```

### 2. 发布检查清单

- [ ] 所有测试通过
- [ ] 代码检查通过
- [ ] 文档更新完整
- [ ] 版本号正确
- [ ] CHANGELOG 更新

## 社区准则

### 1. 行为准则

- 保持友善和尊重
- 欢迎不同观点
- 专注于对项目最有利的事情
- 尊重不同的观点、经验和背景

### 2. 沟通渠道

- **GitHub Issues**: Bug 报告和功能请求
- **GitHub Discussions**: 一般讨论和问题
- **Pull Requests**: 代码贡献

## 许可证

通过贡献代码，您同意您的贡献将在 MIT 许可证下发布。

## 感谢

感谢所有为项目做出贡献的开发者！您的贡献让这个项目变得更好。

---

如果您有任何问题，请随时在 [GitHub Issues](https://github.com/toFrankie/utils/issues) 中提出。
