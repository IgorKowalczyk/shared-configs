# 📦 [`@igorkowalczyk/eslint-config`](https://www.npmjs.com/package/@igorkowalczyk/eslint-config)

### 📥 Installation

```bash
npm install --save-dev @igorkowalczyk/eslint-config
yarn add --dev @igorkowalczyk/eslint-config
pnpm install --save-dev @igorkowalczyk/eslint-config
```

### 🔩 Usage

```js
// .eslintrc.js
module.exports = {
 extends: ["@igorkowalczyk/eslint-config"],
};
```

### ⚙️ Rules overview

<!--START_SECTION:eslint-->

| Rule                          | Style                                                                      | Type          | Documentation                                                              |
| ----------------------------- | -------------------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------- |
| `linebreak-style`             | Unix                                                                       | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/linebreak-style)             |
| `quotes`                      | Double                                                                     | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/quotes)                      |
| `semi`                        | Always                                                                     | ⚠️ `Warning`  | [Documentation](https://eslint.org/docs/rules/semi)                        |
| `comma-dangle`                | [Documentation](https://eslint.org/docs/rules/comma-dangle)                | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/comma-dangle)                |
| `no-eval`                     | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-eval)                     |
| `func-names`                  | As-needed                                                                  | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/func-names)                  |
| `camelcase`                   | [Documentation](https://eslint.org/docs/rules/camelcase)                   | ⚠️ `Warning`  | [Documentation](https://eslint.org/docs/rules/camelcase)                   |
| `no-unused-vars`              | [Documentation](https://eslint.org/docs/rules/no-unused-vars)              | ⚠️ `Warning`  | [Documentation](https://eslint.org/docs/rules/no-unused-vars)              |
| `import/order`                | -                                                                          | ⚠️ `Warning`  | External rule                                                              |
| `prefer-arrow-callback`       | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/prefer-arrow-callback)       |
| `block-spacing`               | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/block-spacing)               |
| `comma-spacing`               | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/comma-spacing)               |
| `keyword-spacing`             | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/keyword-spacing)             |
| `space-infix-ops`             | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/space-infix-ops)             |
| `space-unary-ops`             | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/space-unary-ops)             |
| `brace-style`                 | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/brace-style)                 |
| `object-curly-spacing`        | Always                                                                     | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/object-curly-spacing)        |
| `space-before-function-paren` | [Documentation](https://eslint.org/docs/rules/space-before-function-paren) | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/space-before-function-paren) |
| `space-in-parens`             | Never                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/space-in-parens)             |
| `array-bracket-spacing`       | Never                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/array-bracket-spacing)       |
| `template-curly-spacing`      | Never                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/template-curly-spacing)      |
| `computed-property-spacing`   | Never                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/computed-property-spacing)   |
| `no-use-before-define`        | [Documentation](https://eslint.org/docs/rules/no-use-before-define)        | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-use-before-define)        |
| `no-label-var`                | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-label-var)                |
| `no-undef`                    | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-undef)                    |
| `no-undefined`                | Off                                                                        | 💡 `Disabled` | [Documentation](https://eslint.org/docs/rules/no-undefined)                |
| `complexity`                  | 20                                                                         | ⚠️ `Warning`  | [Documentation](https://eslint.org/docs/rules/complexity)                  |
| `no-alert`                    | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-alert)                    |
| `require-await`               | Off                                                                        | 💡 `Disabled` | [Documentation](https://eslint.org/docs/rules/require-await)               |
| `yoda`                        | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/yoda)                        |
| `no-empty`                    | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-empty)                    |
| `no-extra-semi`               | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-extra-semi)               |
| `valid-typeof`                | [Documentation](https://eslint.org/docs/rules/valid-typeof)                | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/valid-typeof)                |
| `jsx-quotes`                  | Prefer-double                                                              | 💡 `Disabled` | [Documentation](https://eslint.org/docs/rules/jsx-quotes)                  |
| `unicode-bom`                 | Never                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/unicode-bom)                 |
| `no-process-env`              | Off                                                                        | 💡 `Disabled` | [Documentation](https://eslint.org/docs/rules/no-process-env)              |
| `no-process-exit`             | Off                                                                        | 💡 `Disabled` | [Documentation](https://eslint.org/docs/rules/no-process-exit)             |
| `global-require`              | Error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/global-require)              |

<!--END_SECTION:eslint-->
