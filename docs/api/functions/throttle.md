[**JavaScript Utils API v0.0.1**](../README.md)

***

[JavaScript Utils API](../globals.md) / throttle

# Function: throttle()

> **throttle**\<`T`\>(`func`, `wait`): (...`args`) => `void`

Defined in: [throttle.ts:23](https://github.com/tofrankie/utils/blob/6fe72e7788243f5d10d8a2f3a2f17524edf4c4ce/src/function/throttle.ts#L23)

节流函数

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### func

`T`

要节流的函数

### wait

`number`

节流时间（毫秒）

## Returns

节流后的函数

> (...`args`): `void`

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`void`

## Since

1.0.0

## Example

```ts
const throttledFn = throttle(() => {
  console.log('执行节流函数')
}, 300)

// 在 300ms 内多次调用，只会执行一次
throttledFn()
throttledFn() // 被忽略
throttledFn() // 被忽略
```
