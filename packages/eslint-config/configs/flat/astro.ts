import eslintPluginAstro from "eslint-plugin-astro";
import { type Linter } from "eslint";

export default [
 // Prettier
 ...eslintPluginAstro.configs["flat/recommended"],
] as Linter.FlatConfig[];
