import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export const typescriptEslintConfig = defineConfig(
  {
    files: ['**/*.ts'],
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
  },
);
