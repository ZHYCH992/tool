---
category: Components
title: 浏览器缓存 sCooike
toc: content
order: 1
group:
  title: Tools
  order: 2
---

## 何时使用

使用 sCooike 来缓存变量或某些参数，cookie 只适合存储小型数据(一般大小限制在 4KB 以内)，大型的 json 数据请使用 [sLocalstorage](/components/s-local-storage) 本地存储

### 示例

<code src='./demo'></code>

### 浏览器环境

```js
sCookie.set('key', 'value', {
  type: 'd',
  expires: 7,
  path: '/',
  domian: 'site.com',
  secure: ture,
});

//设置
sCookie.set('key', 'value', { expires: 7 });

//读取
sCookie.get('key');

//删除
sCookie.set('key', null);
sCookie.set('key', '', { expires: -1 }); //设置过去时间也等于删除
sCookie.remove('key');
sCookie.remove('key', { path: '/' }); //使用remove方法
```

### API

| 名称    | 类型    | 默认值 | 说明                                                                                                    |
| ------- | ------- | ------ | ------------------------------------------------------------------------------------------------------- |
| key     | string  | -      | 设置 cookie 名称                                                                                        |
| value   | string  | -      | 设置 cookie 的值                                                                                        |
| type    | string  | day    | 设置 cookie 的过期时间单位，可选择 second 或 s，minite 或 m，hour 或 h，day 或 d，默认 day              |
| expires | number  | 365    | 设置 cookie 的有效期，默认为 365 天                                                                     |
| path    | string  | /      | 设置 cookie 的路径属性                                                                                  |
| domain  | string  | -      | 设置 cookie 的域名属性                                                                                  |
| secure  | boolean | false  | 设置 cookie 传输方式，默认 false，如果设置为 true，那么该 Cookie 的传输会要求一个安全协议，例如 HTTPS。 |
