module.exports = {
  plugins: [
    'simple-import-sort',
    'unicorn',
  ],
  rules: {
    // 不强制要求类成员使用 this
    'class-methods-use-this': 'off',

    // tencent + 允许注释超出 120 -- 预期删除
    'max-len': ['warn', {
      code: 120,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreStrings: true,
      ignoreUrls: true,
      ignoreRegExpLiterals: true,
      ignoreTemplateLiterals: true,
    }],

    // 不允许闭包内变量名覆盖闭包外变量名
    'no-shadow': 'warn',

    // async 函数中 try-catch 的返回值必须有 await -- 已弃用, 使用 @typescript-eslint/return-await
    'no-return-await': 'error',
  },
};
