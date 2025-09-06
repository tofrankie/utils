# 对象工具

对象相关的工具函数。

## deepCopy

深拷贝对象。

```typescript
import { deepCopy } from '@tofrankie/utils'

const obj = { a: 1, b: { c: 2 } }
const copied = deepCopy(obj)
copied.b.c = 3
console.log(obj.b.c) // 2 (原对象未改变)
```

## pick

从对象中选取指定的属性。

```typescript
import { pick } from '@tofrankie/utils'

const obj = { a: 1, b: 2, c: 3 }
pick(obj, ['a', 'c']) // { a: 1, c: 3 }
```

## omit

从对象中排除指定的属性。

```typescript
import { omit } from '@tofrankie/utils'

const obj = { a: 1, b: 2, c: 3 }
omit(obj, ['b']) // { a: 1, c: 3 }
```
