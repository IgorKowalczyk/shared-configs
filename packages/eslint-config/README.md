![ESLint config](https://github.com/IgorKowalczyk/shared-configs/assets/49127376/0455914b-4614-4f90-8348-d8229ab2d9f0)

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

Basic configuration includes ESLint recommended rules, Prettier plugin and recommended rules for Prettier. 

```js
// eslint.config.js
import eslintConfig from "@igorkowalczyk/eslint-config";

export default [
 ...eslintConfig.base
];
```

#### [Node.js](https://nodejs.org/) configuration

Configuration includes recommended rules for Node.js projects.

```js
// eslint.config.js
import eslintConfig from "@igorkowalczyk/eslint-config";

export default [
 ...eslintConfig.node
];
```

#### [TypeScript](https://www.typescriptlang.org/) configuration

Configuration includes TypeScript parser and recommended rules for TypeScript projects.

```js
// eslint.config.js
import eslintConfig from "@igorkowalczyk/eslint-config";

export default [
 ...eslintConfig.typescript
];
```

#### [React](https://react.dev/) configuration

Configuration includes recommended rules for React components.

```js
// eslint.config.js
import eslintConfig from "@igorkowalczyk/eslint-config";

export default [
 ...eslintConfig.react
];
```

#### [Next.js](https://nextjs.org) configuration

Configuration includes recommended rules for Next.js projects.

```js
// eslint.config.js
import eslintConfig from "@igorkowalczyk/eslint-config";

export default [
 ...eslintConfig.next
];
```

#### [Tailwind CSS](https://tailwindcss.com) configuration

Configuration includes recommended rules for Tailwind CSS projects like sorting classes.

```js
// eslint.config.js
import eslintConfig from "@igorkowalczyk/eslint-config";

export default [
 ...eslintConfig.tailwindcss
];
```

#### [Astro](https://astro.build) configuration

Configuration includes Astro parser and recommended rules for Astro projects.

```js
// eslint.config.js
import eslintConfig from "@igorkowalczyk/eslint-config";

export default [
 ...eslintConfig.astro
];
```

### 🔗 Chaining configurations

You can also chain multiple configurations together, for example, to use TypeScript and React configurations together.

```js
// eslint.config.js
import eslintConfig from "@igorkowalczyk/eslint-config";

export default [
 ...eslintConfig.base,
 ...eslintConfig.typescript,
 ...eslintConfig.react
];
```

### ⚙️ Rules overview

You can find the full list of rules in the [ESLint config inspector](https://shared-configs.vercel.app/).