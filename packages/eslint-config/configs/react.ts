/* @ts-expect-error-next-line Waiting for types to be updated */
import jsxa11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import { composer } from "eslint-flat-config-utils";
import eslintReact from "@eslint-react/eslint-plugin";
import { Linter } from "eslint";

export default await composer(
 {
  name: "@igorkowalczyk/eslint-config/react",
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  ...(eslintReact.configs.recommended as unknown as Linter.FlatConfig[]),
  languageOptions: {
   globals: {
    ...globals.browser,
   },
  },
 },
 {
  name: "@igorkowalczyk/eslint-config/react/jsx-a11y",
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  plugins: {
   "jsx-a11y": jsxa11y,
  },
  rules: {
   ...jsxa11y.configs["recommended"].rules,
  },
 }
)
 .renamePlugins({
  "jsx-a11y": "react-a11y",
 })
 .overrideRules({
  "react/no-unescaped-entities": "off",
 });
