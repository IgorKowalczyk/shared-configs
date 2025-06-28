import type { Linter } from "eslint";
import { composer } from "eslint-flat-config-utils";
import nodePluginRecommendedConfig from "eslint-plugin-n";

/**
 * ESLint configuration for Node.js. Provides a configuration for Node.js scripts and apps.
 *
 * @example
 * ```js
 * //
 *
 * import eslintConfig from "@igorkowalczyk/eslint-config";
 *
 * export default [
 *  ...eslintConfig.base,
 *  ...eslintConfig.node, // <- Node.js configuration
 * ];
 * ```
 */
export default (await composer({
 ...nodePluginRecommendedConfig.configs["flat/recommended-script"],
 name: "@igorkowalczyk/eslint-config/node",
 languageOptions: {
  parserOptions: {
   sourceType: "module",
  },
 },
})
 .overrideRules({
  "n/no-unsupported-features/node-builtins": "off",
  "n/no-missing-import": "off",
  "n/no-extraneous-import": "off",
  "n/no-unpublished-import": "off",
 })
 .renamePlugins({
  n: "node",
 })) as unknown as Linter.Config[];
