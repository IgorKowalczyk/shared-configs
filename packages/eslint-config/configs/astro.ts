import type { Linter } from "eslint";
import { composer, defineFlatConfig } from "eslint-flat-config-utils";
import eslintPluginAstro from "eslint-plugin-astro";

const astroConfigs = eslintPluginAstro.configs["flat/recommended"].map((config) =>
  defineFlatConfig({
    ...config,
    name: `@igorkowalczyk/eslint-config/astro/${config.name?.replace(/^astro\//u, "") ?? "unnamed"}`,
  })
);

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

export default (await composer(...astroConfigs)) as Linter.Config[];
