import { readdirSync } from "node:fs";
import { basename } from "node:path";
import rollupPluginCommonjs from "@rollup/plugin-commonjs";
import rollupPluginNodeResolve from "@rollup/plugin-node-resolve";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";
import rollupPluginAutoExternal from "rollup-plugin-auto-external";

const configDir = "configs/";
const files = readdirSync(configDir);

const defaultConfig: Partial<RollupOptions> = {
 output: {
  sourcemap: false,
  exports: "default",
  dir: "dist",
 },
 treeshake: {
  annotations: true,
  moduleSideEffects: [],
  propertyReadSideEffects: false,
  unknownGlobalSideEffects: false,
 },
 plugins: [
  rollupPluginAutoExternal(),
  rollupPluginNodeResolve(),
  rollupPluginCommonjs(),
  rollupPluginTypescript({
   tsconfig: "tsconfig.json",
  }),
 ],

 // Due to the way the eslint-plugin-prettier/recommended config is structured, it needs to be included in the external array
 external: ["eslint-plugin-prettier/recommended"],
};

function getConfig(filename: string): RollupOptions {
 const name = basename(filename, ".ts");

 return {
  ...defaultConfig,
  input: `${configDir}${filename}`,
  output: [
   {
    ...defaultConfig.output,
    entryFileNames: `esm/${name}.js`,
    format: "esm",
   },
   // {
   //  ...defaultConfig.output,
   //  entryFileNames: `cjs/${name}.cjs`,
   //  format: "cjs",
   // },
  ],
 };
}

export default files.map(getConfig);
