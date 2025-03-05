import eslintReact from "@eslint-react/eslint-plugin";
import type { Linter } from "eslint";
import { composer, mergeConfigs } from "eslint-flat-config-utils";
import jsxa11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default (await composer({
  name: "@igorkowalczyk/eslint-config/react/base",
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  ...(eslintReact.configs.["recommended-typescript"] as unknown as Linter.Config[]),
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
 }, {
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
 .overrideRules({
  "@eslint-react/no-unstable-default-props": "off",
  "@eslint-react/dom/no-dangerously-set-innerhtml": "off",
  "@eslint-react/no-nested-components": "off",
  "@eslint-react/no-unstable-context-value": "off",
  "jsx-a11y/click-events-have-key-events": "off",
  "jsx-a11y/no-noninteractive-element-interactions": "off",
  "jsx-a11y/no-static-element-interactions": "off",
 })
 .override("jsx-a11y/recommended", {
  name: "@igorkowalczyk/eslint-config/react/a11y",
 })
 .override("@eslint-react/recommended", {
  name: "@igorkowalczyk/eslint-config/react/recommended",
 })
 .renamePlugins({
  "jsx-a11y": "react-a11y",
  // "@eslint-react": "react",
 })) satisfies Linter.Config[];
