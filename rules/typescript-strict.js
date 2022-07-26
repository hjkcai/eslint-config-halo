module.exports = {
  extends: [
    './typescript.js',
  ],
  rules: {
    // 禁止使用部分有歧义或不推荐使用的类型 (见规则默认配置)
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
    '@typescript-eslint/ban-types': 'error',

    // 禁止使用 any
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],

    // 禁止无效的条件判断 (从类型定义推导)
    '@typescript-eslint/no-unnecessary-condition': 'error',

    // 禁止 any 传参
    '@typescript-eslint/no-unsafe-argument': 'error',

    // 禁止把 any 类型赋值给非 unknown 的类型
    '@typescript-eslint/no-unsafe-assignment': 'error',

    // 禁止调用 any 类型
    '@typescript-eslint/no-unsafe-call': 'error',

    // 禁止获取 any 类型属性
    '@typescript-eslint/no-unsafe-member-access': 'error',

    // 禁止返回 any
    '@typescript-eslint/no-unsafe-return': 'error',

    // 要求加号运算符两侧必须是字符串或数字
    '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],

    // 模板字符串里面必须是字符串或数字类型
    '@typescript-eslint/restrict-template-expressions': 'error',

    // 提示有重复的枚举值
    '@typescript-eslint/no-duplicate-enum-values': 'warn',

    // 导出类型必须明确
    '@typescript-eslint/explicit-module-boundary-types': ['error', {
      allowArgumentsExplicitlyTypedAsAny: false,
    }],
  },
};
