import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export const stylisticConfig = defineConfig([
  // 引入所有推荐的默认配置. https://eslint.style/rules#rules
  stylistic.configs.customize({ semi: true }),
  {
    rules: {
      // 数组换行样式需要保持一致, 要么都换要么都不换. https://eslint.style/rules/array-bracket-newline#consistent
      '@stylistic/array-bracket-newline': ['error', 'consistent'],

      // 大括号 block 样式. https://eslint.style/rules/brace-style#_1tbs
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],

      // 简化没有 children 的 jsx 元素样式. https://eslint.style/rules/jsx-self-closing-comp
      '@stylistic/jsx-self-closing-comp': 'error',

      // 限定注释和周围代码的样式. https://eslint.style/rules/lines-around-comment
      '@stylistic/lines-around-comment': ['error', {
        beforeBlockComment: true,
        beforeLineComment: true,
        afterHashbangComment: true,
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
        allowClassStart: true,
        allowEnumStart: true,
        allowInterfaceStart: true,
        allowModuleStart: true,
        allowTypeStart: true,
      }],

      // 类成员之间要保留空行, 但允许单行类成员声明之间没有空行. https://eslint.style/rules/lines-between-class-members
      '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

      // 一行最多写 2 个 Statement 语句. https://eslint.style/rules/max-statements-per-line
      '@stylistic/max-statements-per-line': ['error', { max: 2 }],

      // 不允许没用的分号. https://eslint.style/rules/no-extra-semi
      '@stylistic/no-extra-semi': 'error',

      // 不允许出现多个连续的空格, 但允许行尾注释出现. https://eslint.style/rules/no-multi-spaces
      '@stylistic/no-multi-spaces': ['error', { ignoreEOLComments: true }],

      // 最多只能用一个空行, 并规范文件头尾空行
      '@stylistic/no-multiple-empty-lines': ['error', {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      }],

      // 对象 / import / 解构的换行样式必须一致, 要么都换要么都不换. https://eslint.style/rules/object-curly-newline
      '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],

      // 多行代码块只有要保留空行. https://eslint.style/rules/padding-line-between-statements
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'class', next: '*' },
        { blankLine: 'always', prev: 'function', next: '*' },
        { blankLine: 'always', prev: 'iife', next: '*' },
        { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
        { blankLine: 'always', prev: 'multiline-expression', next: '*' },
      ],
    },
  },
]);
