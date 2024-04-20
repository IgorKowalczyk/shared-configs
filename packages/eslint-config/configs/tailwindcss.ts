/* @ts-expect-error-next-line Waiting for types to be updated */
import { type Linter } from "eslint";
import tailwindPlugin from "eslint-plugin-tailwindcss";

export default [
 {
  name: "@igorkowalczyk/eslint-config/tailwindcss",
  plugins: {
   tailwindcss: tailwindPlugin,
  },
  rules: {
   ...tailwindPlugin.configs["recommended"].rules,
  },
 },
] as Linter.FlatConfig[];
