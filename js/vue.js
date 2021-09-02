module.exports = {
  extends: [
    './index',
    'plugin:vue/essential',
  ],
  rules: {
    // Vue 中写 JSX 会有一个未使用的 h 参数, 需要忽略
    'no-unused-vars': ['error', { argsIgnorePattern: '^h$' }],
  },
};
