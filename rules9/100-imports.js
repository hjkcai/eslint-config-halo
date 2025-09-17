import { defineConfig } from 'eslint/config';
import airbnb from 'eslint-config-airbnb-extended';
import { importX } from 'eslint-plugin-import-x';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export const importsConfig = defineConfig(
  airbnb.rules.base.imports,
  {
    plugins: {
      'import-x': importX,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'import-x/extensions': 'off',
      'import-x/newline-after-import': 'error',
      'import-x/prefer-default-export': 'off',
      'simple-import-sort/imports': 'warn',
    },
  },
  {
    files: ['index.{js,jsx,mjs,mjsx,ts,tsx,mts,mtsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // export 排序
      'simple-import-sort/exports': 'warn',
    },
  },
);
