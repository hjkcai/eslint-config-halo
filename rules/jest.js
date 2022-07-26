module.exports = {
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    // recommended
    'jest/expect-expect': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-conditional-expect': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-done-callback': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-mocks-import': 'error',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'error',

    // style
    'jest/no-alias-methods': 'error',
    'jest/prefer-to-be': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',

    // halo
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
        'jest/unbound-method': 'error',
      },
    },
  ],
};
