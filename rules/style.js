module.exports = {
  plugins: [
    'simple-import-sort',
    'unicorn',
  ],
  rules: {
    // tencent + 允许单行
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // 不强制要求类成员使用 this
    'class-methods-use-this': 'off',

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

    // tencent + 允许注释超出 120
    'max-len': ['warn', {
      code: 120,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreStrings: true,
      ignoreUrls: true,
      ignoreRegExpLiterals: true,
      ignoreTemplateLiterals: true,
    }],

    // 关闭 tencent warning 的规则
    'newline-per-chained-call': 'off',

    // 不允许没用的分号
    'no-extra-semi': 'error',

    // 不允许出现多个连续的空格, 但允许行尾注释前出现
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],

    // 最多只能用一个空行, 并规范文件头尾空行
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    }],

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

    // import 排序
    'import/order': 'off',
    'simple-import-sort/imports': 'warn',

    // 更好的正则
    'unicorn/better-regex': 'warn',

    // 大括号内不要有空格
    'unicorn/empty-brace-spaces': 'warn',

    // 显式判断数组长度
    'unicorn/explicit-length-check': 'warn',

    // 优先使用 Array.isArray
    'unicorn/no-instanceof-array': 'warn',

    // 避免无效的 removeEventListener
    'unicorn/no-invalid-remove-event-listener': 'warn',

    // 避免无效的 Promise.resolve/reject
    'unicorn/no-useless-promise-resolve-reject': 'warn',

    // 避免无效的 undefined. TODO: TS 5.1
    // 'unicorn/no-useless-undefined': 'warn',

    // 统一数字格式
    'unicorn/escape-case': 'warn',
    'unicorn/number-literal-case': 'warn',
    'unicorn/numeric-separators-style': ['warn', { onlyIfContainsSeparator: true }],

    // 优先使用新的数组函数
    'unicorn/prefer-array-find': 'warn',
    'unicorn/prefer-array-flat': 'warn',
    'unicorn/prefer-array-flat-map': 'warn',

    // 优先使用 Date.now
    'unicorn/prefer-date-now': 'warn',

    // 使用正则做简单判断时, 优先使用 RegExp#test
    'unicorn/prefer-regexp-test': 'warn',

    // 优先使用三元运算符
    'unicorn/prefer-ternary': ['warn', 'only-single-line'],
  },
  overrides: [
    {
      files: ['**/test/**/*.{js,jsx,mjs,mjsx,ts,tsx,mts,mtsx}', '**/*.{spec,test}.{js,jsx,mjs,mjsx,ts,tsx,mts,mtsx}'],
      rules: {
        'max-lines-per-function': 'off',
      },
    },
    {
      files: 'index.{js,jsx,mjs,mjsx,ts,tsx,mts,mtsx}',
      rules: {
        // export 排序
        'simple-import-sort/exports': 'error',
      },
    },
  ],
};
