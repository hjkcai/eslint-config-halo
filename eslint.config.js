import { defineConfig } from 'eslint/config';

import { baseConfig } from './rules9/000-base.js';
import { importsConfig } from './rules9/100-imports.js';
import { stylisticConfig } from './rules9/200-stylistic.js';
import { commonMistakesConfig } from './rules9/300-common-mistakes.js';
import { reactConfig } from './rules9/400-react.js';
import { typescriptEslintConfig } from './rules9/500-typescript-eslint.js';
import { unusedImportsConfig } from './rules9/600-unused-imports.js';

export default defineConfig(
  baseConfig,
  importsConfig,
  stylisticConfig,
  commonMistakesConfig,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    extends: [reactConfig],
  },
  typescriptEslintConfig,
  unusedImportsConfig,
);
