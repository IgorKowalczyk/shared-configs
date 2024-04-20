import { composer } from "eslint-flat-config-utils";
import nodePluginRecommendedConfig from "eslint-plugin-n";

export default await composer(nodePluginRecommendedConfig.configs["flat/recommended"])
 .renamePlugins({
  n: "node",
 })
 .override("node/flat/recommended-module", {
  name: "@igorkowalczyk/eslint-config/node",
 });
