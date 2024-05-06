---
category: Components
title: 浏览器缓存 sLocalStorage
toc: content
order: 2
group:
  title: Tools
  order: 2
---

## 何时使用

使用 sLocalStorage 来存储大型数据，小型数据缓存请使用 [sCookie](/components/s-cookie) 存储

注意：sLocalStorage 不能存储 DOM 节点和函数对象。

### 示例

<code src='./demo/index.jsx'></code>

### 浏览器环境

```js
//设置
sLocalStorage.set('key', 'value');

//设置过期时间定义到分
sLocalStorage.set('key', 'value', {
  type: 'm',
  expires: 60,
});

//读取
sLocalStorage.get('key');

//删除
sLocalStorage.set('key', '', { expires: -1 }); //设置过去时间也等于删除
sLocalStorage.remove('key'); //使用remove方法删除一个
sLocalStorage.remove(['key01', 'key02']); //使用remove方法批量删除
```

### API

| 名称    | 类型    | 默认值 | 说明                                                                                                                                                                                                    |
| ------- | ------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key     | string  | -      | 设置 localstorage 名称                                                                                                                                                                                  |
| value   | string  | -      | 设置 localstorage 的值                                                                                                                                                                                  |
| type    | string  | day    | 设置过期时间单位，可选择 second 或 s，minite 或 m，hour 或 h，day 或 d，默认 day                                                                                                                        |
| expires | number  | 0      | 设置 localstorage 的有效期。可以设置一个整数作为有效期（单位随 type），默认为 0 即永久存储；也可以设置一个日期对象为 LocalStorage 的过期日期，比如"2024-1-23"；如果为负数，那么此 LocalStorage 将被删除 |
| cover   | boolean | true   | 设置覆盖同名属性，true 完全覆盖，false 则扩展属性，默认 true                                                                                                                                            |
