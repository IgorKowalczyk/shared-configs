/* @ts-expect-error-next-line Waiting for types to be updated */
import reactPlugin from "eslint-plugin-react";
/* @ts-expect-error-next-line Waiting for types to be updated */
import hooksPlugin from "eslint-plugin-react-hooks";
/* @ts-expect-error-next-line Waiting for types to be updated */
import jsxa11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import { composer } from "eslint-flat-config-utils";

export default await composer({
 name: "@igorkowalczyk/eslint-config/react",
 files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
 plugins: {
  react: reactPlugin,
  "react-hooks": hooksPlugin,
  "jsx-a11y": jsxa11y,
 },
 rules: {
  ...reactPlugin.configs["recommended"].rules,
  ...reactPlugin.configs["jsx-runtime"].rules,
  ...jsxa11y.configs["recommended"].rules,
  ...hooksPlugin.configs["recommended"].rules,
 },
 languageOptions: {
  globals: {
   ...globals.browser,
  },
 },
})
 .renamePlugins({
  "jsx-a11y": "react-a11y",
 })
 .overrideRules({
  "react/no-unescaped-entities": "off",
 });
