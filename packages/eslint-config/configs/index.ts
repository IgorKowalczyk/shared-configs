import { type Linter } from "eslint";
/* eslint-disable node/no-missing-import */
import astroConfig from "./astro";
import baseConfig from "./base";
import nextConfig from "./next";
import nodeConfig from "./node";
import reactConfig from "./react";
import tailwindConfig from "./tailwindcss";
import typescriptConfig from "./typescript";
/* eslint-enable node/no-missing-import */

const configs: Record<string, Linter.FlatConfig | Linter.FlatConfig[]> = {
 base: baseConfig,
 node: nodeConfig,
 astro: astroConfig,
 next: nextConfig,
 react: reactConfig,
 typescript: typescriptConfig,
 tailwindcss: tailwindConfig,
};

export default configs;
