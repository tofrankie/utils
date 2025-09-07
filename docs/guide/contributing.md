# 贡献指南

感谢您对 JavaScript Utils 项目的关注！我们欢迎各种形式的贡献。

## 🚀 快速开始

### 环境要求

- Node.js >= 22.0.0
- pnpm >= 8.0.0

### 本地开发

```bash
# 克隆项目
git clone https://github.com/toFrankie/utils.git
cd utils

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 运行测试
pnpm test

# 构建项目
pnpm build
```

## 📝 贡献方式

### 1. 报告问题

如果您发现了 bug 或有功能建议，请：

1. 检查 [Issues](https://github.com/toFrankie/utils/issues) 是否已存在
2. 创建新的 Issue，详细描述问题或建议
3. 提供复现步骤（如果是 bug）

### 2. 提交代码

1. Fork 项目到您的 GitHub 账户
2. 创建功能分支：`git checkout -b feature/your-feature-name`
3. 提交更改：`git commit -m 'feat: add your feature'`
4. 推送分支：`git push origin feature/your-feature-name`
5. 创建 Pull Request

### 3. 编写文档

- 更新 README.md
- 添加或更新 API 文档
- 编写使用示例
- 改进现有文档

## 🛠️ 开发规范

### 代码规范

项目使用以下工具确保代码质量：

- **ESLint** - 代码风格检查
- **Prettier** - 代码格式化
- **TypeScript** - 类型检查
- **Vitest** - 单元测试

### 提交信息规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

常用类型：
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

### 测试要求

- 新功能必须包含测试用例
- 测试覆盖率不能低于当前水平
- 所有测试必须通过

### 文件命名规范

- 使用 `kebab-case` 命名：`my-function.ts`
- 特殊函数名保持原意：`convert2pinyin`
- 测试文件后缀：`*.test.ts`
- 示例文件后缀：`*-demo.html`

## 📦 添加新函数

### 1. 创建函数文件

在相应的分类目录下创建函数文件：

```typescript
// src/array/my-function.ts
/**
 * 函数描述
 * 
 * @param param1 参数1描述
 * @param param2 参数2描述
 * @returns 返回值描述
 * 
 * @example
 * ```ts
 * const result = myFunction(param1, param2)
 * console.log(result)
 * ```
 */
export function myFunction(param1: string, param2: number): boolean {
  // 实现代码
  return true
}
```

### 2. 更新索引文件

在相应的 `index.ts` 中导出新函数：

```typescript
// src/array/index.ts
export * from './my-function'
```

### 3. 添加测试

创建测试文件：

```typescript
// test/array/my-function.test.ts
import { describe, it, expect } from 'vitest'
import { myFunction } from '../../src/array/my-function'

describe('myFunction', () => {
  it('should work correctly', () => {
    expect(myFunction('test', 123)).toBe(true)
  })
})
```

### 4. 更新文档

- 运行 `pnpm docs:api` 生成 API 文档
- 在 `docs/guide/examples.md` 中添加使用示例
- 更新 `docs/guide/functions.md` 中的函数列表

## 🔍 代码审查

### Pull Request 检查清单

- [ ] 代码符合项目规范
- [ ] 所有测试通过
- [ ] 添加了必要的测试用例
- [ ] 更新了相关文档
- [ ] 提交信息符合规范
- [ ] 没有破坏性更改

### 审查重点

1. **功能正确性** - 函数是否按预期工作
2. **性能考虑** - 是否有性能问题
3. **类型安全** - TypeScript 类型是否正确
4. **测试覆盖** - 是否有足够的测试
5. **文档完整** - 是否有清晰的文档和示例

## 📚 资源

- [项目文档](https://tofrankie.github.io/utils/)
- [API 参考](https://tofrankie.github.io/utils/api/)
- [在线演示](https://tofrankie.github.io/utils/playground/)
- [GitHub Issues](https://github.com/toFrankie/utils/issues)

## 💬 社区

- 在 [GitHub Discussions](https://github.com/toFrankie/utils/discussions) 中讨论
- 关注项目更新和公告

感谢您的贡献！🎉
