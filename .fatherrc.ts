import { defineConfig } from 'father';

export default defineConfig({
  umd: {
    name: 'SToolchain.min.js',
    entry: 'src/index.js',
    output: 'dist',
    platform: 'browser',
    extractCSS: true,
  },
  cjs: {
    output: 'lib',
    ignores: ['src/**/demo/**', 'src/index.umd.js'],
  },
  esm: {
    output: 'esm',
    ignores: ['src/**/demo/**', 'src/index.umd.js'],
  },
  extraBabelPresets: [],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
