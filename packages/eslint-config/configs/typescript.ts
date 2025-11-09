import type { Linter } from "eslint";
import { composer, defineFlatConfig, mergeConfigs } from "eslint-flat-config-utils";
import tseslint from "typescript-eslint";

const mergedTsConfig = defineFlatConfig({
 ...mergeConfigs(...tseslint.configs.recommended),
 name: "@igorkowalczyk/eslint-config/typescript",
});

/**
 * ESLint configuration for TypeScript. This configuration extends the base configuration and adds TypeScript-specific rules. Should be used in conjunction with the other configurations in this package.
 *
 * @example
 * ```js
 * //
 *
 * import typescriptConfig from "@igorkowalczyk/eslint-config/typescript";
 *
 * export default [
 *  ...baseConfig,
 *  ...reactConfig,
 *  ...typescriptConfig, // <- TypeScript configuration
 * ];
 * ```
 */
export default (await composer(mergedTsConfig) //
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
 })) as unknown as Linter.Config[];
