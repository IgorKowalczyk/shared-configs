![ESLint config](https://github.com/IgorKowalczyk/shared-configs/assets/49127376/0455914b-4614-4f90-8348-d8229ab2d9f0)

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
<!-- ### ⚙️ Rules overview -->

<!--D-START_SECTION:eslint-->
<!--D-END_SECTION:eslint-->

<!-- begin auto-generated rules list -->
<!-- end auto-generated rules list -->