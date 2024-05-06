import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'SToolchain',
    nav: {
      'zh-CN': [
        { title: '指南', link: '/guide' },
        { title: '组件', link: '/components' },
        { title: '更新日志', link: '/log' },
      ],
      // 'en-US': [{},{ title: 'components', link: '/en/components' }],
    },
    // locales: [
    //   { id: 'en-US', name: 'English', suffix: '' },
    //   { id: 'zh-CN', name: '中文', suffix: '-cn' },
    // ],
    rtl: true,
    showLineNum: true,
    footer: false,
    nprogress: true, //进度条
    prefersColor: { default: 'light', switch: true },
    lastUpdated: true,
  },

  legacy: {
    buildOnly: true, //只在构建生效
    checkOutput: true, //每次构建结束后将自动运行 es-check 检查产物 .js 文件的语法是否为 es5 格式。
    nodeModulesTransform: false, //取消对 node_modules 的转换
  },
  outputPath: 'docDist',
});
