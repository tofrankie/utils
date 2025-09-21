# Playground

在线体验 JavaScript Utils 工具函数，无需安装即可测试所有功能。

## 🚀 快速开始

点击下方按钮打开在线演示环境，支持实时编辑和运行：

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://stackblitz.com/github/tofrankie/utils" target="_blank" style="display: inline-block; padding: 12px 24px; background: #4F46E5; color: white; text-decoration: none; border-radius: 8px; font-weight: 500;">
    🎮 打开在线演示
  </a>
</div>

## 💻 本地演示

你也可以在本地运行演示：

```bash
# 克隆项目
git clone https://github.com/tofrankie/utils.git
cd utils

# 安装依赖
pnpm install

# 运行本地演示
pnpm dev:array    # 数组工具演示
pnpm dev:object   # 对象工具演示
pnpm dev:string   # 字符串工具演示
pnpm dev:validation # 验证工具演示
```

## 📚 函数分类

选择你想要体验的函数：

### 函数工具

- [防抖 (debounce)](#debounce) - 延迟执行函数，在指定时间内只执行最后一次
- [节流 (throttle)](#throttle) - 限制函数执行频率，在指定时间内最多执行一次
- [延迟 (delay)](#delay) - 延迟执行函数

### 数组工具

- [数组检查 (isArray)](#isarray) - 检查值是否为数组
- [数组分块 (chunk)](#chunk) - 将数组分割成指定大小的块
- [数组去重 (unique)](#unique) - 数组去重

### 对象工具

- [深拷贝 (deepCopy)](#deepcopy) - 深拷贝对象
- [属性选择 (pick)](#pick) - 从对象中选取指定的属性
- [属性排除 (omit)](#omit) - 从对象中排除指定的属性

### 字符串工具

- [拼音转换 (convert2pinyin)](#convert2pinyin) - 将中文字符转换为拼音
- [首字母大写 (capitalize)](#capitalize) - 将字符串首字母大写
- [驼峰命名 (camelCase)](#camelcase) - 将字符串转换为驼峰命名

### 验证工具

- [身份证验证 (checkIdNumber)](#checkidnumber) - 验证中国身份证号码
- [邮箱验证 (isEmail)](#isemail) - 验证邮箱地址
- [手机号验证 (isPhone)](#isphone) - 验证手机号码

## 在线编辑器

### 🎮 交互式 Playground

<PlaygroundVersion />

### 📚 版本说明

- **最新版本**: 包含所有最新功能和修复
- **稳定版本**: 经过充分测试的稳定版本  
- **测试版本**: 包含实验性功能的预览版本

## 本地开发

你也可以在本地运行示例：

```bash
# 运行 ESM 示例
pnpm dev:examples

# 或者直接运行
node examples/esm-demo.mjs
node examples/node-demo.cjs
```

## 示例代码

### 防抖示例

```javascript
import { debounce } from '@tofrankie/utils'

const debouncedFn = debounce(() => {
  console.log('防抖执行')
}, 300)

// 快速调用多次，只会在最后一次调用后 300ms 执行
debouncedFn()
debouncedFn()
debouncedFn() // 只有这次会执行
```

### 节流示例

```javascript
import { throttle } from '@tofrankie/utils'

const throttledFn = throttle(() => {
  console.log('节流执行')
}, 300)

// 在 300ms 内多次调用，只会执行一次
throttledFn()
throttledFn() // 被忽略
throttledFn() // 被忽略
```

### 延迟示例

```javascript
import { delay } from '@tofrankie/utils'

const delayedFn = delay(() => {
  console.log('延迟执行')
}, 1000)

// 1秒后执行
delayedFn()
```