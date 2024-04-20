/* @ts-expect-error-next-line Waiting for types to be updated */
import tailwindPlugin from "eslint-plugin-tailwindcss";
import { type Linter } from "eslint";

export default [
 {
  name: "@igorkowalczyk/eslint-config/flat/tailwindcss",
  plugins: {
   tailwindcss: tailwindPlugin,
  },
  rules: {
   ...tailwindPlugin.configs["recommended"].rules,
  },
 },
] as Linter.FlatConfig[];
