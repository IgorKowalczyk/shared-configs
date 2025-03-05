import eslintConfig from "./index";

export default [
 // Prettier
 ...eslintConfig.base,
 ...eslintConfig.astro,
 ...eslintConfig.node,
 ...eslintConfig.next,
 ...eslintConfig.react,
 ...eslintConfig.typescript,
 ...eslintConfig.prettier,
];
