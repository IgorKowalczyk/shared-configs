import nodePluginRecommendedConfig from "eslint-plugin-n";

export default [
 nodePluginRecommendedConfig.configs["flat/recommended"],
 {
  rules: {
   "n/shebang": "off",
  },
  languageOptions: {
   globals: {
    ...globals.node,
   },
  },
 },
];
