import { type Linter } from "eslint";
import flatConfigBase from "./base";
import flatConfigNext from "./next";
import flatConfigNode from "./node";

const configs: Record<string, Linter.FlatConfig> = {
 base: flatConfigBase,
 next: flatConfigNext,
 node: flatConfigNode,

 // Todo: Add typescript and tailwindcss configs
 // typescript: flatConfigTypescript,
 // tailwindcss: flatConfigTailwindcss
};

export default configs;
