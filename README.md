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

> [!IMPORTANT]
> Starting from version `2.0.0` this package now includes both [`legacy`](https://eslint.org/docs/latest/use/configure/configuration-files) and [`flat`](https://eslint.org/docs/latest/use/configure/configuration-files-new) configs. This is breaking change, so please update your config files accordingly.

**Legacy config:**
```js
// .eslintrc.js
module.exports = {
 extends: ["@igorkowalczyk/eslint-config/legacy"],
};
```

**Flat config:**
```js
// eslint.config.js
import eslintConfig from "@igorkowalczyk/eslint-config/flat";

export default [
 ...eslintConfig
];
```

### ⚙️ Rules overview

<!--START_SECTION:eslint-->
| Rule                            | Style                                                                      | Type          | Documentation                                                                |
| ------------------------------- | -------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------- |
| `constructor-super`             | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/constructor-super)             |
| `for-direction`                 | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/for-direction)                 |
| `getter-return`                 | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/getter-return)                 |
| `no-async-promise-executor`     | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-async-promise-executor)     |
| `no-case-declarations`          | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-case-declarations)          |
| `no-class-assign`               | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-class-assign)               |
| `no-compare-neg-zero`           | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-compare-neg-zero)           |
| `no-cond-assign`                | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-cond-assign)                |
| `no-const-assign`               | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-const-assign)               |
| `no-constant-condition`         | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-constant-condition)         |
| `no-control-regex`              | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-control-regex)              |
| `no-debugger`                   | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-debugger)                   |
| `no-delete-var`                 | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-delete-var)                 |
| `no-dupe-args`                  | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-dupe-args)                  |
| `no-dupe-class-members`         | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-dupe-class-members)         |
| `no-dupe-else-if`               | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-dupe-else-if)               |
| `no-dupe-keys`                  | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-dupe-keys)                  |
| `no-duplicate-case`             | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-duplicate-case)             |
| `no-empty`                      | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-empty)                      |
| `no-empty-character-class`      | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-empty-character-class)      |
| `no-empty-pattern`              | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-empty-pattern)              |
| `no-ex-assign`                  | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-ex-assign)                  |
| `no-extra-boolean-cast`         | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-extra-boolean-cast)         |
| `no-extra-semi`                 | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-extra-semi)                 |
| `no-fallthrough`                | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-fallthrough)                |
| `no-func-assign`                | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-func-assign)                |
| `no-global-assign`              | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-global-assign)              |
| `no-import-assign`              | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-import-assign)              |
| `no-inner-declarations`         | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-inner-declarations)         |
| `no-invalid-regexp`             | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-invalid-regexp)             |
| `no-irregular-whitespace`       | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-irregular-whitespace)       |
| `no-loss-of-precision`          | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-loss-of-precision)          |
| `no-misleading-character-class` | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-misleading-character-class) |
| `no-mixed-spaces-and-tabs`      | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)      |
| `no-new-symbol`                 | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-new-symbol)                 |
| `no-nonoctal-decimal-escape`    | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)    |
| `no-obj-calls`                  | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-obj-calls)                  |
| `no-octal`                      | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-octal)                      |
| `no-prototype-builtins`         | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-prototype-builtins)         |
| `no-redeclare`                  | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-redeclare)                  |
| `no-regex-spaces`               | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-regex-spaces)               |
| `no-self-assign`                | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-self-assign)                |
| `no-setter-return`              | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-setter-return)              |
| `no-shadow-restricted-names`    | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-shadow-restricted-names)    |
| `no-sparse-arrays`              | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-sparse-arrays)              |
| `no-this-before-super`          | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-this-before-super)          |
| `no-undef`                      | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-undef)                      |
| `no-unexpected-multiline`       | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-unexpected-multiline)       |
| `no-unreachable`                | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-unreachable)                |
| `no-unsafe-finally`             | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-unsafe-finally)             |
| `no-unsafe-negation`            | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-unsafe-negation)            |
| `no-unsafe-optional-chaining`   | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-unsafe-optional-chaining)   |
| `no-unused-labels`              | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-unused-labels)              |
| `no-unused-vars`                | [Documentation](https://eslint.org/docs/rules/no-unused-vars)              | `⚠️ Warning`  | [Documentation](https://eslint.org/docs/rules/no-unused-vars)                |
| `no-useless-backreference`      | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-useless-backreference)      |
| `no-useless-catch`              | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-useless-catch)              |
| `no-useless-escape`             | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-useless-escape)             |
| `no-with`                       | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-with)                       |
| `require-yield`                 | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/require-yield)                 |
| `use-isnan`                     | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/use-isnan)                     |
| `valid-typeof`                  | [Documentation](https://eslint.org/docs/rules/valid-typeof)                | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/valid-typeof)                  |
| `import/order`                  | -                                                                          | `⚠️ Warning`  | External rule                                                                |
| `import/no-duplicates`          | Warn                                                                       | `⚠️ Warning`  | External rule                                                                |
| `import/named`                  | Error                                                                      | `🚫 Error`    | External rule                                                                |
| `import/export`                 | Error                                                                      | `🚫 Error`    | External rule                                                                |
| `prettier/prettier`             | Warn                                                                       | `⚠️ Warning`  | External rule                                                                |
| `no-lonely-if`                  | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-lonely-if)                  |
| `linebreak-style`               | Unix                                                                       | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/linebreak-style)               |
| `quotes`                        | Double                                                                     | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/quotes)                        |
| `semi`                          | Always                                                                     | `⚠️ Warning`  | [Documentation](https://eslint.org/docs/rules/semi)                          |
| `comma-dangle`                  | [Documentation](https://eslint.org/docs/rules/comma-dangle)                | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/comma-dangle)                  |
| `no-eval`                       | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-eval)                       |
| `func-names`                    | As-needed                                                                  | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/func-names)                    |
| `camelcase`                     | [Documentation](https://eslint.org/docs/rules/camelcase)                   | `⚠️ Warning`  | [Documentation](https://eslint.org/docs/rules/camelcase)                     |
| `prefer-arrow-callback`         | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/prefer-arrow-callback)         |
| `block-spacing`                 | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/block-spacing)                 |
| `comma-spacing`                 | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/comma-spacing)                 |
| `keyword-spacing`               | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/keyword-spacing)               |
| `space-infix-ops`               | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/space-infix-ops)               |
| `space-unary-ops`               | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/space-unary-ops)               |
| `brace-style`                   | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/brace-style)                   |
| `object-curly-spacing`          | Always                                                                     | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/object-curly-spacing)          |
| `space-before-function-paren`   | [Documentation](https://eslint.org/docs/rules/space-before-function-paren) | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/space-before-function-paren)   |
| `space-in-parens`               | Never                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/space-in-parens)               |
| `array-bracket-spacing`         | Never                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/array-bracket-spacing)         |
| `template-curly-spacing`        | Never                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/template-curly-spacing)        |
| `computed-property-spacing`     | Never                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/computed-property-spacing)     |
| `no-use-before-define`          | [Documentation](https://eslint.org/docs/rules/no-use-before-define)        | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-use-before-define)          |
| `no-label-var`                  | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-label-var)                  |
| `no-undefined`                  | Off                                                                        | `💡 Disabled` | [Documentation](https://eslint.org/docs/rules/no-undefined)                  |
| `complexity`                    | 20                                                                         | `⚠️ Warning`  | [Documentation](https://eslint.org/docs/rules/complexity)                    |
| `no-alert`                      | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/no-alert)                      |
| `require-await`                 | Off                                                                        | `💡 Disabled` | [Documentation](https://eslint.org/docs/rules/require-await)                 |
| `yoda`                          | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/yoda)                          |
| `jsx-quotes`                    | Prefer-double                                                              | `💡 Disabled` | [Documentation](https://eslint.org/docs/rules/jsx-quotes)                    |
| `unicode-bom`                   | Never                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/unicode-bom)                   |
| `no-process-env`                | Off                                                                        | `💡 Disabled` | [Documentation](https://eslint.org/docs/rules/no-process-env)                |
| `no-process-exit`               | Off                                                                        | `💡 Disabled` | [Documentation](https://eslint.org/docs/rules/no-process-exit)               |
| `global-require`                | Error                                                                      | `🚫 Error`    | [Documentation](https://eslint.org/docs/rules/global-require)                |
<!--END_SECTION:eslint-->

---

## 📝 [`@igorkowalczyk/renovate-config`](/packages/renovate-config/)

> [!WARNING]
> This is not a package - it is a configuration preset!

### 🔩 Usage
- In your `renovate.json` file, add the following:
```json
{
 "extends": ["github>igorkowalczyk/shared-configs//packages/renovate-config/index.json"]
}
```
