# 验证工具

数据验证相关的工具函数。

## checkIdNumber

验证中国身份证号码。

```typescript
import { checkIdNumber } from '@tofrankie/utils'

checkIdNumber('110101199003074515') // true
checkIdNumber('123456789012345678') // false
```

## isEmail

验证邮箱地址。

```typescript
import { isEmail } from '@tofrankie/utils'

isEmail('test@example.com') // true
isEmail('invalid-email') // false
```

## isPhone

验证手机号码。

```typescript
import { isPhone } from '@tofrankie/utils'

isPhone('13800138000') // true
isPhone('12345678901') // false
```
