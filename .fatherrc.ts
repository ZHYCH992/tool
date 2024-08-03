import { defineConfig } from 'father';

export default defineConfig({
  umd: {
    name: 'SToolchain.min.js',
    platform: 'browser',
    extractCSS: true,
    entry: 'src/index.umd.js',
  },
  cjs: {
    output: 'dist/cjs',
    ignores: ['src/**/demo/**', 'src/index.umd.js'],
    input: 'src',
    platform: 'node',
    transformer: 'esbuild',
  },
  esm: {
    output: 'dist/esm',
    ignores: ['src/**/demo/**', 'src/index.umd.js'],
    input: 'src',
    platform: 'browser',
    transformer: 'babel',
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
