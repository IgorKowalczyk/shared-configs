import { mergeConfigs, composer } from "eslint-flat-config-utils";
import eslintPluginAstro from "eslint-plugin-astro";

const mergedAstroConfig = mergeConfigs(...eslintPluginAstro.configs["flat/recommended"]);

export default await composer(mergedAstroConfig).override("astro/recommended", {
 name: "@igorkowalczyk/eslint-config/astro",
});
