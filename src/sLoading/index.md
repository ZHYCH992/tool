---
category: Components
title: 加载动画 sLoading
toc: content
order: 1
group:
  title: Element
  order: 1
---

## 何时使用

### 示例

<code src="./demo/index.jsx"></code>

### 浏览器环境

```js
sLoading.show({ element: document.body });
//element下不存在loading时，在element插入Loading，存在时直接显示Loading
sLoading.hiden({ element: document.body });
//隐藏element下的Loading
sLoading.auto({ element: document.body, time: 3000 });
//三秒之后关闭Loading
```

### API

#### sLoading.show({ element,animation })

| 名称      | 类型     | 默认值        | 说明                                                          |
| --------- | -------- | ------------- | ------------------------------------------------------------- |
| element   | `Object` | document.body | 接受一个 dom 元素，会在此元素下插入 Loading                   |
| animation | `String` | 'flippers'    | 动画类型名称，目前支持的动画有['feeder','flippers','sliding'] |

#### sLoading.hiden({ element })

| 名称    | 类型     | 默认值        | 说明                                        |
| ------- | -------- | ------------- | ------------------------------------------- |
| element | `Object` | document.body | 接受一个 dom 元素，会隐藏此元素下的 Loading |

#### sLoading.auto({ element,animation,time })

| 名称      | 类型     | 默认值        | 说明                                                          |
| --------- | -------- | ------------- | ------------------------------------------------------------- |
| element   | `Object` | document.body | 接受一个 dom 元素，会在此元素下插入 Loading                   |
| animation | `String` | 'flippers'    | 动画类型名称，目前支持的动画有['feeder','flippers','sliding'] |
| time      | `Number` | 1500          | 动画自动结束时间，单位为毫秒                                  |

### CSS 变量

| 名称       | 说明           |
| ---------- | -------------- |
| background | Loading 背景色 |
| color      | 动画主色       |
