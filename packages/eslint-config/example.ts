import astroConfig from "./configs/astro";
import baseConfig from "./configs/base";
import nextConfig from "./configs/next";
import nodeConfig from "./configs/node";
import prettierConfig from "./configs/prettier";
import reactConfig from "./configs/react";
import typescriptConfig from "./configs/typescript";

const config = [
  // Prettier
  ...baseConfig,
  ...astroConfig,
  ...nodeConfig,
  ...nextConfig,
  ...reactConfig,
  ...typescriptConfig,
  ...prettierConfig,
];

export default config;
