import { composer } from "eslint-flat-config-utils";
import eslintPluginAstro from "eslint-plugin-astro";

export default await composer(eslintPluginAstro.configs["flat/recommended"]).prepend({
 name: "@igorkowalczyk/eslint-config/astro",
});
