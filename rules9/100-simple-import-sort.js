import { defineConfig } from 'eslint/config';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

export const simpleImportSort = defineConfig(
  {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      'simple-import-sort/imports': 'warn',
    },
  },
  {
    files: ['index.{js,jsx,mjs,mjsx,ts,tsx,mts,mtsx}'],
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      // export 排序
      'simple-import-sort/exports': 'warn',
    },
  },
);
