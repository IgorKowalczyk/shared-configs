![ESLint config](https://github.com/IgorKowalczyk/shared-configs/assets/49127376/0455914b-4614-4f90-8348-d8229ab2d9f0)

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