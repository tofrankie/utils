# JavaScript Utils 项目计划

## 项目概述

做一个现代化的 TypeScript 工具库，具备完整的开发工具链、在线演示、自动化文档和发布流程。

## 核心目标

1. **完整的 TypeScript 支持** - 类型安全和智能提示
2. **在线 Playground** - 实时体验和测试
3. **Tree Shaking** - 按需导入，
4. **自动化文档** - 从代码生成文档和示例
5. **完善的测试** - 单元测试、性能测试
6. **现代化构建** - 使用 tsdown 提升构建性能
7. **GitHub Pages 部署** - 免费部署文档站点

## 技术栈选择

### 构建工具
- **tsdown** - 构建工具
- **TypeScript** - 类型支持
- **Vitest** - 测试框架

### 文档系统
- **VitePress** - 文档生成
- **@stackblitz/sdk** - WebContainer 嵌入
- **Monaco Editor** - 代码编辑器（可选）

### 开发工具
- **pnpm** - 包管理
- **ESLint + Prettier + Stylelint** - 代码规范
- **Husky + lint-staged** - Git hooks
- **@commitlint/cli** - 提交信息规范
- **Changesets** - 版本管理

### 部署
- **GitHub Pages** - 文档部署
- **GitHub Actions** - CI/CD

## 项目结构设计

### 文件命名规范
- **所有文件使用 kebab-case 命名**：`my-function.ts`、`user-utils.js`
- **特殊函数名保持原意**：`convert2pinyin`（而非 `convert-to-pinyin`）
- **配置文件使用 kebab-case**：`eslint.config.js`、`vitest.config.ts`
- **测试文件后缀**：`*.test.ts`、`*.spec.ts`、`*.bench.ts`
- **示例文件后缀**：`*-demo.html`、`*-demo.cjs`、`*-demo.mjs`

### 重要开发规则
- **GitHub Actions 同步更新**：当修改 `package.json` 中的脚本命令时，必须同步检查并更新 `.github/workflows/` 中的相关配置，确保 CI/CD 流程与项目配置保持一致

```
@tofrankie/utils/
├── src/                        # 核心工具库源码
│   ├── array/                  # 数组相关函数
│   ├── object/                 # 对象相关函数
│   ├── function/               # 函数相关工具
│   ├── string/                 # 字符串工具
│   ├── validation/             # 验证工具
│   └── index.ts                # 统一导出
├── dist/                       # 构建输出
├── test/                       # 测试文件
├── docs/                       # 文档站点
│   ├── .vitepress/
│   │   ├── theme/
│   │   │   └── components/     # 自定义组件
│   │   └── config.ts
│   ├── guide/                  # 指南文档
│   ├── api/                    # API 文档
│   ├── playground/             # Playground 页面（文档的一部分）
│   ├── locales/                # 国际化文件
│   │   ├── zh/                # 中文
│   │   └── en/                # 英文
│   └── vitepress.config.ts
├── scripts/                    # 构建脚本
│   ├── build.js
│   ├── dev.js
│   └── release.js
├── examples/                   # 示例和调试
├── .github/                    # CI/CD
│   └── workflows/
├── .husky/                     # Git hooks
├── package.json               # 根 package.json
├── pnpm-lock.yaml
├── tsdown.config.js          # 构建配置
├── commitlint.config.js        # 提交规范配置
├── eslint.config.js           # ESLint 配置 (新格式)
├── prettier.config.js         # Prettier 配置
├── stylelint.config.js        # Stylelint 配置
├── tsconfig.json              # TypeScript 配置
└── tsconfig.build.json        # 构建 TypeScript 配置
```

### 目录结构说明

- **src/**: 核心工具库源码，按功能分类
- **docs/**: 文档站点，包含 Playground 页面
- **examples/**: 示例和调试代码
- **scripts/**: 构建和发布脚本
- **根目录配置文件**: 使用最新规范格式的配置文件

### 单包结构优势

- **减少复杂度**: 无需管理多包依赖关系
- **更快迭代**: 简化的开发和发布流程
- **易于维护**: 单一代码库，配置简单
- **后续扩展**: 需要时可轻松拆分为 monorepo

## 任务分解

### 阶段一：基础架构搭建 (2-3周)

#### 1.1 项目结构重构
- [ ] 创建单包目录结构
- [ ] 迁移现有代码到新结构
- [ ] 设置根 package.json 和脚本
- [ ] 配置 pnpm 包管理

#### 1.2 TypeScript 迁移
- [ ] 配置 TypeScript 编译选项
- [ ] 配置 tsconfig.build.json 构建配置
- [ ] 重命名 .js 文件为 .ts
- [ ] 添加基础类型定义
- [ ] 配置类型检查脚本 (tsc --noEmit + tsc --project tsconfig.build.json)

#### 1.3 构建系统配置
- [ ] 安装和配置 tsdown
- [ ] 创建构建配置文件
- [ ] 设置多格式输出 (CJS + ESM + DTS)
- [ ] 配置 Tree Shaking
- [ ] 配置包导出策略 (exports 字段精确控制)
- [ ] 配置别名管理 (tsconfig paths + tsdown)
- [ ] 集成 publint 验证包发布配置
  - [ ] 配置 sideEffects: false 支持 Tree Shaking
  - [ ] 验证 exports 字段配置正确性
  - [ ] 验证多格式输出文件存在性和有效性
  - [ ] 配置 prepublishOnly 脚本
- [ ] 测试构建流程和输出

#### 1.4 代码规范配置
- [ ] 配置 ESLint (使用 eslint.config.js 新格式)
- [ ] 配置 Prettier (使用 prettier.config.js)
- [ ] 配置 Stylelint (使用 stylelint.config.js)
- [ ] 配置 @commitlint/cli
- [ ] 配置 Husky 和 lint-staged

### 阶段二：功能增强 (3-4周)

#### 2.1 测试系统完善
- [ ] 配置 Vitest 测试环境
- [ ] 配置跨环境测试 (Node.js + jsdom)
- [ ] 迁移现有 Jest 测试用例
- [ ] 配置测试覆盖率
- [ ] 集成性能基准测试 (tinybench)
- [ ] 设置测试自动化

#### 2.2 文档系统搭建
- [ ] 配置 VitePress
- [ ] 创建文档结构
- [ ] 设计主题和布局
- [ ] 配置自动文档生成
- [ ] 集成 TypeDoc (自动化 API 文档)
- [ ] 配置国际化支持
- [ ] 配置本地搜索功能
- [ ] 配置 TypeDoc 自动生成
  - [ ] 配置 TypeDoc 生成 API 文档到 `docs/api/`
  - [ ] 配置 @category 标签自动分类
  - [ ] 创建 `scripts/generate-docs.js` 脚本
  - [ ] 实现自动创建 Playground 页面模板
  - [ ] 实现自动更新导航配置
  - [ ] 支持多示例 Playground 生成
  - [ ] 人工优化 Playground 示例（确保体验）

#### 2.3 Playground 集成
- [ ] 在 docs 中创建 playground/ 页面
- [ ] 安装和配置 @stackblitz/sdk
- [ ] 创建 WebContainer 嵌入组件
- [ ] 创建函数示例模板
- [ ] 实现版本切换功能
- [ ] 添加源码和测试链接
- [ ] 限制 Playground 范围（纯前端工具函数）
- [ ] 集成 stackblitz sdk 内嵌

#### 2.4 版本管理
- [ ] 配置 Changesets (管理版本和 changelog)
- [ ] 设置版本发布流程
- [ ] 配置自动 changelog 生成
- [ ] 设置语义化版本控制

#### 2.5 文档国际化
- [ ] 配置 VitePress 国际化功能
- [ ] 创建中英文文档结构
- [ ] 翻译核心文档内容（指南、Playground 等）
- [ ] 添加语言切换组件
- [ ] 配置多语言路由
- [ ] 设置默认语言和回退机制
- [ ] API 文档保持英文（从 TSDoc 自动生成）

### 阶段三：部署和优化 (2-3周)

#### 3.0 DX 优化
- [ ] 创建 examples/ 目录（独立于 docs/playground）
- [ ] 配置 vitest --watch + esno 快速验证
- [ ] 添加本地调试和示例运行环境
- [ ] 配置包导出策略优化

#### 3.1 CI/CD 流程优化
- [ ] 配置 GitHub Actions
- [ ] 分步骤运行：lint、test、build、docs-build、publint
- [ ] PR 必须过 lint + test + publint 才能合并
- [ ] 区分 check（lint、test、build、publint）和 release（changesets publish）
- [ ] 设置自动部署流程
- [ ] 配置 PR 自动部署 VitePress 文档预览
- [ ] 配置自定义域名（可选）
- [ ] 测试部署流程

#### CI/CD Workflow 结构
```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    strategy:
      matrix:
        node: [18, 20, 22]
        os: [ubuntu-latest, windows-latest, macos-latest]

  build:
    needs: test

  docs:
    needs: build
    if: github.ref == 'refs/heads/main'
```

#### 3.2 性能优化
- [ ] 优化构建配置
- [ ] 
- [ ] 优化加载性能
- [ ] 配置缓存策略

#### 3.3 用户体验优化
- [ ] 完善文档导航
- [ ] 优化 Playground 体验
- [ ] 添加搜索功能
- [ ] 配置 PWA（可选）

#### 3.4 发布准备
- [ ] 完善 README
- [ ] 编写迁移指南
- [ ] 准备发布说明
- [ ] 测试完整流程

## 具体功能需求

### 源码和测试链接系统
- [ ] 在函数文档中添加源码链接
- [ ] 在函数文档中添加测试链接
- [ ] 支持版本切换（跳转到对应 tag）
- [ ] 自动检测当前版本
- [ ] 支持 Playground 跳转

### Playground 功能
- [ ] 导航栏添加 Playground 入口
- [ ] 集成 StackBlitz WebContainer
- [ ] 支持从具体函数跳转
- [ ] 携带函数示例代码
- [ ] 支持版本参数传递

### 文档功能
- [ ] 自动生成 API 文档
- [ ] 支持代码高亮
- [ ] 支持复制代码功能
- [ ] 响应式设计
- [ ] 多语言支持（中英文）
- [ ] 语言切换功能

### 构建和发布
- [ ] 支持按需导入
- [ ] 自动生成类型定义
- [ ] 支持多环境构建
- [ ] 自动化版本发布
- [ ] 自动生成 changelog

## 技术难点和解决方案

### 1. 项目架构设计
- **问题**: 项目结构复杂度和维护成本
- **解决**: 采用单包结构，减少复杂度，后续需要时可拆分为 monorepo

### 2. 构建工具选择
- **问题**: tsdown 作为新工具的稳定性和兼容性
- **解决**: 充分测试，承担技术风险

### 2.1 包发布配置验证
- **问题**: 复杂的 exports 字段和多格式输出容易配置错误
- **解决**: 集成 publint 自动验证
  - 验证 exports 字段配置正确性
  - 确保 sideEffects 配置支持 Tree Shaking
  - 验证多格式输出文件存在性和有效性
  - 集成到 CI/CD 流程和发布前检查

### 3. TypeScript 类型系统
- **问题**: 从 JavaScript 到 TypeScript 的类型定义
- **解决**: 分阶段实施，先基础类型后高级类型

### 4. Playground 集成
- **问题**: VitePress 与 StackBlitz WebContainer 的集成
- **解决**: 使用 @stackblitz/sdk 在 VitePress 中嵌入 WebContainer
  - 创建 Vue 组件包装 WebContainer
  - 支持 Node.js 和浏览器环境切换
  - 预配置函数示例和测试用例
  - 支持实时代码执行和结果展示

### 5. 版本管理和链接生成
- **问题**: 需要根据当前版本生成正确的源码和测试链接
- **解决**: 使用 URL 模式 `https://github.com/user/repo/blob/tag/path/file` 直接生成链接

### 6. 文档自动化生成
- **问题**: 新增函数时需要手动创建多个文档文件
- **解决**: 使用 JSDoc/TSDoc 注释驱动 + TypeDoc 自动生成
  - 在函数文件中写 TSDoc 注释
  - 使用 TypeDoc 自动生成 API 文档到 `docs/api/`
  - 自动创建 Playground 页面模板
  - 自动更新导航配置

#### 文档生成流程
1. **新增函数** → 在 `packages/core/src/` 中创建函数 + TSDoc 注释
2. **运行脚本** → `pnpm run generate-docs`
3. **自动生成** → TypeDoc 自动生成 API 文档到 `docs/api/`
4. **手动完善** → 补充 Playground 示例和翻译内容
5. **提交发布** → 文档随代码一起发布

#### TSDoc 注释示例
```typescript
/**
 * Deep clone an object
 *
 * @category Object
 * @since 1.0.0
 *
 * @example Basic usage
 * ```ts
 * const obj = { a: { b: 1 } }
 * const copied = deepCopy(obj)
 * copied.a.b = 2
 * console.log(obj.a.b) // 1
 * ```
 *
 * @example With arrays
 * ```ts
 * const arr = [{ id: 1 }, { id: 2 }]
 * const copied = deepCopy(arr)
 * ```
 */
export function deepCopy<T>(obj: T): T {
  // Implementation code...
}
```

#### TSDoc 优化优势

**1. @category 标签**
- TypeDoc 可以按分类自动组织文档结构
- 生成更清晰的导航和侧边栏

**2. 多个 @example**
- 展示不同使用场景
- TypeDoc 会为每个示例生成独立的代码块
- Playground 可以选择不同示例

**3. 示例质量**
- 证明深拷贝有效性的示例
- 更好地说明函数的核心价值
- 用户能立即理解为什么需要这个函数

**4. 文档生成结构**
```
docs/api/
├── object/
│   ├── index.md          # Object 分类首页
│   ├── deepCopy.md       # 函数详情页
│   └── merge.md
├── array/
│   ├── index.md          # Array 分类首页
│   └── flatten.md
└── index.md              # API 总览
```

**5. VitePress 侧边栏自动生成**
```typescript
// 基于 @category 自动生成
sidebar: {
  '/api/': [
    {
      text: 'Object',
      items: [
        { text: 'deepCopy', link: '/api/object/deepCopy' },
        { text: 'merge', link: '/api/object/merge' }
      ]
    },
    {
      text: 'Array',
      items: [
        { text: 'flatten', link: '/api/array/flatten' }
      ]
    }
  ]
}
```

**6. Playground 集成优势**
```typescript
// 可以为每个示例生成独立的 Playground
const examples = {
  'basic-usage': `
const obj = { a: { b: 1 } }
const copied = deepCopy(obj)
copied.a.b = 2
console.log(obj.a.b) // 1
  `,
  'with-arrays': `
const arr = [{ id: 1 }, { id: 2 }]
const copied = deepCopy(arr)
  `
}
```

### 7. 文档国际化
- **问题**: 在 JSDoc/TSDoc 注释驱动的情况下如何实现国际化
- **解决**: 提供多种方案选择
  - **方案一**: 源码中写中文注释，生成中文文档，英文文档手动翻译
  - **方案二**: 源码中写英文注释，生成英文文档，中文文档手动翻译
  - **方案三**: 源码中写双语注释，自定义 TypeDoc 插件解析多语言
  - **方案四**: 使用 VitePress 国际化，API 文档保持单语言，其他内容多语言

#### 推荐方案：方案四（混合模式）
- **API 文档**: 使用英文 TSDoc 注释，生成英文 API 文档
- **示例代码**: 用英文注释，中文在文档中翻译
- **其他文档**: 使用 VitePress 国际化，支持中英文切换
- **优势**: 更利于国际化，减少维护成本，优先保证英文文档质量
- **路由配置**: 使用动态路由，无需手动添加每个函数的路由

#### 国际化实现示例

**目录结构：**
```
docs/
├── .vitepress/
│   └── config.ts
├── api/                    # API 文档（英文，自动生成）
│   ├── array/
│   └── object/
├── guide/                  # 指南文档（多语言）
│   ├── index.md
│   └── getting-started.md
├── playground/             # Playground（多语言）
│   ├── index.md
│   └── examples/
├── locales/
│   ├── zh/
│   │   ├── guide/
│   │   └── playground/
│   └── en/
│       ├── guide/
│       └── playground/
└── index.md
```

**VitePress 配置：**
```typescript
// .vitepress/config.ts
export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'JavaScript Utils',
      description: 'Modern JavaScript utility library'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'JavaScript 工具库',
      description: '现代化的 JavaScript 工具函数库',
      link: '/zh/'
    }
  },
  themeConfig: {
    locales: {
      root: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'API', link: '/api/' },
          { text: 'Playground', link: '/playground/' }
        ],
        sidebar: {
          '/api/': [
            {
              text: 'API Reference',
              items: [
                { text: 'Array', link: '/api/array/' },
                { text: 'Object', link: '/api/object/' },
                { text: 'Function', link: '/api/function/' },
                { text: 'String', link: '/api/string/' },
                { text: 'Validation', link: '/api/validation/' }
              ]
            }
          ]
        }
      },
      zh: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/' },
          { text: 'API', link: '/zh/api/' },
          { text: '演示', link: '/zh/playground/' }
        ],
        sidebar: {
          '/zh/api/': [
            {
              text: 'API 参考',
              items: [
                { text: '数组', link: '/zh/api/array/' },
                { text: '对象', link: '/zh/api/object/' },
                { text: '函数', link: '/zh/api/function/' },
                { text: '字符串', link: '/zh/api/string/' },
                { text: '验证', link: '/zh/api/validation/' }
              ]
            }
          ]
        }
      }
    }
  }
})
```

**路由配置说明：**
- **导航栏**: 只需要配置主要的导航链接，不需要为每个函数单独配置
- **侧边栏**: 按分类配置（Array、Object、Function 等），TypeDoc 会自动生成具体的函数页面
- **新增函数**: 只需要在源码中写 TSDoc 注释，TypeDoc 会自动生成对应的页面和路由
- **维护简单**: 不需要手动添加每个函数的路由配置

## 预期成果

### 功能特性
- ✅ 完整的 TypeScript 支持
- ✅ 在线 Playground 体验
- ✅ Tree Shaking
- ✅ 自动化文档生成
- ✅ 完善的测试覆盖
- ✅ 现代化构建流程
- ✅ 免费文档部署

### 开发体验
- ✅ 统一的代码规范
- ✅ 自动化检查流程
- ✅ 交互式提交工具
- ✅ 版本管理自动化
- ✅ 团队协作友好

### 用户体验
- ✅ 清晰的 API 文档
- ✅ 在线代码演示
- ✅ 源码和测试链接
- ✅ 版本切换功能
- ✅ 响应式设计

## 时间规划

- **第1-3周**: 基础架构搭建
- **第4-7周**: 功能增强开发
- **第8-10周**: 部署和优化
- **第11周**: 测试和发布

## 风险评估

### 高风险
- 无（单包结构降低了架构复杂度）

### 中风险
- VitePress 自定义主题开发
- @stackblitz/sdk 集成和配置（Node.js API 兼容性限制）
- TypeScript 类型系统设计
- 文档国际化维护
- 文档生成自动化程度过高（示例质量风险）
- tsdown 稳定性（新工具，生态不成熟）

### 低风险
- 基础工具配置
- 文档结构搭建
- GitHub Pages 部署

## 成功标准

1. **功能完整性**: 所有现有功能正常工作
2. **性能提升**: 构建速度提升 50% 以上
3. **包体积**: 支持按需导入，减少 30% 以上
4. **开发体验**: 完整的开发工具链
5. **用户体验**: 清晰的文档和在线演示
6. **自动化**: 90% 以上的流程自动化

## 补充优化方案

### 1. 类型质量保证
- **双重校验**: `tsc --noEmit` + `tsc --project tsconfig.build.json`
- **基础配置共享**: 提供 `tsconfig.base.json`，子包继承
- **确保开发体验和构建产物的类型一致**

### 2. 打包产物优化
- **多格式输出**: CJS + ESM + DTS，同时支持 tree-shaking
- **导出条件映射**: 在 package.json 的 exports 字段精确控制
- **确保 Node.js、Bundler、TS 三者体验一致**
- **publint 验证**: 集成 publint 验证包发布配置的正确性

#### publint 配置示例
```json
// package.json
{
  "name": "@@tofrankie/utils/core",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./package.json": "./package.json"
  },
  "files": ["dist"],
  "scripts": {
    "publint": "publint"
  }
}
```

**publint 验证内容：**
- exports 字段配置正确性
- main/module/types 字段一致性
- files 字段包含必要文件
- 包名和版本格式
- 依赖关系检查
- sideEffects 配置合理性（Tree Shaking 关键）
- 函数级 Tree Shaking 验证
- 多格式输出文件存在性和有效性

#### publint 在项目中的具体价值

**1. 阶段一：构建系统配置验证**
```bash
# 在配置完 package.json exports 字段后验证
pnpm publint
```
验证项目：
- ✅ exports 字段配置是否正确
- ✅ main/module/types 字段是否指向正确文件
- ✅ sideEffects 配置是否合理（对 Tree Shaking 很重要）

**2. 阶段三：CI/CD 流程集成**
```yaml
# .github/workflows/ci.yml
- name: Build
  run: pnpm build

- name: Validate package
  run: pnpm publint # 确保构建产物配置正确

- name: Test package
  run: pnpm pack --dry-run
```

**3. 发布前检查**
```json
{
  "scripts": {
    "build": "tsdown build",
    "validate": "publint",
    "prepublishOnly": "pnpm build && pnpm validate"
  }
}
```

**4. 函数级 Tree Shaking 验证**
- ✓ "sideEffects": false allows tree-shaking
- ✓ "exports" field properly configured for ESM/CJS
- ✓ TypeScript types match JavaScript exports

**5. 多格式输出验证**
- ✓ "./dist/index.mjs" exists and is valid ESM
- ✓ "./dist/index.cjs" exists and is valid CJS
- ✓ "./dist/index.d.ts" exists and matches exports

### 3. 测试覆盖面
- **跨环境测试**: 既要在 Node.js 下跑，也要在浏览器环境下跑 (Vitest + jsdom)
- **性能基准**: 集成 tinybench 或 benchmark.js

### 4. 文档体验
- **自动化 API 文档**: 用 TypeDoc 自动生成 API docs，和 VitePress 融合
- **Playground 集成**: 使用 stackblitz sdk 内嵌

### 5. 自动化流程
- **Release**: 用 changesets 管理版本和 changelog
- **CI/CD 增强**: 分步骤跑：lint、test、build、docs-build、publint
- **多环境测试**: Node.js 18/20/22 + Ubuntu/Windows/macOS
- **PR 必须过 lint + test + publint 才能合并**
- **Preview Docs**: PR 自动部署 VitePress 文档到 vercel/Netlify 预览

### 6. DX（开发体验）
- **别名管理**: 用 tsconfig.json 的 paths + tsdown 配合，避免相对路径地狱
- **沙箱/调试**: 单独的 examples/ 目录，方便本地调试 API
- **快速验证**: vitest --watch + esno 快速验证代码

## 后续规划

### 短期 (1-3个月)
- 收集用户反馈
- 优化性能和体验
- 完善文档和示例
- 修复发现的问题

### 中期 (3-6个月)
- 支持更多构建目标
- 完善国际化内容（翻译质量优化）
- 集成更多开发工具
- 社区贡献指南
- 多语言社区建设
- 考虑拆分为 monorepo（如果需要多个包）

### 长期 (6-12个月)
- 插件系统设计
- 企业级功能
- 性能监控
- 生态系统建设
- 新增工具函数（根据需求）
