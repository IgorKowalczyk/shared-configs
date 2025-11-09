import type { Linter } from "eslint";
import { composer, defineFlatConfig } from "eslint-flat-config-utils";
import prettierRecommendedConfig from "eslint-plugin-prettier/recommended";

const mergedPrettierConfig = defineFlatConfig({
 ...prettierRecommendedConfig,
 name: "@igorkowalczyk/eslint-config/prettier",
});

/**
 * ESLint configuration for Prettier. This configuration disables all rules that might conflict with Prettier.
 *
 * THIS CONFIGURATION SHOULD BE USED LAST IN THE CONFIGURATION ARRAY - OTHERWISE, IT MIGHT NOT WORK AS EXPECTED.
 *
 * @see https://prettier.io/docs/en/integrating-with-linters.html#recommended-configuration
 *
 * @example
 * ```js
 * //
 *
 * import prettierConfig from "@igorkowalczyk/eslint-config/prettier";
 *
 * export default [
 *  ...baseConfig,
 *  ...reactConfig,
 *  ...typescriptConfig,
 *  ...prettierConfig, // <- Prettier configuration
 * ];
 * ```
 */
export default (await composer(mergedPrettierConfig)) as unknown as Linter.Config[];
