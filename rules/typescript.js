const styleRules = require('./style');

module.exports = {
  parserOptions: {
    project: [
      './tsconfig.json',
      './packages/**/tsconfig.json',
    ],
  },
  rules: {
    // 重载需要写在一起
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // 总是使用 T[] 定义数组 (而不是 Array<T>)
    '@typescript-eslint/array-type': ['error', { default: 'array' }],

    // 必须要 await Promise 类型的值
    '@typescript-eslint/await-thenable': 'error',

    // 只允许在附加了额外说明的情况下使用 // @ts-xxx 注释
    '@typescript-eslint/ban-ts-comment': 'error',

    // 优先使用 Record 定义 Indexed Signature
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

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

    // 禁止无用的 void 语句
    '@typescript-eslint/no-meaningless-void-operator': 'error',

    // 禁止错误的构造函数定义
    '@typescript-eslint/no-misused-new': 'error',

    // 防止一些忘记 await 的情况
    '@typescript-eslint/no-misused-promises': ['error', { checksConditionals: true }],

    // 禁止 ! 与 ?. ?? 混用
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // 优先使用 ! 而不是 as
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',

    // 不允许闭包内变量名覆盖闭包外变量名
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // 要求 throw 的是 Error 类实例
    '@typescript-eslint/no-throw-literal': 'error',

    // 禁止多余的布尔值 === true 判断
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    // 禁止多余的命名空间前缀
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    // 禁止未使用的类型变量
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    // 禁止无效的类型转换
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // 禁止泛型 extends any/unknown
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    // 不允许出现没用的表达式
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    // 禁止使用 require
    '@typescript-eslint/no-var-requires': 'error',

    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      /* error */ ...styleRules.rules['padding-line-between-statements'],
      { blankLine: 'always', prev: 'interface', next: ['interface', 'type'] },
    ],

    // 定义字符串常量, 数字常量这类类型时优先使用 as const
    '@typescript-eslint/prefer-as-const': 'error',

    // 数组 reduce 函数的结果类型优先通过类型参数传入
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    // 优先用 RegExp.exec 代替 String.match
    '@typescript-eslint/prefer-regexp-exec': 'error',

    // 优先返回 this type
    '@typescript-eslint/prefer-return-this-type': 'error',

    // 优先使用 startsWith/endsWith
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    // async 函数中 try-catch 的返回值必须有 await
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',

    // 类型定义空格样式
    '@typescript-eslint/type-annotation-spacing': 'error',

    // 取出类内的函数后, 需要 bind 才能调用
    '@typescript-eslint/unbound-method': 'error',
  },
};
