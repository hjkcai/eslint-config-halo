import { defineConfig } from 'eslint/config';
import unusedImports from 'eslint-plugin-unused-imports';

export const unusedImportsConfig = defineConfig([
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
]);
