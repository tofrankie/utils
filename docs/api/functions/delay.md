[**JavaScript Utils API v0.0.1**](../README.md)

***

[JavaScript Utils API](../globals.md) / delay

# Function: delay()

> **delay**\<`T`\>(`func`, `ms`): (...`args`) => `void`

Defined in: [delay.ts:21](https://github.com/toFrankie/utils/blob/6fe72e7788243f5d10d8a2f3a2f17524edf4c4ce/src/function/delay.ts#L21)

延迟执行函数

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### func

`T`

要延迟执行的函数

### ms

`number`

延迟时间（毫秒）

## Returns

延迟执行的函数

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
const delayedFn = delay(() => {
  console.log('延迟执行')
}, 1000)

// 1秒后执行
delayedFn()
```
