/* @ts-expect-error-next-line Waiting for types to be updated */
import nodePluginRecommendedConfig from "eslint-plugin-n";
import globals from "globals";
import { type Linter } from "eslint";

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
   "n/no-process-exit": "off",
   "n/no-sync": "off",
   "n/no-unpublished-import": "off",
  },
 },
]) as Linter.FlatConfig;
