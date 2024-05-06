---
category: Components
title: URL参数 queryParams
toc: content # 在页面右侧展示锚点链接
order: 3
group:
  title: Utils
---

## 何时使用

> 用于浏览器 URL 参数的增、删、改、查；

---

### 代码演示

### 浏览器环境

```js
//url: http://localhost:3000/?a=1&b=2&c=3&d=4

queryParams.get('a'); //1

queryParams.set('b', 5); //url: http://localhost:3000/?a=1&b=5&c=3&d=4

queryParams.delete('c'); //url: http://localhost:3000/?a=1&b=5&d=4

queryParams.add('c', 6); //url: http://localhost:3000/?a=1&b=5&d=4&c=6
```

### API

#### add

| 名称  | 类型   | 默认值 | 说明     |
| ----- | ------ | ------ | -------- |
| key   | string | -      | 参数名称 |
| value | string | -      | 参数值   |

#### delete

| 名称 | 类型   | 默认值 | 说明     |
| ---- | ------ | ------ | -------- |
| key  | string | -      | 参数名称 |

#### set

| 名称  | 类型   | 默认值 | 说明     |
| ----- | ------ | ------ | -------- |
| key   | string | -      | 参数名称 |
| value | string | -      | 参数值   |

#### get

| 名称 | 类型   | 默认值 | 说明     |
| ---- | ------ | ------ | -------- |
| key  | string | -      | 参数名称 |
