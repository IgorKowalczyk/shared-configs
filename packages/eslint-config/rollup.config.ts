import rollupPluginCommonjs from "@rollup/plugin-commonjs";
import rollupPluginNodeResolve from "@rollup/plugin-node-resolve";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";
import rollupPluginAutoExternal from "rollup-plugin-auto-external";

const defaultConfig = {
 output: {
  sourcemap: false,
  exports: "default",
  dir: "dist",
  preserveModules: true,
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
   declarationDir: "dist",
   outDir: "dist",
  }),
 ],

 external: ["eslint-plugin-prettier/recommended"],
} satisfies Partial<RollupOptions>;

const config = [
 {
  ...defaultConfig,
  external: [
   // prettier
   ...defaultConfig.external,
  ],
  output: {
   ...defaultConfig.output,
   entryFileNames: "[name].js",
   format: "esm",
  },
  input: "index.ts",
 },
];

export default config;
