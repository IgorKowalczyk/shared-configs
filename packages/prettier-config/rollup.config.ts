import rollupPluginCommonjs from "@rollup/plugin-commonjs";
import rollupPluginTypescript from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";

const defaultConfig = {
  input: "index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      compact: true,
    },
    {
      file: "dist/index.cjs",
      format: "cjs",
      compact: true,
    },
  ],
  treeshake: {
    annotations: true,
    moduleSideEffects: [],
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false,
  },
  plugins: [
    rollupPluginCommonjs(),
    rollupPluginTypescript({
      tsconfig: "tsconfig.json",
      include: ["index.ts"],
      declaration: true,
      declarationDir: "dist",
      outDir: "dist",
    }),
  ],
} satisfies Partial<RollupOptions>;

export default defaultConfig;
