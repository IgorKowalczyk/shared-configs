import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import type { Linter } from "eslint";
import { composer, mergeConfigs } from "eslint-flat-config-utils";
import globals from "globals";

const compat = new FlatCompat({
 baseDirectory: import.meta.dirname,
});

const mergedConfigs = mergeConfigs(
 {
  name: "@igorkowalczyk/eslint-config/next",
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  ignores: [".next/"],
  languageOptions: {
   globals: {
    ...globals.browser,
   },
  },
 },
 ...fixupConfigRules(compat.extends("plugin:@next/next/core-web-vitals", "plugin:@next/next/recommended"))
);

/**
 * ESLint configuration for Next.js - provides a ESLint configuration for Next.js projects, should be used with the react configuration.
 * @example
 * ```js
 * //
 *
 * import eslintConfig from "@igorkowalczyk/eslint-config";
 *
 * export default [
 *  ...eslintConfig.base,
 *  ...eslintConfig.node,
 * ...eslintConfig.react,
 * ...eslintConfig.next, // <- Next.js configuration
 * ];
 * ```
 */
export default (await composer(mergedConfigs)
 .overrideRules({
  "@next/next/no-html-link-for-pages": "off",
  "@next/next/no-img-element": "error",
 })
 .renamePlugins({
  "@next/next": "next",
 })) as Linter.Config[];
