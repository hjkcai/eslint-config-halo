module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-hooks',
  ],
  rules: {
    // 使用箭头函数定义 React 组件, 主要是为了能够使用 FC 来定义组件类型
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],

    // JSX 内大括号空格规则
    'react/jsx-curly-spacing': ['error', {
      when: 'never',
      allowMultiline: true,
      children: true,
    }],

    // 允许 spread props
    'react/jsx-props-no-spreading': 'off',

    // 不建议把 array index 作为 key 使用
    'react/no-array-index-key': 'warn',

    // 建议删除不使用的 PropTypes
    'react/no-unused-prop-types': 'warn',

    // 建议删除不使用的 Class 类成员
    'react/no-unused-class-component-methods': 'warn',

    // 建议删除不使用的 state
    'react/no-unused-state': 'warn',

    // 建议定义 prop-types
    'react/prop-types': ['warn', {
      ignore: [],
      customValidators: [],
      skipUndeclared: false,
    }],

    // 现代 Bundler 都会自动引入 react, 不需要手动导入
    'react/react-in-jsx-scope': 'off',

    // 不要求属性有默认值
    'react/require-default-props': 'off',

    // 不要求对组件类成员进行排序
    'react/sort-comp': 'off',

    // 要求如何定义 state
    'react/state-in-constructor': 'off',

    // 使用 static 成员定义 displayName 等属性
    'react/static-property-placement': ['warn', 'static public field'],

    // 帮助关注 Hooks deps
    'react-hooks/exhaustive-deps': 'warn',
  },
};
