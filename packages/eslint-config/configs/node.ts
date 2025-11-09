import type { Linter } from "eslint";
import { defineConfig } from "eslint/config";
import { composer } from "eslint-flat-config-utils";
import nodePluginRecommendedConfig from "eslint-plugin-n";

const nodeRecommendedConfig = defineConfig({
  ...nodePluginRecommendedConfig.configs["flat/recommended-script"],
  name: "@igorkowalczyk/eslint-config/node",
  languageOptions: {
    parserOptions: {
      sourceType: "module",
    },
  },
});

/**
 * ESLint configuration for Node.js. Provides a configuration for Node.js scripts and apps.
 *
 * @example
 * ```js
 * //
 *
 * import nodeConfig from "@igorkowalczyk/eslint-config";
 *
 * export default [
 *  ...baseConfig,
 *  ...nodeConfig, // <- Node.js configuration
 * ];
 * ```
 */

export default (await composer(nodeRecommendedConfig)
  .overrideRules({
    "n/no-unsupported-features/node-builtins": "off",
    "n/no-missing-import": "off",
    "n/no-extraneous-import": "off",
    "n/no-unpublished-import": "off",
  })
  .renamePlugins({
    n: "node",
  })) as unknown as Linter.Config[];
