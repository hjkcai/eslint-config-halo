module.exports = {
  extends: [
    './index',
    '../rules/react',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.mjsx', '.tsx', 'mtsx'],
    }],
  },
};
