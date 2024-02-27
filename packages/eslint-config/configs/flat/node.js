import nodePluginRecommendedConfig from "eslint-plugin-n";

export default Object.freeze([
 nodePluginRecommendedConfig.configs["flat/recommended"],
 {
  rules: {
   "n/shebang": "off",
  },
 },
]);
