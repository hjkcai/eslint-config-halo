import { defineConfig } from 'eslint/config';
import airbnb from 'eslint-config-airbnb-extended';
import unicorn from 'eslint-plugin-unicorn';

export const baseConfig = defineConfig([
  airbnb.rules.base.bestPractices,
  airbnb.rules.base.errors,
  airbnb.rules.base.es6,
  airbnb.rules.base.strict,
  airbnb.rules.base.style,
  airbnb.rules.base.variables,
  unicorn.configs.recommended,
  {
    // 微调上述的部分规则.
    rules: {
      'camelcase': 'off',
      'consistent-return': 'off',
      'default-case': 'off',
      'max-classes-per-file': 'off',
      'no-continue': 'off',
      'no-console': 'off',
      'no-restricted-syntax': 'off',
      'no-underscore-dangle': 'off',
      'no-use-before-define': 'off',
      'no-await-in-loop': 'off',
      'no-param-reassign': ['error', { props: false }],
      'no-void': 'off', // 与 no-floating-promise 冲突.
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-null.md
      'unicorn/catch-error-name': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-negated-condition': 'off',
      'unicorn/no-unnecessary-polyfills': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/switch-case-braces': ['error', 'avoid'],
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/prefer-string-raw': 'off', // 虽然用法很好, 但是 IDE 的高亮不对, 反而会造成疑惑.
    },
  },
]);
