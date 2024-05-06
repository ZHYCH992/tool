const fs = require('fs-extra');
const path = require('path');

// 定义要搜索的目录和目标文件路径
const srcDir = './src';
const targetFile = './src/index.less';
// 用于存储所有index.less的相对路径
let lessImports = ['@import "theme.less";'];

// 递归遍历src目录
function collectLessFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      // 如果是目录，则递归调用自身
      if (file !== 'node_modules') {
        // 排除node_modules目录
        collectLessFiles(filePath);
      }
    }

    if (filePath.includes('style') && file.endsWith('index.less')) {
      const relativePath = path.relative(srcDir, filePath).replace(/\\/g, '/');
      lessImports.push(`@import "${relativePath}";`);
    }
  });
}

// 执行收集操作
collectLessFiles(srcDir);

// 将收集到的导入语句写入目标文件
async function writeImportsToFile() {
  try {
    await fs.writeFile(
      targetFile,
      lessImports.join('\n') + '\n', // 对导入进行排序以保持一致性
      'utf8',
      (err) => {
        if (err) throw err;
        console.log(
          '🎉🎉🎉 Less imports have been successfully written to index.less',
        );
      },
    );
  } catch (error) {
    console.error('An error occurred while writing to the file:', error);
  }
}

// 主执行函数
async function main() {
  await writeImportsToFile();
}

main();
