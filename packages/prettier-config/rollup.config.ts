import rollupPluginCommonjs from "@rollup/plugin-commonjs";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";

const defaultConfig: Partial<RollupOptions> = {
 input: "index.ts",
 output: [
  {
   file: "dist/mjs/index.js",
   format: "esm",
   compact: true,
  },
  {
   file: "dist/cjs/index.cjs",
   format: "cjs",
   compact: true,
  },
 ],

 plugins: [
  rollupPluginCommonjs(),
  rollupPluginTypescript({
   tsconfig: "tsconfig.json",
  }),
 ],
};

export default defaultConfig;
