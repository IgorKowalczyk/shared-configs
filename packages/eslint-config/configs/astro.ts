import type { Linter } from "eslint";
import { mergeConfigs, composer, defineFlatConfig } from "eslint-flat-config-utils";
import eslintPluginAstro from "eslint-plugin-astro";

const mergedAstroConfig = defineFlatConfig({
 /* @ts-expect-error - Typing issues */
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
 * import eslintConfig from "@igorkowalczyk/eslint-config";
 *
 * export default [
 * ...eslintConfig.base,
 * ...eslintConfig.typescript,
 * ...eslintConfig.astro, // <- Astro configuration
 * ];
 * ```
 */

export default (await composer(mergedAstroConfig)) as unknown as Linter.Config[];
