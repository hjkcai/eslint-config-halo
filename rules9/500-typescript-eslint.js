import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export const typescriptEslintConfig = defineConfig(
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      // 总是使用 T[] 定义数组 (而不是 Array<T>). https://typescript-eslint.io/rules/array-type/
      '@typescript-eslint/array-type': ['error', { default: 'array' }],

      // 只允许在附加了额外说明的情况下使用 @ts-expect-error 注释. 不允许其它 @ts-xxx 注释. https://typescript-eslint.io/rules/ban-ts-comment
      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-expect-error': { descriptionFormat: '^: ' }, // 相比于 recommended 配置, 简化了注释格式.
      }],

      // 统一优先使用不带 type 的类型导入
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'no-type-imports',
        fixStyle: 'inline-type-imports',
        disallowTypeAnnotations: false,
      }],

      '@typescript-eslint/explicit-module-boundary-types': ['error', {
        allowArgumentsExplicitlyTypedAsAny: false,
      }],

      // 禁止使用 any. 但是相比于 recommended 规则, 允许在函数 ...rest 参数中使用 any. https://typescript-eslint.io/rules/no-explicit-any/
      '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],

      // 避免纯类型导入不小心产生 Side Effect Import. https://typescript-eslint.io/rules/no-import-type-side-effects/
      '@typescript-eslint/no-import-type-side-effects': 'error',

      // 提示闭包内变量名覆盖闭包外变量名. https://typescript-eslint.io/rules/no-shadow/
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'warn',

      // 禁止多余的 Enum 命名空间前缀. https://typescript-eslint.io/rules/no-unnecessary-qualifier/
      '@typescript-eslint/no-unnecessary-qualifier': 'error',

      // 不允许出现没用的表达式. https://typescript-eslint.io/rules/no-unused-expressions/
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': ['error', {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: true, // 相比于 recommended 规则额外允许了 css`...` 这类用法.
        enforceForJSX: false,
      }],

      // 不允许空的 export. https://typescript-eslint.io/rules/no-useless-empty-export/
      '@typescript-eslint/no-useless-empty-export': 'error',

      // 优先用 ??. https://typescript-eslint.io/rules/prefer-nullish-coalescing/
      '@typescript-eslint/prefer-nullish-coalescing': ['error', {
        ignoreConditionalTests: true,
        ignorePrimitives: true, // 相比于 recommended 规则额外允许简单类型的情况下不强制用 ??.
      }],

      // 数组排序需要传入比较函数. https://typescript-eslint.io/rules/require-array-sort-compare/
      '@typescript-eslint/require-array-sort-compare': 'error',

      // switch 语句完整性校验. https://typescript-eslint.io/rules/switch-exhaustiveness-check/
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      // TS 中使用类型校验即可, 不再需要 prop-types.
      'react/prop-types': 'off',
    },
  },
);
