# 字符串工具

字符串相关的工具函数。

## convert2pinyin

将中文字符转换为拼音。

```typescript
import { convert2pinyin } from '@tofrankie/utils'

convert2pinyin('你好世界') // 'ni hao shi jie'
convert2pinyin('Hello 世界') // 'Hello shi jie'
```

## capitalize

将字符串首字母大写。

```typescript
import { capitalize } from '@tofrankie/utils'

capitalize('hello') // 'Hello'
capitalize('HELLO') // 'HELLO'
capitalize('') // ''
```

## camelCase

将字符串转换为驼峰命名。

```typescript
import { camelCase } from '@tofrankie/utils'

camelCase('hello-world') // 'helloWorld'
camelCase('hello_world') // 'helloWorld'
camelCase('hello world') // 'helloWorld'
```
