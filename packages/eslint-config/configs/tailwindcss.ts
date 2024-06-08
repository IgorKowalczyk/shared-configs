import { composer } from "eslint-flat-config-utils";
/* @ts-expect-error-next-line Waiting for types to be updated */
import tailwindPlugin from "eslint-plugin-tailwindcss";

export default await composer(tailwindPlugin.configs["flat/recommended"]).override("tailwindcss:base", {
 name: "@igorkowalczyk/eslint-config/tailwindcss",
});
