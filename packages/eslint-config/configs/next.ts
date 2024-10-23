import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import type { Linter } from "eslint";
import { composer, mergeConfigs } from "eslint-flat-config-utils";
import globals from "globals";

const compat = new FlatCompat();
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
 ...fixupConfigRules(compat.extends("plugin:@next/next/core-web-vitals"))
);

export default (await composer(mergedConfigs)
 .renamePlugins({
  "@next/next": "next",
 })
 .overrideRules({
  "@next/next/no-html-link-for-pages": "off",
  "@next/next/no-img-element": "error",
 })) satisfies Linter.Config[];
