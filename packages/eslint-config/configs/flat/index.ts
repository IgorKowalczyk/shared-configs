import { type Linter } from "eslint";
import baseConfig from "./base";
import nextConfig from "./next";
import nodeConfig from "./node";
import reactConfig from "./react";
import astroConfig from "./astro";
import typescriptConfig from "./typescript";
import tailwindConfig from "./tailwind";

const configs = {
 base: baseConfig as Linter.FlatConfig[],
 node: nodeConfig as Linter.FlatConfig[],
 astro: astroConfig as Linter.FlatConfig[],
 next: nextConfig as Linter.FlatConfig[],
 react: reactConfig as Linter.FlatConfig[],
 typescript: typescriptConfig as Linter.FlatConfig[],
 tailwind: tailwindConfig as Linter.FlatConfig[],
};

export default configs;
