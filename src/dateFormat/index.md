---
category: Components
title: 时间格式转换 dateFormat
toc: content
order: 9
group:
  title: Utils
---

## 何时使用

> 传入时间和格式即可返回指定格式的时间

### 示例

### 浏览器环境

```js
dateFormat({ date: '2022-12-1', format: 'yyyy:MM:dd hh:mm:ss 星期W 第Q季度' });
//'2022:12:01 00:00:00 星期四 第四季度'

dateFormat({ date: '2022:12:1' });
//'2022-01-01'

dateFormat({ format: 'yyyy-MM-dd hh:mm:ss' });
//'2024-08-02 15:43:56' PS：不传date时，默认当前时间

dateFormat({ format: 'MM-dd' });
//'08-02' PS：不传date时，默认当前时间
```

### API

| 名称   | 类型               | 默认值       | 说明                                                                                                                                                 |
| ------ | ------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| date   | `string\|\|object` | `new Date()` | 可以接受字符串、Date 对象形式的时间、时间戳等，默认值为当前时间                                                                                      |
| format | `string`           | `yyyy-MM-dd` | y 代表年份，M 代表月份，d 代表日期，h 代表小时，m 代表分钟，s 代表秒，S 代表毫秒，W 代表星期（w 为阿拉伯数字格式），Q 代表季度（q 为阿拉伯数字格式） |
