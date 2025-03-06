import eslintConfig from "@igorkowalczyk/eslint-config";

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
