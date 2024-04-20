import nodePluginRecommendedConfig from "eslint-plugin-n";
import { type Linter } from "eslint";

export default [nodePluginRecommendedConfig.configs["flat/recommended"]] as Linter.FlatConfig[];
