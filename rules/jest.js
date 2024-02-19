module.exports = {
  plugins: ['jest'],
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  rules: {
    // custom
    'jest/consistent-test-it': 'error',
    'jest/no-test-return-statement': 'warn',
    'jest/prefer-comparison-matcher': 'warn',
    'jest/prefer-equality-matcher': 'warn',
    'jest/prefer-expect-resolves': 'warn',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'warn',
  },
  overrides: [
    {
      files: ['**/test/**/*.{ts,tsx,mts,mtsx}', '**/*.{spec,test}.{ts,tsx,mts,mtsx}'],
      rules: {
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'warn',
      },
    },
  ],
};
