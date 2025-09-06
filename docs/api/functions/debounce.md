[**JavaScript Utils API v0.0.1**](../README.md)

***

[JavaScript Utils API](../globals.md) / debounce

# Function: debounce()

> **debounce**\<`T`\>(`func`, `wait`, `immediate`): (...`args`) => `void`

Defined in: [debounce.ts:24](https://github.com/toFrankie/utils/blob/6fe72e7788243f5d10d8a2f3a2f17524edf4c4ce/src/function/debounce.ts#L24)

防抖函数

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### func

`T`

要防抖的函数

### wait

`number`

延迟时间（毫秒）

### immediate

`boolean` = `false`

是否立即执行第一次调用

## Returns

防抖后的函数

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
const debouncedFn = debounce(() => {
  console.log('执行防抖函数')
}, 300)

// 快速调用多次，只会在最后一次调用后 300ms 执行
debouncedFn()
debouncedFn()
debouncedFn() // 只有这次会执行
```
