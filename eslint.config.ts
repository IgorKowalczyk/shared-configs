import baseConfig from "./packages/eslint-config/configs/base";
import prettierConfig from "./packages/eslint-config/configs/prettier";
import typescriptConfig from "./packages/eslint-config/configs/typescript";

export default [
  // Prettier
  ...baseConfig,
  ...typescriptConfig,
  ...prettierConfig,
];
