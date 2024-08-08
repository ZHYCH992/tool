---
category: Components
title: 编码 code
toc: content
order: 4
group:
  title: Utils
---

## 何时使用

> 提供 base64 格式的编码、解码（支持中文字符）\
> 提供组合式随机数（数字、字母、符号）

### 示例

### 浏览器环境

```js
const { base64, random } = code;

base64.encode(
  JSON.stringify([
    { name: '张三' },
    { name: `李四!@#$%^&*()_+-=[]{}|;:\'",./<>?` },
    { name: '王5' },
  ]),
);
//'W3sibmFtZSI6IuW8oOS4iSJ9LHsibmFtZSI6IuadjuWbmyFAIyQlXiYqKClfKy09W117fXw7OidcIiwuLzw+PyJ9LHsibmFtZSI6IueOizUifV0='

base64.decode(
  'W3sibmFtZSI6IuW8oOS4iSJ9LHsibmFtZSI6IuadjuWbmyFAIyQlXiYqKClfKy09W117fXw7OidcIiwuLzw+PyJ9LHsibmFtZSI6IueOizUifV0=',
);
//`[{"name":"张三"},{"name":"李四!@#$%^&*()_+-=[]{}|;:'\\",./<>?"},{"name":"王5"}]`

random({ length: 8, mode: 'all' });
//'J*}eG80k'

random({ length: 6, mode: 'all' });
```

### API

#### code.base64.encode(str)

| 名称 | 类型     | 默认值 | 说明                             |
| ---- | -------- | ------ | -------------------------------- |
| str  | `string` | -      | 接受一个字符串，返回 base64 编码 |

#### code.base64.decode(str)

| 名称 | 类型     | 默认值 | 说明                             |
| ---- | -------- | ------ | -------------------------------- |
| str  | `string` | -      | 接受一个字符串，返回 base64 解码 |

#### code.random({length,mode})

| 名称   | 类型     | 默认值 | 说明                                                                                                                                           |
| ------ | -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| length | `number` | 10     | 传入你想要的随机数长度，`mode`为 'numeric' 时`length>=1`,为 'alpha' 时`length>=1`,为 'alphanumeric' 时`length>=3`,`mode`为 'all' 时`length>=4` |
| mode   | `srting` | all    | 只支持传入'numeric','alpha','alphanumeric','all' 分别为数字，小写字母，大、小写字母+数字，大、小写字母+数字+符号组合                           |
