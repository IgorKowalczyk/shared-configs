import eslintPluginAstro from "eslint-plugin-astro";

import { composer } from "eslint-flat-config-utils";

export default await composer(eslintPluginAstro.configs["flat/recommended"]).prepend({
 name: "@igorkowalczyk/eslint-config/astro",
});
