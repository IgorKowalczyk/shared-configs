import type { Linter } from "eslint";
import { composer } from "eslint-flat-config-utils";
import nodePluginRecommendedConfig from "eslint-plugin-n";
import globals from "globals";

export default (await composer({
 ...nodePluginRecommendedConfig.configs["flat/recommended"],
 name: "@igorkowalczyk/eslint-config/node",
 languageOptions: {
  globals: {
   ...globals.node,
   ...globals.nodeBuiltin,
  },
  sourceType: "module",
 },
})
 .overrideRules({
  "n/no-unsupported-features/node-builtins": "off",
  "n/no-missing-import": "off",
  "n/no-extraneous-import": "off",
  "n/no-unpublished-import": "off",
 })
 .renamePlugins({
  n: "node",
 })) satisfies Linter.Config[];
