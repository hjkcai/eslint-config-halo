eslint-config-halo 支持几种不同类型的项目，通过在 .eslintrc.js 中声明继承不同的规则，即可在不同的项目中得到不同的效果。

下面列举了不同项目类型应该使用的配置，配置中的代码分别是 .eslintrc.js 的内容，和 package.json 中要添加的内容。

### JavaScript

#### 普通 JavaScript 项目

```js
module.exports = {
  extends: '@hjkcai/eslint-config-halo/js'
};
```

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

#### React + JavaScript 项目

```js
module.exports = {
  extends: '@hjkcai/eslint-config-halo/js/react'
};
```

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx"
  }
}
```

#### Vue + JavaScript 项目

```js
module.exports = {
  extends: '@hjkcai/eslint-config-halo/js/vue'
};
```

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.vue"
  }
}
```

### TypeScript

#### 普通 JavaScript 项目

```js
module.exports = {
  extends: '@hjkcai/eslint-config-halo/ts'
};
```

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.ts"
  }
}
```

#### React + TypeScript 项目

```js
module.exports = {
  extends: '@hjkcai/eslint-config-halo/ts/react'
};
```

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
  }
}
```

#### Vue + TypeScript 项目

```js
module.exports = {
  extends: '@hjkcai/eslint-config-halo/ts/vue'
};
```

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx,.vue"
  }
}
```

## License

MIT
