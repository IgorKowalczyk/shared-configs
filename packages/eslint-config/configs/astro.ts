import type { Linter } from "eslint";
import { mergeConfigs, composer } from "eslint-flat-config-utils";
import eslintPluginAstro from "eslint-plugin-astro";

const mergedAstroConfig = mergeConfigs(...eslintPluginAstro.configs.recommended);

/**
 * ESLint configuration for Astro. This configuration extends the base configuration and adds Astro-specific rules. Should be used in conjunction with the other configurations in this package.
 *
 * @example
 * ```js
 * //
 *
 * import eslintConfig from "@igorkowalczyk/eslint-config";
 *
 * export default [
 * ...eslintConfig.base,
 * ...eslintConfig.typescript,
 * ...eslintConfig.astro, // <- Astro configuration
 * ];
 * ```
 */

export default (await composer(mergedAstroConfig) //
 .override("astro/recommended", {
  name: "@igorkowalczyk/eslint-config/astro",
 })) as Linter.Config[];
