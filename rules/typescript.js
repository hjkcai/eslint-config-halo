module.exports = {
  parserOptions: {
    project: [
      './tsconfig.json',
      './packages/**/tsconfig.json',
    ],
  },
  rules: {
    // 必须要 await Promise 类型的值
    '@typescript-eslint/await-thenable': 'error',

    // 只允许在附加了额外说明的情况下使用 // @ts 注释
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': 'allow-with-description',
      'ts-check': 'allow-with-description',
      minimumDescriptionLength: 3,
    }],

    // 优先使用 interface 来定义对象类型
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // 使用分号分隔对象类型中的各个字段
    '@typescript-eslint/member-delimiter-style': 'error',

    // 禁止感叹号 (Non Null Assertion) 出现在有歧义的位置
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // 禁止无意义的感叹号 (Non Null Assertion)
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // 不允许没用的分号
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',

    // 禁止无意义的类定义, 包括全部 static 的类
    '@typescript-eslint/no-extraneous-class': 'error',

    // 禁止产生潜在的 unhandled rejection
    '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],

    // 禁止 setTimeout 中传字符串这类 eval 行为
    '@typescript-eslint/no-implied-eval': 'error',

    // 禁止错误的构造函数定义
    '@typescript-eslint/no-misused-new': 'error',

    // 防止一些忘记 await 的情况
    '@typescript-eslint/no-misused-promises': ['error', { checksConditionals: true }],

    // 不允许闭包内变量名覆盖闭包外变量名
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // 要求 throw 的是 Error 类实例
    '@typescript-eslint/no-throw-literal': 'error',

    // 禁止多余的命名空间前缀
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    // 禁止未使用的类型变量
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    // 禁止无效的类型转换
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // 不允许出现没用的表达式
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    // 禁止使用 require
    '@typescript-eslint/no-var-requires': 'error',

    // 定义字符串常量, 数字常量这类类型时优先使用 as const
    '@typescript-eslint/prefer-as-const': 'error',

    // 数组 reduce 函数的结果类型优先通过类型参数传入
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    // 优先用 RegExp.exec 代替 String.match
    '@typescript-eslint/prefer-regexp-exec': 'error',

    // async 函数中 try-catch 的返回值必须有 await
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',
  },
};
