import type { Linter } from "eslint";
import { composer } from "eslint-flat-config-utils";
import prettierRecommendedConfig from "eslint-plugin-prettier/recommended";

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
 * import eslintConfig from "@igorkowalczyk/eslint-config";
 *
 * export default [
 *  ...eslintConfig.base,
 *  ...eslintConfig.react,
 *  ...eslintConfig.typescript,
 * ...eslintConfig.prettier, // <- Prettier configuration
 * ];
 * ```
 */
export default (await composer({
 // prettier
 ...prettierRecommendedConfig,
 name: "@igorkowalczyk/eslint-config/prettier",
})) as Linter.Config[];
