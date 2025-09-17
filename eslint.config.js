import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';

import { simpleImportSort } from './rules9/100-simple-import-sort.js';
import { stylisticConfig } from './rules9/200-stylistic.js';
import { commonMistakesConfig } from './rules9/300-common-mistakes.js';
import { reactConfig } from './rules9/400-react.js';
import { typescriptEslintConfig } from './rules9/500-typescript-eslint.js';
import { unusedImportsConfig } from './rules9/600-unused-imports.js';

export default defineConfig(
  eslint.configs.recommended,
  simpleImportSort,
  stylisticConfig,
  commonMistakesConfig,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    extends: [reactConfig],
  },
  typescriptEslintConfig,
  unusedImportsConfig,
);
