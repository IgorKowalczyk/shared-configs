import eslintConfig from "./packages/eslint-config/flat.js";

export default [
 ...eslintConfig,
 {
  files: ["**/*.{js,mjs}"],
 },
];
