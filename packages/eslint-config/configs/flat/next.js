import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import nextPlugin from "eslint-plugin-next";

export default [
 {
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  plugins: {
   react: reactPlugin,
   "react-hooks": hooksPlugin,
   "@next/next": nextPlugin,
  },
  rules: {
   ...reactPlugin.configs["jsx-runtime"].rules,
   ...hooksPlugin.configs.recommended.rules,
   ...nextPlugin.configs.recommended.rules,
   ...nextPlugin.configs["core-web-vitals"].rules,
   "@next/next/no-img-element": "error",
   "@next/next/no-html-link-for-pages": "off",
   "react/no-unescaped-entities": "off",
  },
  languageOptions: {
   globals: {
    ...globals.browser,
   },
  },
 },
];
