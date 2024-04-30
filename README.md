![Shared Configs](https://github.com/IgorKowalczyk/shared-configs/assets/49127376/2601c027-e41e-439e-ab59-51f83aa1e35e)

## ♻️ Shareable configs

| **Package** | **Version** | **Downloads** | **Documentation** |
| - | - | - | - |
| 📦 [`@igorkowalczyk/eslint-config`](https://npmjs.com/package/@igorkowalczyk/eslint-config) | ![](https://img.shields.io/npm/v/%40igorkowalczyk%2Feslint-config/latest.svg) | [![](https://img.shields.io/npm/dw/@igorkowalczyk/eslint-config)](https://npmjs.com/package/@igorkowalczyk/eslint-config) | [Documentation](/packages/eslint-config/README.md) |
| 📦 [`@igorkowalczyk/prettier-config`](https://npmjs.com/package/@igorkowalczyk/prettier-config) | ![](https://img.shields.io/npm/v/%40igorkowalczyk%2Fprettier-config/latest.svg) | [![](https://img.shields.io/npm/dw/@igorkowalczyk/prettier-config)](https://npmjs.com/package/@igorkowalczyk/prettier-config) | [Documentation](/packages/prettier-config/README.md) |
| 📝 [`@igorkowalczyk/renovate-config`](https://npmjs.com/package/@igorkowalczyk/prettier-config) | ![](https://img.shields.io/github/package-json/v/igorkowalczyk/shared-configs?filename=packages%2Frenovate-config%2Fpackage.json&label=github%40latest) | - | [Documentation](/packages/renovate-config/README.md) |

> [!NOTE]
> 📦 - Package  
> 📝 - Configuration file

---

## 📦 [`@igorkowalczyk/prettier-config`](https://www.npmjs.com/package/@igorkowalczyk/prettier-config)

### 📥 Installation

```bash
npm install --save-dev @igorkowalczyk/prettier-config
yarn add --dev @igorkowalczyk/prettier-config
pnpm install --save-dev @igorkowalczyk/prettier-config
```

### 🔩 Usage

```js
// .prettierrc.js
module.exports = {
  ...require('@igorkowalczyk/prettier-config'),
};
```

```js
// prettier.config.js
import prettierConfig from "@igorkowalczyk/prettier-config";

export default {
  ...prettierConfig,
};
```

```json
{
  "extends": "@igorkowalczyk/prettier-config"
}
```

### ⚙️ Rules overview

<!--START_SECTION:prettier-->
| Rule                         | Style       | Documentation                                                                          |
| ---------------------------- | ----------- | -------------------------------------------------------------------------------------- |
| `arrowParens`                | `always`    | [Documentation](https://prettier.io/docs/en/options.html#arrow-parens)                 |
| `bracketSpacing`             | `true`      | [Documentation](https://prettier.io/docs/en/options.html#bracket-spacing)              |
| `embeddedLanguageFormatting` | `auto`      | [Documentation](https://prettier.io/docs/en/options.html#embedded-language-formatting) |
| `htmlWhitespaceSensitivity`  | `css`       | [Documentation](https://prettier.io/docs/en/options.html#html-whitespace-sensitivity)  |
| `jsxSingleQuote`             | `false`     | [Documentation](https://prettier.io/docs/en/options.html#jsx-single-quote)             |
| `printWidth`                 | `200000`    | [Documentation](https://prettier.io/docs/en/options.html#print-width)                  |
| `proseWrap`                  | `preserve`  | [Documentation](https://prettier.io/docs/en/options.html#prose-wrap)                   |
| `quoteProps`                 | `as-needed` | [Documentation](https://prettier.io/docs/en/options.html#quote-props)                  |
| `requirePragma`              | `false`     | [Documentation](https://prettier.io/docs/en/options.html#require-pragma)               |
| `semi`                       | `true`      | [Documentation](https://prettier.io/docs/en/options.html#semi)                         |
| `singleQuote`                | `false`     | [Documentation](https://prettier.io/docs/en/options.html#single-quote)                 |
| `tabWidth`                   | `1`         | [Documentation](https://prettier.io/docs/en/options.html#tab-width)                    |
| `trailingComma`              | `es5`       | [Documentation](https://prettier.io/docs/en/options.html#trailing-comma)               |
| `useTabs`                    | `false`     | [Documentation](https://prettier.io/docs/en/options.html#use-tabs)                     |
<!--END_SECTION:prettier-->

---

## 📦 [`@igorkowalczyk/eslint-config`](https://www.npmjs.com/package/@igorkowalczyk/eslint-config)

### 📥 Installation

```bash
npm install --save-dev @igorkowalczyk/eslint-config
yarn add --dev @igorkowalczyk/eslint-config
pnpm install --save-dev @igorkowalczyk/eslint-config
```

### 🔩 Usage

```js
// eslint.config.js
import eslintConfig from "@igorkowalczyk/eslint-config/";

export default [
 ...eslintConfig
];
```


### ⚙️ Rules overview

You can find the full list of rules in the [ESLint config inspector](https://shared-configs.igorkowalczyk.dev).

---

## 📝 [`@igorkowalczyk/renovate-config`](/packages/renovate-config/)

> [!WARNING]
> This is not a package - it is a configuration preset!

### 🔩 Usage
In your `renovate.json` file, add the following:
```json
{
 "extends": ["github>igorkowalczyk/shared-configs//packages/renovate-config/index.json"]
}
```
