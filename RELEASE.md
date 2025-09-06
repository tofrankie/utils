# 发布指南

本文档详细说明了 `@tofrankie/utils` 项目的发布流程，包括预发布和正式发布的完整步骤。

## 📋 发布类型

### 预发布版本 (Pre-release)

预发布版本用于内部测试和功能验证，不会影响正式版本的用户。

#### 版本号格式
- `0.0.1-alpha` - Alpha 版本（内部测试）
- `0.0.1-beta` - Beta 版本（公开测试）
- `0.0.1-rc.1` - Release Candidate（候选发布版本）

#### 预发布流程

1. **更新版本号**
   ```bash
   # 创建 alpha 版本
   pnpm version 0.0.1-alpha

   # 创建 beta 版本
   pnpm version 0.0.1-beta

   # 创建候选版本
   pnpm version 0.0.1-rc.1
   ```

2. **提交版本更新**
   ```bash
   git add package.json
   git commit -m "chore: bump version to 0.0.1-alpha"
   git push origin develop
   ```

3. **创建发布标签**
   ```bash
   git tag -a v0.0.1-alpha -m "Release v0.0.1-alpha - Internal testing"
   git push origin v0.0.1-alpha
   ```

4. **发布到 NPM**
   ```bash
   # 使用便捷发布命令（推荐）
   pnpm publish:alpha    # 发布 alpha 版本
   pnpm publish:beta     # 发布 beta 版本
   pnpm publish:rc       # 发布候选版本

   # 或使用传统方式
   npm publish --tag alpha
   npm publish --tag beta
   npm publish --tag rc
   ```

5. **验证发布**
   ```bash
   # 安装测试
   npm install @tofrankie/utils@alpha
   npm install @tofrankie/utils@beta
   npm install @tofrankie/utils@rc
   ```

### 正式发布版本 (Release)

正式发布版本是稳定的生产版本，面向所有用户。

#### 版本号格式
- `0.1.0` - 第一个功能版本
- `0.2.0` - 新功能版本
- `1.0.0` - 正式稳定版本

#### 正式发布流程

1. **预发布检查**
   ```bash
   # 运行所有检查
   pnpm validate

   # 构建项目
   pnpm build

   # 运行测试
   pnpm test:run

   # 生成覆盖率报告
   pnpm test:coverage
   ```

2. **更新版本号**
   ```bash
   # 补丁版本（bug 修复）
   pnpm version patch

   # 小版本（新功能）
   pnpm version minor

   # 大版本（破坏性更改）
   pnpm version major
   ```

3. **更新文档**
   - 更新 `CHANGELOG.md`
   - 更新 `README.md` 中的版本信息
   - 确认文档站点的版本信息

4. **提交发布**
   ```bash
   git add .
   git commit -m "chore: release v0.1.0"
   git push origin develop
   ```

5. **创建发布标签**
   ```bash
   git tag -a v0.1.0 -m "Release v0.1.0 - First stable release"
   git push origin v0.1.0
   ```

6. **发布到 NPM**
   ```bash
   # 使用便捷发布命令（推荐）
   pnpm publish:latest   # 发布正式版本

   # 或使用传统方式
   npm publish --tag latest
   ```

7. **创建 GitHub Release**
   - 访问 GitHub 仓库的 Releases 页面
   - 点击 "Create a new release"
   - 选择标签 `v0.1.0`
   - 填写发布说明
   - 上传构建产物（可选）

## 🔄 版本管理策略

### 语义化版本控制 (SemVer)

遵循 [语义化版本控制](https://semver.org/lang/zh-CN/) 规范：

- **MAJOR** (主版本号): 不兼容的 API 修改
- **MINOR** (次版本号): 向下兼容的功能性新增
- **PATCH** (修订号): 向下兼容的问题修正

### 版本演进路径

```
0.0.1-alpha → 0.0.1-beta → 0.0.1-rc.1 → 0.1.0 → 0.1.1 → 0.2.0 → 1.0.0
```

### 分支策略

- **`develop`**: 开发分支，用于日常开发
- **`main`**: 主分支，用于正式发布
- **`release/*`**: 发布分支，用于准备发布

## 🚀 便捷发布命令

项目提供了便捷的发布命令，自动执行所有必要的检查：

### 发布检查命令

```bash
# 执行完整的发布前检查
pnpm publish:check
```

**检查内容**：
- ✅ **代码质量检查**: ESLint 检查并自动修复
- ✅ **类型检查**: TypeScript 类型验证
- ✅ **代码格式化**: Prettier 格式化
- ✅ **测试运行**: 所有测试用例执行
- ✅ **项目构建**: 生成生产构建产物
- ✅ **包体积分析**: 分析包大小和 Tree Shaking 效果

### 一键发布命令

```bash
# 预发布版本
pnpm publish:alpha    # 发布到 alpha 标签
pnpm publish:beta     # 发布到 beta 标签
pnpm publish:rc       # 发布到 rc 标签

# 正式发布版本
pnpm publish:latest   # 发布到 latest 标签（默认）
```

**命令特点**：
- 🔄 **自动检查**: 发布前自动执行 `publish:check`
- 🛡️ **安全检查**: 确保代码质量和测试通过
- 📦 **自动构建**: 生成最新的构建产物
- 🏷️ **标签管理**: 自动使用正确的 NPM 标签

### 使用示例

```bash
# 1. 发布 alpha 版本进行内部测试
pnpm publish:alpha

# 2. 发布 beta 版本进行公开测试
pnpm publish:beta

# 3. 发布正式版本
pnpm publish:latest
```

## 📦 NPM 发布配置

### 发布标签 (Tags)

- **`latest`**: 默认标签，用于正式版本
- **`alpha`**: Alpha 版本标签
- **`beta`**: Beta 版本标签
- **`rc`**: 候选版本标签

### 发布命令

```bash
# 发布到不同标签
npm publish --tag latest    # 正式版本
npm publish --tag alpha     # Alpha 版本
npm publish --tag beta      # Beta 版本
npm publish --tag rc        # 候选版本
```

### 用户安装

```bash
# 安装正式版本
npm install @tofrankie/utils

# 安装特定标签版本
npm install @tofrankie/utils@alpha
npm install @tofrankie/utils@beta
npm install @tofrankie/utils@rc

# 安装特定版本
npm install @tofrankie/utils@0.1.0
```

## 🚀 自动化发布

### GitHub Actions 发布

项目配置了自动发布工作流：

1. **触发条件**: 推送标签到 `main` 分支
2. **自动流程**:
   - 运行测试和构建
   - 发布到 NPM
   - 创建 GitHub Release
   - 部署文档站点

### 手动发布

如果需要手动发布：

```bash
# 1. 确保工作目录干净
git status

# 2. 运行预发布检查
pnpm validate

# 3. 更新版本号
pnpm version patch|minor|major

# 4. 提交更改
git add .
git commit -m "chore: release v$(node -p "require('./package.json').version")"
git push origin develop

# 5. 创建标签
git tag -a v$(node -p "require('./package.json').version") -m "Release v$(node -p "require('./package.json').version")"
git push origin v$(node -p "require('./package.json').version")

# 6. 发布到 NPM
npm publish
```

## 📝 发布检查清单

### 预发布检查

- [ ] 所有测试通过
- [ ] 代码质量检查通过
- [ ] 构建成功
- [ ] 文档更新
- [ ] 版本号正确
- [ ] 提交信息规范

### 正式发布检查

- [ ] 预发布检查完成
- [ ] CHANGELOG.md 更新
- [ ] README.md 版本信息更新
- [ ] 文档站点版本信息更新
- [ ] 向后兼容性检查
- [ ] 性能测试通过
- [ ] 安全扫描通过

## 🔧 故障排除

### 常见问题

1. **NPM 发布失败**
   ```bash
   # 检查登录状态
   npm whoami

   # 重新登录
   npm login
   ```

2. **版本号冲突**
   ```bash
   # 检查 NPM 上的版本
   npm view @tofrankie/utils versions --json

   # 使用不同的版本号
   pnpm version 0.1.1
   ```

3. **Git 标签冲突**
   ```bash
   # 删除本地标签
   git tag -d v0.1.0

   # 删除远程标签
   git push origin :refs/tags/v0.1.0
   ```

### 回滚发布

如果发布后发现问题：

```bash
# 1. 从 NPM 撤销发布（24小时内）
npm unpublish @tofrankie/utils@0.1.0

# 2. 删除 Git 标签
git tag -d v0.1.0
git push origin :refs/tags/v0.1.0

# 3. 回滚代码
git reset --hard HEAD~1
git push origin develop --force
```

## 📚 相关资源

- [语义化版本控制](https://semver.org/lang/zh-CN/)
- [NPM 发布指南](https://docs.npmjs.com/cli/v8/commands/npm-publish)
- [GitHub Releases](https://docs.github.com/en/repositories/releasing-projects-on-github)
- [Changesets](https://github.com/changesets/changesets)

---

**注意**: 发布前请确保所有检查都通过，并在测试环境中验证功能正常。
