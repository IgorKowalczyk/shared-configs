import rollupPluginCommonjs from "@rollup/plugin-commonjs";
import rollupPluginNodeResolve from "@rollup/plugin-node-resolve";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";
import rollupPluginAutoExternal from "rollup-plugin-auto-external";
import { globby } from "globby";

const config = [
 {
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
    include: await globby(["configs/**/*.ts"]),
    declaration: true,
    rootDir: ".",
    declarationDir: "dist",
    outDir: "dist",
   }),
  ],
  input: await globby("configs/**/*.ts"),
  output: {
   sourcemap: false,
   exports: "auto",
   dir: "dist",
   preserveModules: true,
   preserveModulesRoot: ".",
   entryFileNames: "[name].js",
   format: "esm",
  },

  external: ["eslint-plugin-prettier/recommended", "eslint-config-next/core-web-vitals"],
 },
] satisfies RollupOptions[];

export default config;
