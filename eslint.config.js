import { defineConfig } from 'eslint/config';

import { baseConfig } from './rules9/000-base.js';
import { typescriptConfig } from './rules9/100-typescript.js';
import { commonMistakesConfig } from './rules9/200-common-mistakes.js';
import { reactConfig } from './rules9/300-react.js';
import { importsConfig } from './rules9/700-imports.js';
import { stylisticConfig } from './rules9/800-stylistic.js';
import { unusedImportsConfig } from './rules9/900-unused-imports.js';

export default defineConfig([
  baseConfig,
  typescriptConfig,
  commonMistakesConfig,
  reactConfig,
  importsConfig,
  stylisticConfig,
  unusedImportsConfig,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        projectService: true,
      },
    },
  },
]);
