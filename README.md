> [!TIP]
> 仅供学习，实际项目建议使用 `lodash`、`licia` 等工具库。

相关文件存放于 `src` 目录。

#### 1. convert2pinyin 中文转拼音

> 详细思路请看[文章](https://github.com/tofrankie/blog/issues/189)。

> 或许你需要的是 [pinyin-pro](https://github.com/zh-lx/pinyin-pro) 或 [pinyin](https://github.com/hotoo/pinyin)。

#### 2. check-id-number 身份证号码校验

> 支持 15 位和 18 位的身份证号码，详细思路请看[文章](https://github.com/tofrankie/blog/issues/216)。

#### 3. get-subdomain 获取当前 URL 的二级域名

> 获取可应用于 cookie domain 参数的二级域名。

#### 4. is-array 数组判断

> 判断一个值是否为数组，借助 `typeof`、`instanceof` 或原型来判断是太严谨的，详细思路请看[文章](https://github.com/tofrankie/blog/issues/230)。

#### 5. get-class 值类型判断

> 判断一个值的类型，可区分“对象”（包括基于 Object 派生的其他类型，如 Object、Array、Function、Date、RegExp 等），详细思路请看[文章](https://github.com/tofrankie/blog/issues/239)。

#### 6. deep-copy 深拷贝

> 面向学习，详细思路请看[文章](https://github.com/tofrankie/blog/issues/246)。

#### 7. debounce 函数防抖

> 详细思路请看[文章](https://github.com/tofrankie/blog/issues/248)。

#### 8. throttle 函数节流

> 详细思路请看[文章](https://github.com/tofrankie/blog/issues/248)。

#### 9. query-url-value 获取 URL Query 参数

详细思路请看[文章](https://github.com/tofrankie/blog/issues/262)。

```text
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├─────────────┬─────────────────────┬────────────────────────┬──────────┬────────────────┬───────┤
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├──────────┬──┼─────────────────────┼────────────────────────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
│          │  │          │          ├─────────────────┬──────│          │                │       │
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          │                 │      │          │                │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h    ?query=string   #hash "
│          │  │          │          │                 │      │          │                │       │
└──────────┴──┴──────────┴──────────┴─────────────────┴──────┴──────────┴────────────────┴───────┘
(All spaces in the "" line should be ignored. They are purely for formatting.)
```

#### 10. cookie

> 对 Cookie 的增删改查，可以更简便地操作。
