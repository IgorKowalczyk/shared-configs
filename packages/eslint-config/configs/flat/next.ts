/* @ts-expect-error-next-line Waiting for types to be updated */
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";
import { type Linter } from "eslint";

export default [
 {
  name: "@igorkowalczyk/eslint-config/flat/next",
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  plugins: {
   "@next/next": nextPlugin,
  },
  rules: {
   ...nextPlugin.configs["recommended"].rules,
   ...nextPlugin.configs["core-web-vitals"].rules,
   "@next/next/no-img-element": "error",
   "@next/next/no-html-link-for-pages": "off",
  },
  languageOptions: {
   globals: {
    ...globals.browser,
   },
  },
 },
] as Linter.FlatConfig[];
