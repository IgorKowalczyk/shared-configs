import type { Linter } from "eslint";
import { defineConfig } from "eslint/config";
import { composer } from "eslint-flat-config-utils";
import nodePluginRecommendedConfig from "eslint-plugin-n";

const nodeRecommendedConfig = defineConfig({
  plugins: {
    n: nodePluginRecommendedConfig,
  },
  extends: ["n/recommended-module"],
  name: "@igorkowalczyk/eslint-config/node",
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
  })
  .override(0, {
    name: "@igorkowalczyk/eslint-config/node/base",
  })) as Linter.Config[];
