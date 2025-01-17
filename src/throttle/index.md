---
category: Components
title: 节流 throttle
toc: content
order: 2
group:
  title: Utils
---

## 何时使用

> 从第一次触发开始计时，无论触发多少次，都在 `wait` 毫秒后执行最后一次。
> 1.  滚动事件（scroll）：当用户快速滚动页面时，滚动事件可能会非常频繁地触发。使用节流函数可以确保在一定时间间隔内（如每 200 毫秒）只执行一次滚动处理逻辑，从而避免过度渲染、计算或其他资源密集型操作。
> 2.  窗口尺寸变化（resize）：当用户调整浏览器窗口大小时，连续快速的操作会导致大量 resize 事件触发。节流处理可以确保在窗口尺寸稳定下来后才执行一次布局调整或重新计算，避免了不必要的计算和渲染开销。
> 3.  地图拖拽（drag 或 mousemove）：在地图或其他可拖动元素上，连续移动鼠标会产生大量事件。节流函数有助于控制拖拽过程中的实时反馈频率，如地图缩放级别更新、位置标记重绘等，确保性能的同时不影响用户体验。
> 4.  实时搜索建议：虽然防抖更常用于搜索联想，但在某些情况下，节流函数也可以用于实时搜索建议。比如，用户在输入框中键入时，每隔一定时间（如 300 毫秒）发送一次异步请求获取新的搜索建议，而不是对每次按键都发送请求，这样既能及时提供反馈，又不至于过度消耗服务器资源。
> 5.  高性能动画：在复杂的动画或游戏场景中，可能需要定期（如每秒 60 次）更新画面。节流函数可以确保帧更新逻辑按照预定的帧率执行，避免因过度频繁的计算导致动画卡顿或不流畅。

### 示例

### 浏览器环境

```js
throttle({ fn: () => console.log('test'), wait: delay });
```

### API

| 名称 | 类型     | 默认值 | 说明     |
| ---- | -------- | ------ | -------- |
| wait | number   | 100    | 延迟时间 |
| fn   | function | -      | 函数     |
