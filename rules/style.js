module.exports = {
  rules: {
    // 强制要求类成员之间要保留空行, 但允许单行类成员声明之间没有空行
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // 强制要求多行代码块只有要保留空行
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'class', next: '*' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: 'iife', next: '*' },
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
      { blankLine: 'always', prev: 'multiline-expression', next: '*' },
    ],

    // 不允许没用的分号
    'no-extra-semi': 'error',

    // 不允许出现多个连续的空格, 但允许行尾注释前出现
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],

    // 不允许闭包内变量名覆盖闭包外变量名
    'no-shadow': 'warn',

    // 不允许出现没用的表达式
    'no-unused-expressions': 'error',

    // async 函数中 try-catch 的返回值必须有 await
    'no-return-await': 'error',

    // 单函数代码行数不超过 80 行
    'max-lines-per-function': ['error', { max: 80, skipBlankLines: true, skipComments: true }],

    // import 后需要有空行
    'import/newline-after-import': 'error',
  },
  overrides: [
    {
      files: ['**/test/**/*.{js,jsx,mjs,mjsx,ts,tsx,mts,mtsx}', '**/*.{spec,test}.{js,jsx,mjs,mjsx,ts,tsx,mts,mtsx}'],
      rules: {
        'max-lines-per-function': 'off',
      },
    },
  ],
};
