import { type Linter } from "eslint";
/* @ts-expect-error-next-line Waiting for types to be updated */
import tailwindPlugin from "eslint-plugin-tailwindcss";

export default [
 {
  name: "@igorkowalczyk/eslint-config/tailwindcss",
  ...tailwindPlugin.configs["flat/recommended"],
 },
] as Linter.FlatConfig[];
