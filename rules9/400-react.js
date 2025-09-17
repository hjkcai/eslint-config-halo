import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

// FIXME: Warning: React version not specified in eslint-plugin-react settings. See https://github.com/jsx-eslint/eslint-plugin-react#configuration
export const reactConfig = defineConfig(
  react.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  {
    rules: {
      // 防止使用没有明确 type 属性的 button 元素. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/button-has-type.md
      'react/button-has-type': ['error', {
        button: true,
        submit: true,
        reset: false,
      }],

      // 强制对 props、state 和 context 使用解构赋值. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/destructuring-assignment.md
      'react/destructuring-assignment': ['error', 'always'],

      // 关闭 recommended 中的规则, 不通过 eslint 来要求组件有 displayName. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/display-name.md
      'react/display-name': 'off',

      // 使用箭头函数定义 React 组件, 主要是为了能够使用 FC 类型来定义组件. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/function-component-definition.md
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      }],

      // 把 prop={true} 转换为简写. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-boolean-value.md
      'react/jsx-boolean-value': ['error', 'never', { always: [] }],

      // 强制使用简写或标准形式的 React fragments. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-fragments.md
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-key': 'off',  // Airbnb 认为误报太多

      // 不允许在 jsx 属性中使用 bind. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-bind.md
      'react/jsx-no-bind': ['error', {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      }],

      // 不允许 jsx 属性中出现重复项. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-duplicate-props.md
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

      // 不允许 jsx 中再出现字符串常量. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-literals.md
      'react/jsx-no-literals': ['off', { noStrings: true }],

      // jsx 组件名需要是 PascalCase. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-pascal-case.md
      'react/jsx-pascal-case': ['error', {
        allowAllCaps: true,
        ignore: [],
      }],

      // 防止 React contexts 使用不稳定的值. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-constructed-context-values.md
      'react/jsx-no-constructed-context-values': 'error',

      // 禁止不必要的 fragments. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-useless-fragment.md
      'react/jsx-no-useless-fragment': 'error',

      // 不建议把 array index 作为 key 使用. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-array-index-key.md
      'react/no-array-index-key': 'warn',

      // 不允许在 componentDidUpdate 中调用 setState. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-did-update-set-state.md
      'react/no-did-update-set-state': 'error',

      // 防止使用无效的 HTML 属性. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-invalid-html-attribute.md
      'react/no-invalid-html-attribute': 'error',

      // 强制不在 React 元素中使用命名空间. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-namespace.md
      'react/no-namespace': 'error',

      // 禁止在 jsx 中使用 javascript: 协议的 URL. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-script-url.md
      'react/jsx-no-script-url': 'error',

      // 防止在无状态函数组件中使用 this. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-this-in-sfc.md
      'react/no-this-in-sfc': 'error',

      // 防止在组件内创建不稳定的组件. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unstable-nested-components.md
      'react/no-unstable-nested-components': 'error',

      // 建议删除不使用的 PropTypes. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-prop-types.md
      'react/no-unused-prop-types': 'warn',

      // 建议删除不使用的 Class 类成员. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-class-component-methods.md
      'react/no-unused-class-component-methods': 'warn',

      // 建议删除不使用的 state. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-state.md
      'react/no-unused-state': 'warn',

      // 不允许在 componentWillUpdate 中调用 setState. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-will-update-set-state.md
      'react/no-will-update-set-state': 'error',

      // 优先使用 ES6 class 定义组件. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/prefer-es6-class.md
      'react/prefer-es6-class': ['error', 'always'],

      // 优先使用无状态函数组件. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/prefer-stateless-function.md
      'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

      // 建议定义 prop-types. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/prop-types.md
      'react/prop-types': ['warn', {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
      }],

      // 关闭 recommended 中的规则, 现代 Bundler 都会自动引入 react, 不需要手动导入. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/react-in-jsx-scope.md
      'react/react-in-jsx-scope': 'off',

      // 使用 static 成员定义 displayName 等属性. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/static-property-placement.md
      'react/static-property-placement': ['warn', 'static public field'],

      // style 属性需要传对象. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/style-prop-object.md
      'react/style-prop-object': 'error',

      // 防止 <img> <br> 这类不允许子元素的 DOM 元素接收子元素. https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/void-dom-elements-no-children.md
      'react/void-dom-elements-no-children': 'error',
    },
  },
);
