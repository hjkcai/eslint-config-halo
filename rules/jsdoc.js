module.exports = {
  plugins: [
    'jsdoc',
  ],
  rules: {
    // 要求 jsdoc 的星星要对齐
    'jsdoc/check-alignment': 'warn',

    // 要求 jsdoc 的文案要对齐
    'jsdoc/check-indentation': ['warn', {
      excludeTags: ['example', 'description'],
    }],

    // @param 的名字和顺序必须和定义的一致
    'jsdoc/check-param-names': ['warn', {
      checkDestructured: false,
    }],

    // jsdoc 中 @ 开头的 tag 名称必须符合规范
    'jsdoc/check-tag-names': ['warn', {
      definedTags: [
        // DWT 定义的 tag
        'priority',
        'casetype',

        // Jest 定义的 tag
        'jest-environment',
      ],
    }],
  },
};
