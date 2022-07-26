# eslint-config-halo

本规则是我在 halo 团队发起的，多年前端编码的规则沉淀

## 设计原则

1. 基于 tencent 规则扩展
2. ESLint 是帮助编码的工具，不要成为负担
3. 内置大量 TypeScript 最佳实践规则，按这个写准没错

## 开始使用

首先安装 ESLint 和规则：

```bash
npm install -D eslint @hjkcai/eslint-config-halo
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，根据你的项目类型，复制下面的代码到该文件中。同时下面也提供了参考的 `package.json` scripts 配置，可以自行加入到已有的项目中去。

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

注：Vue 规则暂时不完善，如需使用，欢迎一起建设

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

#### 普通 TypeScript 项目

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

注：Vue 规则暂时不完善，如需使用，欢迎一起建设

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

### TypeScript 严格模式

对于某些需要非常认真地对待的项目，不能马虎的那种，推荐使用 TypeScript 严格模式配置。

#### 普通 TypeScript 项目

```js
module.exports = {
  extends: '@hjkcai/eslint-config-halo/ts-strict'
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
  extends: '@hjkcai/eslint-config-halo/ts-strict/react'
};
```

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
  }
}
```

## License

MIT
