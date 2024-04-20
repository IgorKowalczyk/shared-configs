import eslintPluginAstro from "eslint-plugin-astro";
import { type Linter } from "eslint";

export default [...eslintPluginAstro.configs["flat/recommended"]] as Linter.FlatConfig[];
