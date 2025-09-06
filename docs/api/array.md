# 数组工具

数组相关的工具函数。

## isArray

检查值是否为数组。

```typescript
import { isArray } from '@tofrankie/utils'

isArray([1, 2, 3]) // true
isArray('hello') // false
isArray(null) // false
```

## chunk

将数组分割成指定大小的块。

```typescript
import { chunk } from '@tofrankie/utils'

chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5], 3) // [[1, 2, 3], [4, 5]]
```

## unique

数组去重。

```typescript
import { unique } from '@tofrankie/utils'

unique([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
unique(['a', 'b', 'a', 'c']) // ['a', 'b', 'c']
```
