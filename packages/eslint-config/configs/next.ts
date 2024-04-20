/* @ts-expect-error-next-line Waiting for types to be updated */
import nextPlugin from "@next/eslint-plugin-next";
import { composer } from "eslint-flat-config-utils";
import globals from "globals";

export default await composer({
 name: "@igorkowalczyk/eslint-config/next",
 files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
 plugins: {
  "@next/next": nextPlugin,
 },
 rules: {
  ...nextPlugin.configs["recommended"].rules,
  ...nextPlugin.configs["core-web-vitals"].rules,
 },
 languageOptions: {
  globals: {
   ...globals.browser,
  },
 },
})
 .renamePlugins({
  "@next/next": "next",
 })
 .overrideRules({
  "@next/next/no-html-link-for-pages": "off",
  "@next/next/no-img-element": "error",
 });
