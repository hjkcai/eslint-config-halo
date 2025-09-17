import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

// FIXME: Warning: React version not specified in eslint-plugin-react settings. See https://github.com/jsx-eslint/eslint-plugin-react#configuration
export const reactConfig = defineConfig(
  react.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  {
    rules: {
      // Prevent usage of button elements without an explicit type attribute
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/button-has-type.md
      'react/button-has-type': ['error', {
        button: true,
        submit: true,
        reset: false,
      }],

      // Enforce consistent usage of destructuring assignment of props, state, and context
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
      'react/destructuring-assignment': ['error', 'always'],

      // 关闭 recommended 中的规则, 不通过 eslint 来要求组件有 displayName. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/display-name.md
      'react/display-name': 'off',

      // 使用箭头函数定义 React 组件, 主要是为了能够使用 FC 类型来定义组件. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/function-component-definition.md
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      }],

      // 把 prop={true} 转换为简写. https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
      'react/jsx-boolean-value': ['error', 'never', { always: [] }],

      // Enforce shorthand or standard form for React fragments
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/bc976b837abeab1dffd90ac6168b746a83fc83cc/docs/rules/jsx-fragments.md
      'react/jsx-fragments': ['error', 'syntax'],

      // 不允许在 jsx 属性中使用 bind. https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
      'react/jsx-no-bind': ['error', {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      }],

      // 不允许 jsx 属性中出现重复项. https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

      // 不允许 jsx 中再出现字符串常量. https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
      'react/jsx-no-literals': ['off', { noStrings: true }],

      // jsx 组件名需要是 PascalCase. https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
      'react/jsx-pascal-case': ['error', {
        allowAllCaps: true,
        ignore: [],
      }],

      // Prevent react contexts from taking non-stable values
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/e2eaadae316f9506d163812a09424eb42698470a/docs/rules/jsx-no-constructed-context-values.md
      'react/jsx-no-constructed-context-values': 'error',

      // Disallow unnecessary fragments
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
      'react/jsx-no-useless-fragment': 'error',

      // 不建议把 array index 作为 key 使用. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-array-index-key.md
      'react/no-array-index-key': 'warn',

      // Prevent usage of invalid attributes
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/21e01b61af7a38fc86d94f27eb66cda8054582ed/docs/rules/no-invalid-html-attribute.md
      'react/no-invalid-html-attribute': 'error',
      // Enforce that namespaces are not used in React elements
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/8785c169c25b09b33c95655bf508cf46263bc53f/docs/rules/no-namespace.md
      'react/no-namespace': 'error',
      // Prevent this from being used in stateless functional components
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-this-in-sfc.md
      'react/no-this-in-sfc': 'error',

      // Prevent creating unstable components inside components
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/c2a790a3472eea0f6de984bdc3ee2a62197417fb/docs/rules/no-unstable-nested-components.md
      'react/no-unstable-nested-components': 'error',

      // 建议删除不使用的 PropTypes. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-prop-types.md
      'react/no-unused-prop-types': 'warn',

      // 建议删除不使用的 Class 类成员. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-class-component-methods.md
      'react/no-unused-class-component-methods': 'warn',

      // 建议删除不使用的 state. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-state.md
      'react/no-unused-state': 'warn',

      // 建议定义 prop-types. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/prop-types.md
      'react/prop-types': ['warn', {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
      }],

      // 关闭 recommended 中的规则, 现代 Bundler 都会自动引入 react, 不需要手动导入. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/react-in-jsx-scope.md
      'react/react-in-jsx-scope': 'off',

      // 使用 static 成员定义 displayName 等属性. https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
      'react/static-property-placement': ['warn', 'static public field'],

      // style 属性需要传对象. https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
      'react/style-prop-object': 'error',

      // Prevent void DOM elements from receiving children
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
      'react/void-dom-elements-no-children': 'error',
    },
  },
);
