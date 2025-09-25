import { defineConfig } from 'eslint/config';
import { importX } from 'eslint-plugin-import-x';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export const importsConfig = defineConfig([
  {
    plugins: {
      'import-x': importX,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'import-x/first': 'error',
      'import-x/newline-after-import': 'error',

      // https://github.com/un-ts/eslint-plugin-import-x/blob/HEAD/docs/rules/dynamic-import-chunkname.md
      'import-x/dynamic-import-chunkname': ['error', { allowEmpty: true }],

      // https://github.com/un-ts/eslint-plugin-import-x/blob/HEAD/docs/rules/no-duplicates.md
      'import-x/no-duplicates': 'error',

      // https://github.com/un-ts/eslint-plugin-import-x/blob/HEAD/docs/rules/no-webpack-loader-syntax.md
      'import-x/no-webpack-loader-syntax': 'error',

      // https://github.com/un-ts/eslint-plugin-import-x/blob/HEAD/docs/rules/no-mutable-exports.md
      'import-x/no-mutable-exports': 'error',

      // https://github.com/un-ts/eslint-plugin-import-x/blob/HEAD/docs/rules/no-empty-named-blocks.md
      'import-x/no-empty-named-blocks': 'error',

      // https://github.com/un-ts/eslint-plugin-import-x/blob/HEAD/docs/rules/no-extraneous-dependencies.md
      'import-x/no-extraneous-dependencies': 'warn',

      // import 排序.
      'simple-import-sort/imports': 'warn',
    },
  },
  {
    files: ['src/**/*'],
    rules: {
      // https://github.com/un-ts/eslint-plugin-import-x/blob/HEAD/docs/rules/no-extraneous-dependencies.md
      'import-x/no-extraneous-dependencies': ['warn', {
        devDependencies: false,
      }],
    },
  },
  {
    files: ['index.{js,jsx,mjs,mjsx,ts,tsx,mts,mtsx}'],
    rules: {
      // export 排序
      'simple-import-sort/exports': 'warn',
    },
  },
]);
