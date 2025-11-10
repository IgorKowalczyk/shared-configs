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

<!--START_SECTION:prettier-->
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
 ...require("@igorkowalczyk/prettier-config"),
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

<!--START_SECTION:prettier-table -->
| Rule                         | Style       | Documentation                                                                          |
| ---------------------------- | ----------- | -------------------------------------------------------------------------------------- |
| `arrowParens`                | `always`    | [Documentation](https://prettier.io/docs/en/options.html#arrow-parens)                 |
| `bracketSpacing`             | `true`      | [Documentation](https://prettier.io/docs/en/options.html#bracket-spacing)              |
| `embeddedLanguageFormatting` | `auto`      | [Documentation](https://prettier.io/docs/en/options.html#embedded-language-formatting) |
| `htmlWhitespaceSensitivity`  | `css`       | [Documentation](https://prettier.io/docs/en/options.html#html-whitespace-sensitivity)  |
| `jsxSingleQuote`             | `false`     | [Documentation](https://prettier.io/docs/en/options.html#jsx-single-quote)             |
| `printWidth`                 | `180`       | [Documentation](https://prettier.io/docs/en/options.html#print-width)                  |
| `proseWrap`                  | `preserve`  | [Documentation](https://prettier.io/docs/en/options.html#prose-wrap)                   |
| `quoteProps`                 | `as-needed` | [Documentation](https://prettier.io/docs/en/options.html#quote-props)                  |
| `requirePragma`              | `false`     | [Documentation](https://prettier.io/docs/en/options.html#require-pragma)               |
| `semi`                       | `true`      | [Documentation](https://prettier.io/docs/en/options.html#semi)                         |
| `singleQuote`                | `false`     | [Documentation](https://prettier.io/docs/en/options.html#single-quote)                 |
| `tabWidth`                   | `2`         | [Documentation](https://prettier.io/docs/en/options.html#tab-width)                    |
| `trailingComma`              | `es5`       | [Documentation](https://prettier.io/docs/en/options.html#trailing-comma)               |
| `useTabs`                    | `false`     | [Documentation](https://prettier.io/docs/en/options.html#use-tabs)                     |
<!--END_SECTION:prettier-table -->
<!--END_SECTION:prettier-->
---

## 📦 [`@igorkowalczyk/eslint-config`](https://www.npmjs.com/package/@igorkowalczyk/eslint-config)

<!--START_SECTION:eslint-->
### 📥 Installation

```bash
npm install --save-dev @igorkowalczyk/eslint-config
yarn add --dev @igorkowalczyk/eslint-config
pnpm install --save-dev @igorkowalczyk/eslint-config
```

### 🔩 Usage

> [!NOTE]
> This package provides multiple ESLint configurations. You can use them in your project by importing the configuration you want to use.

#### Basic configuration

Basic configuration includes ESLint recommended rules, ignored patters and styling rules.

```js
// eslint.config.js
import baseConfig from "@igorkowalczyk/eslint-config"; // or "@igorkowalczyk/eslint-config/base"

export default [
 ...baseConfig
];
```

#### [Prettier](https://prettier.io) configuration

This configuration includes recommended rules for Prettier

> [!WARNING]
> This configuration should be placed at the end of the configuration file! Otherwise, it may lead to unexpected behavior.

```js
// eslint.config.js
import prettierConfig from "@igorkowalczyk/eslint-config/prettier";

export default [
  /* Other configurations */
 ...prettierConfig
];
```

#### [Node.js](https://nodejs.org/) configuration

Configuration includes recommended rules for Node.js projects.

```js
// eslint.config.js
import nodeConfig from "@igorkowalczyk/eslint-config/node";

export default [
 ...nodeConfig
];
```

#### [TypeScript](https://www.typescriptlang.org/) configuration

Configuration includes TypeScript parser and recommended rules for TypeScript projects.

```js
// eslint.config.js
import typescriptConfig from "@igorkowalczyk/eslint-config/typescript";

export default [
 ...typescriptConfig
];
```

#### [React](https://react.dev/) configuration

Configuration includes recommended rules for React components.

```js
// eslint.config.js
import reactConfig from "@igorkowalczyk/eslint-config/react";

export default [
 ...reactConfig
];
```

#### [Next.js](https://nextjs.org) configuration

Configuration includes recommended rules for Next.js projects.

```js
// eslint.config.js
import nextConfig from "@igorkowalczyk/eslint-config/next";

export default [
 ...nextConfig
];
```

#### [Astro](https://astro.build) configuration

Configuration includes Astro parser and recommended rules for Astro projects.

```js
// eslint.config.js
import astroConfig from "@igorkowalczyk/eslint-config/astro";

export default [
 ...astroConfig
];
```

### 🔗 Chaining configurations

You can also chain multiple configurations together, for example, to use TypeScript and React configurations together.

```js
// eslint.config.js
import baseConfig from "@igorkowalczyk/eslint-config";
import reactConfig from "@igorkowalczyk/eslint-config/react";
import typescriptConfig from "@igorkowalczyk/eslint-config/typescript";

export default [
  ...baseConfig,
  ...reactConfig,
  ...typescriptConfig,
];
```

### ⚙️ Rules overview

You can find the full list of rules in the [ESLint config inspector](https://eslint.igorkowalczyk.dev/).
<!--END_SECTION:eslint-->

---

## 📝 [`@igorkowalczyk/renovate-config`](/packages/renovate-config/)

<!--START_SECTION:renovate-->
> [!WARNING]
> This is not a package - it is a configuration preset!

### 🔩 Usage

In your `renovate.json` file, add the following:

```json
{
 "extends": ["github>igorkowalczyk/shared-configs//packages/renovate-config/index.json"]
}
```
<!--END_SECTION:renovate-->
