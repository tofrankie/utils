# 函数工具

函数相关的实用工具函数。

## 函数列表

### debounce

延迟函数执行直到等待时间结束。

```typescript
import { debounce } from '@tofrankie/utils'

const debouncedFn = debounce(() => {
  console.log('执行')
}, 300)
```

**特性：**
- 防抖功能，避免频繁调用
- 支持立即执行选项
- 支持取消功能

[查看详细文档 →](/api/functions/debounce)

### throttle

限制函数执行频率。

```typescript
import { throttle } from '@tofrankie/utils'

const throttledFn = throttle(() => {
  console.log('执行')
}, 300)
```

**特性：**
- 节流功能，控制执行频率
- 支持立即执行选项
- 支持取消功能

[查看详细文档 →](/api/functions/throttle)

### delay

延迟函数执行。

```typescript
import { delay } from '@tofrankie/utils'

await delay(1000) // 延迟 1 秒
console.log('1 秒后执行')
```

**特性：**
- 简单的延迟执行
- 返回 Promise
- 支持取消功能

[查看详细文档 →](/api/functions/delay)

## 使用场景

### 防抖 (debounce)
- 搜索输入框
- 窗口大小调整
- 按钮点击防重复

### 节流 (throttle)
- 滚动事件处理
- 鼠标移动事件
- API 请求频率控制

### 延迟 (delay)
- 动画延迟
- 异步操作间隔
- 测试中的等待

## 性能优化

所有函数都经过优化，具有最小的打包体积：

- **debounce**: ~0.5KB
- **throttle**: ~0.5KB  
- **delay**: ~0.3KB

## 类型安全

完全支持 TypeScript，提供完整的类型定义和智能提示。
