module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [0], // 禁用类型大小写的检查
    'subject-case': [0], // 禁用主题大小写的检查
    'type-empty': [2, 'never'], // 确保提交类型不为空
    'subject-empty': [2, 'never'], // 确保提交主题不为空
    // 自定义提交类型的正则表达式
    'type-regex': [
      2,
      'always',
      '^(feat|fix|docs|style|refactor|perf|test|chore|revert|ci)(\\(.*\\))?:.*$',
    ],
    // 自定义提交主题的正则表达式
    'subject-regex': [
      2,
      'always',
      '^.*$', // 这里允许任何字符
    ],
  },
};
