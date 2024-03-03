import nodePluginRecommendedConfig from "eslint-plugin-n";
import globals from "globals";

export default Object.freeze([
 nodePluginRecommendedConfig.configs["flat/recommended"],
 {
  languageOptions: {
   globals: {
    ...globals.node,
   },
   sourceType: "module",
  },
  rules: {
   "n/shebang": "off",
  },
 },
]);
