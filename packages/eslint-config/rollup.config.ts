import { globSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import rollupPluginCommonjs from "@rollup/plugin-commonjs";
import rollupPluginNodeResolve from "@rollup/plugin-node-resolve";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";
import rollupPluginAutoExternal from "rollup-plugin-auto-external";

const configFiles = globSync("configs/**/*.ts");
const files = Object.fromEntries(configFiles.map((file) => [path.relative("configs", file.slice(0, file.length - path.extname(file).length)), fileURLToPath(new URL(file, import.meta.url))]));

const defaultConfig = {
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
   include: ["configs/**/*.ts", "index.ts"],
   declaration: true,
   declarationDir: "dist/types",
   outDir: "dist",
  }),
 ],

 // Due to the way the eslint-plugin-prettier/recommended config is structured, it needs to be included in the external array
 external: ["eslint-plugin-prettier/recommended"],
} satisfies Partial<RollupOptions>;

const config = [
 {
  ...defaultConfig,
  output: [
   {
    ...defaultConfig.output,
    entryFileNames: "configs/[name].js",
    format: "esm",
   },

   // Uncomment the following block if you need CommonJS output as well
   // {
   //  ...defaultConfig.output,
   //  entryFileNames: "configs/[name].cjs",
   //  format: "cjs",
   // },
  ],
  input: files,
 },
 {
  ...defaultConfig,
  external: [
   // prettier
   "./configs/astro",
   "./configs/base",
   "./configs/next",
   "./configs/node",
   "./configs/prettier",
   "./configs/react",
   "./configs/typescript",
  ],
  output: {
   ...defaultConfig.output,
   entryFileNames: "index.js",
   format: "esm",
  },
  input: "index.ts",
 },
];

export default config;
