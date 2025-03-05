import type { Linter } from "eslint";
import { composer, mergeConfigs } from "eslint-flat-config-utils";
import tseslint from "typescript-eslint";

const mergedTypescriptConfig = mergeConfigs(...tseslint.config(tseslint.configs.recommended, tseslint.configs.eslintRecommended));

/**
 * ESLint configuration for TypeScript. This configuration extends the base configuration and adds TypeScript-specific rules. Should be used in conjunction with the other configurations in this package.
 *
 * @example
 * ```js
 * //
 *
 * import eslintConfig from "@igorkowalczyk/eslint-config";
 *
 * export default [
 *  ...eslintConfig.base,
 *  ...eslintConfig.astro,
 *  ...eslintConfig.typescript, // <- TypeScript configuration
 * ];
 * ```
 */
export default (await composer(mergedTypescriptConfig)
 .override("typescript-eslint/eslint-recommended", {
  name: "@igorkowalczyk/eslint-config/typescript",
 })
 .overrideRules({
  "@typescript-eslint/no-unused-vars": [
   "error",
   {
    argsIgnorePattern: "^_",
    varsIgnorePattern: "^_",
    caughtErrorsIgnorePattern: "^_",
    destructuredArrayIgnorePattern: "^_",
   },
  ],
 })
 .renamePlugins({
  "@typescript-eslint": "typescript",
 })) as Linter.Config[];
