---
category: Components
title: 站点上下文 webSiteContext
toc: content
order: 10
group:
  title: 网站群
---

## 何时使用

> 假如你想通过 js 在站点中插入静态资源，只需要在你的路径前加入`websiteContext.path`即可。\
> 即使站点发生变化，也不用再次修改您的代码。

### 示例

### 浏览器环境

```js
const context = websiteContext();
console.log(context);
//{siteId: '2', columnId: '1', path: '/_upload/tpl/0b/59/2905/template2905/'}
```
