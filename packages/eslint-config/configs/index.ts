import type { Linter } from "eslint";
import astroConfig from "./astro";
import baseConfig from "./base";
import nextConfig from "./next";
import nodeConfig from "./node";
import prettierConfig from "./prettier";
import reactConfig from "./react";
import typescriptConfig from "./typescript";

const configs: Record<string, Linter.Config[]> = {
 base: baseConfig,
 node: nodeConfig,
 astro: astroConfig,
 next: nextConfig,
 react: reactConfig,
 typescript: typescriptConfig,
 prettier: prettierConfig,
};

export default configs;
