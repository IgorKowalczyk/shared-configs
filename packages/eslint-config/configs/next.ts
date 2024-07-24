import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import { composer } from "eslint-flat-config-utils";
import globals from "globals";

const compat = new FlatCompat();

export default await composer({
 name: "@igorkowalczyk/eslint-config/next",
 files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
 ignores: [".next/"],
 ...fixupConfigRules(compat.extends("plugin:@next/next/core-web-vitals")),
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
