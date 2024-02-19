const styleRules = require('./style');

module.exports = {
  rules: {
    // 重载需要写在一起
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // 总是使用 T[] 定义数组 (而不是 Array<T>)
    '@typescript-eslint/array-type': ['error', { default: 'array' }],

    // 必须要 await Promise 类型的值
    '@typescript-eslint/await-thenable': 'warn',

    // 只允许在附加了额外说明的情况下使用 // @ts-xxx 注释
    '@typescript-eslint/ban-ts-comment': ['warn', {
      'ts-expect-error': { descriptionFormat: '^: ' },
    }],

    'block-spacing': 'off',
    '@typescript-eslint/block-spacing': 'error',

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    // 优先使用 Record 定义 Indexed Signature
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    // 优先使用 interface 来定义对象类型
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // 使用分号分隔对象类型中的各个字段
    '@typescript-eslint/member-delimiter-style': 'error',

    // 禁止感叹号 (Non Null Assertion) 出现在有歧义的位置
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // 禁止重复的 Union / Intersection
    '@typescript-eslint/no-duplicate-type-constituents': 'warn',

    // 禁止无意义的感叹号 (Non Null Assertion)
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // 不允许没用的分号
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',

    // 禁止无意义的类定义, 包括全部 static 的类
    '@typescript-eslint/no-extraneous-class': 'warn',

    // 禁止产生潜在的 unhandled rejection
    '@typescript-eslint/no-floating-promises': ['warn', { ignoreIIFE: true }],

    // 禁止 setTimeout 中传字符串这类 eval 行为
    '@typescript-eslint/no-implied-eval': 'error',

    // 禁止错误的 void 类型
    '@typescript-eslint/no-invalid-void-type': 'warn',

    // 禁止 import type 产生的 side-effect
    '@typescript-eslint/no-import-type-side-effects': 'error',

    // 禁止无用的 void 语句
    '@typescript-eslint/no-meaningless-void-operator': 'error',

    // 禁止错误的构造函数定义
    '@typescript-eslint/no-misused-new': 'warn',

    // 防止一些忘记 await 的情况
    '@typescript-eslint/no-misused-promises': 'warn',

    // 禁止 ! 与 ?. ?? 混用
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',

    // 优先使用 ! 而不是 as
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',

    // 不允许闭包内变量名覆盖闭包外变量名
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',

    // 要求 throw 和 reject 的是 Error 类实例
    '@typescript-eslint/no-throw-literal': 'warn',
    '@typescript-eslint/prefer-promise-reject-errors': 'warn',

    // 禁止多余的布尔值 === true 判断
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    // 禁止多余的命名空间前缀
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    // 禁止未使用的类型变量
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    // 禁止无效的类型转换
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // 禁止泛型 extends any/unknown
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',

    // 不允许出现没用的表达式
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: true,
      enforceForJSX: false,
    }],

    // 禁止使用 require
    '@typescript-eslint/no-var-requires': 'error',

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      /* error */ ...styleRules.rules['padding-line-between-statements'],
      { blankLine: 'always', prev: 'interface', next: ['interface', 'type'] },
    ],

    'prefer-destructuring': 'off',
    '@typescript-eslint/prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // 定义字符串常量, 数字常量这类类型时优先使用 as const
    '@typescript-eslint/prefer-as-const': 'error',

    // 优先用 includes
    '@typescript-eslint/prefer-includes': 'error',

    // 优先用 ?.
    '@typescript-eslint/prefer-optional-chain': 'warn',

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
    '@typescript-eslint/return-await': 'warn',

    // 类型定义空格样式
    '@typescript-eslint/type-annotation-spacing': 'error',

    // 取出类内的函数后, 需要 bind 才能调用
    '@typescript-eslint/unbound-method': 'warn',

    // 不允许在 union 和 intersection 中有多余的 any/unknown/never
    '@typescript-eslint/no-redundant-type-constituents': 'warn',

    // 不允许空的 export
    '@typescript-eslint/no-useless-empty-export': 'error',

    // interface 关键字后面要加空格
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': 'error',

    // 泛型优先写在构造器上, 更加简短
    '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],

    // 导出类型必须明确
    '@typescript-eslint/explicit-module-boundary-types': ['warn', {
      allowArgumentsExplicitlyTypedAsAny: true,
    }],

    // tencent + 允许单行
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // 禁止无用的模板字符串内容
    '@typescript-eslint/no-useless-template-literals': 'error',

    // 数组排序需要传入比较函数
    '@typescript-eslint/require-array-sort-compare': 'warn',

    // 禁止删除数组元素
    '@typescript-eslint/no-array-delete': 'warn',

    // 统一优先使用不带 type 的类型导入
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'no-type-imports',
      fixStyle: 'inline-type-imports',
      disallowTypeAnnotations: false,
    }],
  },
};
