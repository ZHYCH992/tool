---
category: Components
title: 深拷贝 sClone
toc: content
order: 5
group:
  title: Utils
---

## 何时使用

> 形成一个全新的独立对象，修改深拷贝后的对象不会影响原始对象。
> 

### 示例

### 浏览器环境

```js
sClone(object);
```

### API

| 名称   | 类型 | 默认值 | 说明         |
| ------ | ---- | ------ | ------------ |
| object | any  | -      | 被拷贝的对象 |

## 拓展

> 在 JavaScript 中，深拷贝和浅拷贝是用于复制对象或数组时的两种不同机制，它们的主要区别在于如何处理对象中的引用类型。\
> 深拷贝会递归地复制所有层级的对象和数组，直到所有的引用类型都被完全复制，形成一个全新的独立对象。这意味着修改深拷贝后的新对象不会影响到原对象。\
> 浅拷贝只会复制对象的第一层属性。对于基本数据类型（如字符串、数字、布尔值、null、undefined）的属性，它会复制值；但对于引用类型（如对象、数组）的属性，它只会复制引用，这意味着新对象的引用类型属性和原对象的相应属性指向同一个内存地>址。因此，如果修改了新对象中的引用类型属性，原对象也会受到影响。
