import baseConfig from "./packages/eslint-config/configs/base";
import typescriptConfig from "./packages/eslint-config/configs/typescript";
import prettierConfig from "./packages/eslint-config/configs/prettier";

export default [
 // Prettier
 ...baseConfig,
 ...typescriptConfig,
 ...prettierConfig,
];
