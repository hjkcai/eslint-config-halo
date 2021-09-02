module.exports = {
  plugins: [
    'jsdoc',
  ],
  rules: {
    // 要求 jsdoc 的星星要对齐
    'jsdoc/check-alignment': 'error',

    // 要求 jsdoc 的文案要对齐
    'jsdoc/check-indentation': 'error',

    // @param 的名字和顺序必须和定义的一致
    'jsdoc/check-param-names': ['error', {
      checkDestructured: false,
    }],

    // jsdoc 中 @ 开头的 tag 名称必须符合规范
    'jsdoc/check-tag-names': ['error', {
      definedTags: [
        // Jest 定义的 tag
        'jest-environment',
      ],
    }],
  },
};
