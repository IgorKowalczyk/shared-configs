import eslintReact from "@eslint-react/eslint-plugin";
import { Linter } from "eslint";
import { composer, mergeConfigs } from "eslint-flat-config-utils";
/* @ts-expect-error-next-line Waiting for types to be updated */
import jsxa11y from "eslint-plugin-jsx-a11y";
/* @ts-expect-error-next-line Waiting for types to be updated */
import eslintReactOld from "eslint-plugin-react";
import globals from "globals";

const mergedReactConfigs = mergeConfigs(
 {
  name: "@igorkowalczyk/eslint-config/react/base",
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  ...(eslintReact.configs.recommended as unknown as Linter.Config[]),
  languageOptions: {
   globals: {
    ...globals.serviceworker,
    ...globals.browser,
   },
   parserOptions: {
    ecmaFeatures: {
     jsx: true,
    },
   },
  },
 },
 {
  plugins: {
   react: eslintReactOld,
  },
  rules: {
   "react/jsx-no-undef": 2,
   "react/jsx-uses-react": 2,
   "react/jsx-uses-vars": 2,
   "react/no-find-dom-node": 2,
  },
 }
);

export default await composer(mergedReactConfigs, {
 plugins: {
  "jsx-a11y": jsxa11y,
 },
 ...jsxa11y.flatConfigs.recommended,
 languageOptions: {
  ...jsxa11y.flatConfigs.recommended.languageOptions,
  globals: {
   ...globals.serviceworker,
   ...globals.browser,
  },
 },
})
 .renamePlugins({
  "jsx-a11y": "react-a11y",
 })
 .override("jsx-a11y/recommended", {
  name: "@igorkowalczyk/eslint-config/react/jsx-a11y",
 })
 .overrideRules({
  "@eslint-react/no-unstable-default-props": "off",
  "@eslint-react/dom/no-dangerously-set-innerhtml": "off",
  "@eslint-react/no-nested-components": "off",
 });
