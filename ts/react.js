module.exports = {
  extends: [
    './index',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-hooks',
    '../rules/react',
  ],
  rules: {
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.mjsx', '.tsx', 'mtsx'],
    }],
  },
};
