---
title: 基础说明
toc: content
---

## SToolchain 技术栈概述

JavaScript:使用 `ES6` 作为基础语法版本。\
HTML/CSS:使用 `HTML5` 和 `CSS3` 作为编译标准。

### 构建模式

采用 `UMD` (Universal Module Definition) 构建模式，使得输出的库可以在多种环境中使用：ꔷ `CommonJS` 模块系统 (Node.js)ꔷ AMD (Asynchronous Module Definition) 模块加载器 (RequireJS)浏览器全局变量 (window)

### 兼容性处理

Babel Polyfill: 使用  `@babel/polyfill`  或者  `core-js`  和  `regenerator-runtime`  来填充新 API 的支持，确保旧浏览器可以执行 ES6+ 代码。\
`UMD` 模式: 支持多种模块化环境，不需要额外的构建工具就可以直接在浏览器中使用。`SToolchain` 的设计理念

---

## SToolchain 的设计理念

### 独立性

`SToolchain` 不依赖于任何现有的 JavaScript 框架或库，如 `React`, `Vue`, `Angular` 等。

### 可融合性

由于其独立性和原生 JS 的使用，`SToolchain` 可以很容易地与其他框架或库集成。

### 轻量级

使用原生 JS 而不是 `jQuery` 或其他库，这通常意味着更小的文件大小和更快的加载时间。

### 现代化

尽管兼容低版本浏览器，但仍然采用了现代 Web 技术的标准。

---

## 快速上手

```js

<link rel="stylesheet" href="stoolchain.min.css">

<script src="stoolchain.min.js"></script>

```

<!-- ## 特性 -->

## 兼容环境

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                           |

## 反馈与共建

🌈🌈 欢迎您留下宝贵的意见和建议，包括在使用过程中遇到的 BUG 或开发中的需求都可以提出来，需求我们会尽量满足，BUG 我们一定会解决！ \
<img  src="https://qrstyle-api.cli.im/create/createOne?params_data=%255B%257B%2522web_url%2522%253A%2522https%253A%255C%252F%255C%252Fqr61.cn%255C%252FoJOoIZ%255C%252Fqg6alOq%2522%252C%2522qr_name%2522%253A%2522%2525E6%252584%25258F%2525E8%2525A7%252581%2525E5%25258F%25258D%2525E9%2525A6%252588%2522%257D%255D&amp;code_tplid=249072467&amp;code_type=1&amp;time=1723087160&amp;uid=10984668&amp;publickey=3d1ab7373c9185343387cfe2c59e4a9f&amp;label_tplid=171" alt="" style="background: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHSSURBVHgB7dyxjSJBEEDR4jRJnAO4kAO4kAQuQYANOYALQYALQeACiXBb69y61V9id6X//FZrvoQxRWl6EfE3ilarVWw2m9KZx+MRw+Ewqna7XSyXy9KZ8/kc8/k8qi6XS0wmk9KZPyHEgJABIQNCBoQMCBkQMiBkQMiAkAEhA0K9j8FAeZig/3qv16sccL1ex3a7LZ0ZDAZxv9+jarFYxPF4LJ3JiUpOVqqm02lcr9fSGX/CkAEhA0IGhAwIGRAyIGRAyICQASEDQt3tdosW+W5b0e/34113pZa78p7n81k6043H46jK1Y7qYICsdhwOh9KZXO1oea4cQFTv8icMGRAyIGRAyICQASEDQgaEDAgZEDIgZECo9/HyXN5MyElHdWqRZrNZVLXclZOf0WgUVTmEqHK14wtXO76BASEDQgaEDAgZEDIgZEDIgJABIQNCXcsLdKp+nCHfhX/6XS0rJF3L1y1ytaP6sv7u1Q6/2vFLGBAyIGRAyICQASEDQgaEDAgZEDIgZECoa/kH/3Q6ff6LX/Wuu3Kq0nLXfr//3Lqo6KrTh5QPVV2ByIdquSsfqnpXarkr47na8WYGhAwIGRAyIGRAyICQASEDQgaEDAj9A4UinKST/H2IAAAAAElFTkSuQmCC&quot;) repeat;margin:auto;display:block" width="200px" height="200px">
