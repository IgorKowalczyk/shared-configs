import type { Linter } from "eslint";
import { mergeConfigs, composer, defineFlatConfig } from "eslint-flat-config-utils";
import eslintPluginAstro from "eslint-plugin-astro";

const mergedAstroConfig = defineFlatConfig({
  ...mergeConfigs(...eslintPluginAstro.configs["flat/recommended"]),
  name: "@igorkowalczyk/eslint-config/astro",
});

/**
 * ESLint configuration for Astro. This configuration extends the base configuration and adds Astro-specific rules. Should be used in conjunction with the other configurations in this package.
 *
 * @example
 * ```js
 * //
 *
 * import astroConfig from "@igorkowalczyk/eslint-config/astro";
 *
 * export default [
 *  ...baseConfig,
 *  ...reactConfig,
 *  ...astroConfig, // <- Astro configuration
 * ];
 * ```
 */

export default (await composer(mergedAstroConfig)) as unknown as Linter.Config[];
