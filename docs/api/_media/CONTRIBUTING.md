# 贡献指南

感谢您对 JavaScript Utils 项目的关注！我们欢迎任何形式的贡献。

## 🚀 快速开始

### 环境设置

1. **Fork 并克隆仓库**
   ```bash
   git clone https://github.com/toFrankie/utils.git
   cd utils
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **启动开发环境**
   ```bash
   pnpm dev
   ```

## 📝 开发流程

### 1. 创建新功能

- 在 `src/` 目录下创建新的工具函数
- 遵循现有的目录结构（如 `src/function/`）
- 确保函数有完整的 TypeScript 类型定义

### 2. 编写测试

- 在 `test/` 目录下创建对应的测试文件
- 确保测试覆盖率达到 100%
- 包含边界情况和错误处理测试

### 3. 更新文档

- 更新 `README.md` 中的 API 文档
- 在 `docs/` 目录下添加相关文档
- 确保示例代码可以正常运行

### 4. 代码规范

项目使用以下工具确保代码质量：

- **ESLint** - 代码检查
- **Prettier** - 代码格式化
- **TypeScript** - 类型检查
- **Vitest** - 测试框架

运行以下命令确保代码符合规范：

```bash
# 代码检查
pnpm lint

# 自动修复
pnpm lint:fix

# 格式化
pnpm format

# 类型检查
pnpm type-check

# 运行测试
pnpm test
```

## 🧪 测试指南

### 单元测试

```typescript
// test/function/example.test.ts
import { describe, expect, it } from 'vitest'
import { example } from '../../src/function/example'

describe('example', () => {
  it('should work correctly', () => {
    expect(example()).toBe('expected result')
  })
})
```

### 性能基准测试

```typescript
// test/benchmark/example.bench.ts
import { bench, describe } from 'vitest'
import { example } from '../../src/function/example'

describe('example performance', () => {
  bench('example function', () => {
    example()
  })
})
```

## 📦 构建和发布

### 本地构建

```bash
# 构建项目
pnpm build

# 分析包体积
pnpm analyze

# 验证包配置
pnpm validate
```

### 发布流程

项目使用 [Changesets](https://github.com/changesets/changesets) 管理版本和发布：

1. **创建 changeset**
   ```bash
   pnpm changeset
   ```

2. **提交 changeset**
   ```bash
   git add .changeset/
   git commit -m "Add changeset for new feature"
   ```

3. **发布**
   ```bash
   pnpm changeset version
   pnpm changeset publish
   ```

## 🐛 报告问题

在报告问题之前，请确保：

1. 检查 [Issues](https://github.com/toFrankie/utils/issues) 中是否已有相同问题
2. 使用最新的代码版本
3. 提供详细的复现步骤

### 问题模板

```markdown
## 问题描述
简要描述遇到的问题

## 复现步骤
1. 执行 '...'
2. 点击 '...'
3. 看到错误

## 预期行为
描述您期望发生的情况

## 实际行为
描述实际发生的情况

## 环境信息
- OS: [e.g. macOS, Windows, Linux]
- Node.js 版本: [e.g. 22.0.0]
- 包版本: [e.g. 1.0.0]

## 附加信息
添加任何其他相关信息
```

## 💡 功能请求

在提出功能请求之前，请确保：

1. 检查 [Issues](https://github.com/toFrankie/utils/issues) 中是否已有相同请求
2. 功能符合项目的设计理念
3. 提供详细的使用场景

### 功能请求模板

```markdown
## 功能描述
简要描述您希望添加的功能

## 使用场景
描述这个功能的使用场景

## 解决方案
描述您期望的解决方案

## 替代方案
描述您考虑过的其他解决方案

## 附加信息
添加任何其他相关信息
```

## 🏷️ 提交规范

项目使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### 类型说明

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

### 示例

```bash
feat(function): add debounce utility function

Add a new debounce function with TypeScript support and comprehensive tests.

Closes #123
```

## 📋 检查清单

提交 Pull Request 之前，请确保：

- [ ] 代码符合项目规范
- [ ] 所有测试通过
- [ ] 测试覆盖率达到要求
- [ ] 文档已更新
- [ ] 提交信息符合规范
- [ ] 没有破坏性更改（或已标明）

## 🎯 开发重点

### 优先级

1. **高优先级**
   - 核心功能实现
   - 测试覆盖
   - 类型安全

2. **中优先级**
   - 性能优化
   - 文档完善
   - 示例代码

3. **低优先级**
   - 样式优化
   - 辅助工具
   - 非核心功能

### 设计原则

- **简单性** - 保持 API 简单易用
- **一致性** - 保持代码风格一致
- **可测试性** - 确保代码易于测试
- **类型安全** - 充分利用 TypeScript
- **性能** - 关注包体积和运行性能

## 📞 联系方式

- 项目维护者：[@toFrankie](https://github.com/toFrankie)
- 邮箱：1426203851@qq.com
- 讨论：[GitHub Discussions](https://github.com/toFrankie/utils/discussions)

感谢您的贡献！🎉
