import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import airbnb from 'eslint-config-airbnb-extended';

export const baseConfig = defineConfig(
  eslint.configs.recommended,
  airbnb.rules.base.bestPractices,
  airbnb.rules.base.errors,
  airbnb.rules.base.es6,
  airbnb.rules.base.strict,
  airbnb.rules.base.style,
  airbnb.rules.base.variables,
);
