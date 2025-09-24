import eslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import { defineConfig } from 'eslint/config';

export const commonMistakesConfig = defineConfig([
  eslintComments.recommended,
  {
    rules: {
      // 注释中的 eslint-disable 和 eslint-enable 必须成对出现, 但允许在文件开头 disable 某些规则. https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
      '@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],

      // 不允许出现未使用的 eslint-disable. https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
      '@eslint-community/eslint-comments/no-unused-disable': 'error',

      // 单函数代码行数不超过 80 行. https://eslint.org/docs/latest/rules/max-lines-per-function
      'max-lines-per-function': ['error', { max: 80, skipBlankLines: true, skipComments: true }],

      // 不允许出现没用的表达式. https://eslint.org/docs/latest/rules/no-unused-expressions
      'no-unused-expressions': ['error', {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: true,
        enforceForJSX: false,
      }],

      'preserve-caught-error': 'error',

      // 在有数字分隔符时, 按照千位分隔格式. https://github.com/sindresorhus/eslint-plugin-unicorn/blob/HEAD/docs/rules/numeric-separators-style.md
      'unicorn/numeric-separators-style': ['error', { onlyIfContainsSeparator: true }],

      // 对于超简单的 if else 语句, 优先改用三元运算符. https://github.com/sindresorhus/eslint-plugin-unicorn/blob/HEAD/docs/rules/prefer-ternary.md
      'unicorn/prefer-ternary': ['error', 'only-single-line'],
    },
  },
  {
    files: [
      '**/test/**/*.{js,jsx,mjs,mjsx,ts,tsx,mts,mtsx}',
      '**/*.{spec,test}.{js,jsx,mjs,mjsx,ts,tsx,mts,mtsx}',
    ],
    rules: {
      // 对于测试用例文件, 不限制单函数代码长度. https://eslint.org/docs/latest/rules/max-lines-per-function
      'max-lines-per-function': 'off',
    },
  },
]);
