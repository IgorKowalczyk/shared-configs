import type { Linter } from "eslint";
import nextVitals from "eslint-config-next/core-web-vitals";
import { defineFlatConfig } from "eslint-flat-config-utils";
import { composer } from "eslint-flat-config-utils";

const nextConfig = defineFlatConfig(nextVitals);

/**
 * ESLint configuration for Next.js - provides a ESLint configuration for Next.js projects, should be used with the react configuration.
 * @example
 * ```js
 * //
 *
 * import nextConfig from "@igorkowalczyk/eslint-config/next";
 *
 * export default [
 *  ...baseConfig,
 *  ...nodeConfig,
 *  ...reactConfig,
 *  ...nextConfig, // <- Next.js configuration
 * ];
 * ```
 */

export default (await composer(nextConfig)
 .override("next", {
  name: "@igorkowalczyk/eslint-config/next",
 })
 .override("next/typescript", {
  name: "@igorkowalczyk/eslint-config/next/typescript",
 })
 .override(2, {
  name: "@igorkowalczyk/eslint-config/next/ignores",
 })
 .override("next/core-web-vitals", {
  name: "@igorkowalczyk/eslint-config/next/core-web-vitals",
 })
 .overrideRules({
  "@next/next/no-html-link-for-pages": "off",
  "@next/next/no-img-element": "error",
 })
 .renamePlugins({
  "@next/next": "next",
 })) as unknown as Linter.Config[];
