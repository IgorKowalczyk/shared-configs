import { RollupOptions } from "rollup";
import rollupPluginNodeResolve from "@rollup/plugin-node-resolve";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import rollupPluginCommonjs from "@rollup/plugin-commonjs";
import rollupPluginAutoExternal from "rollup-plugin-auto-external";
import { readdirSync } from "node:fs";
import { join, dirname, basename } from "node:path";

const configDir = "./configs/";
const types = ["flat", "legacy"];

let configFiles: ReadonlyArray<string> = [];

types.forEach((type) => {
 const dir = join(configDir, type);
 const files = readdirSync(dir).map((file) => join(type, file));
 configFiles = [...configFiles, ...files];
});

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
 const configDirname = dirname(filename);
 const directory = name === "index" ? configDirname : `${configDirname}/configs`;

 return {
  ...defaultConfig,
  input: `${configDir}${filename}`,
  output: [
   {
    ...defaultConfig.output,
    entryFileNames: `esm/${directory}/${name}.js`,
    format: "esm",
   },
   {
    ...defaultConfig.output,
    entryFileNames: `cjs/${directory}/${name}.cjs`,
    format: "cjs",
   },
  ],
 };
}

export default configFiles.map(getConfig);
