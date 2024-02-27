import nodePluginRecommendedConfig from "eslint-plugin-n";
import globals from "globals";

export default Object.freeze([
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
]);
