import { type Linter } from "eslint";
import baseConfig from "./base";
import nextConfig from "./next";
import nodeConfig from "./node";
import reactConfig from "./react";
import astroConfig from "./astro";
import typescriptConfig from "./typescript";
import tailwindConfig from "./tailwindcss";

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
