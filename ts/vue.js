module.exports = {
  extends: [
    '../js/vue',
    './index',
  ],
  // the ts-eslint recommended ruleset sets the parser so we need to set it back
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Vue 中写 JSX 会有一个未使用的 h 参数, 需要忽略
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^h$' }],
  },
};
