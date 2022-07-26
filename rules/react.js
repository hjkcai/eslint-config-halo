module.exports = {
  rules: {
    // 使用箭头函数定义 React 组件, 主要是为了能够使用 FC 来定义组件类型
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],

    // 允许 spread props
    'react/jsx-props-no-spreading': 'off',

    // 不要求属性有默认值
    'react/require-default-props': 'off',

    // 要求如何定义 state
    'react/state-in-constructor': 'off',

    // 不要求对组件类成员进行排序
    'react/sort-comp': 'off',
  },
};
