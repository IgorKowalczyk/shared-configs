import eslintConfig from "./packages/eslint-config/dist/esm/flat/index.js";

export default [
 // Prettier
 ...eslintConfig.base,
 ...eslintConfig.astro,
 ...eslintConfig.node,
 ...eslintConfig.next,
 ...eslintConfig.react,
 ...eslintConfig.tailwindcss,
 ...eslintConfig.typescript,
];
