module.exports = {
  extends: [
    'plugin:eslint-comments/recommended',
  ],
  rules: {
    // eslint-disable 和 eslint-enable 必须成对出现, 但允许在文件开头 disable 某些规则
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],

    // 不允许出现未使用的 eslint-disable
    'eslint-comments/no-unused-disable': 'error',
  },
};
