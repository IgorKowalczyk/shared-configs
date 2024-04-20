import eslintConfig from "./packages/eslint-config/dist/esm/index.js";

export default [
 // Prettier
 ...eslintConfig.base,
 ...eslintConfig.astro,
 ...eslintConfig.node,
 ...eslintConfig.next,
 ...eslintConfig.react,
 ...eslintConfig.tailwindcss,
 ...eslintConfig.typescript,
];

// import { antfu } from "@antfu/eslint-config";

// const configg = antfu({
//  react: true,
//  astro: true,
//  typescript: true,
// });

// console.log(await configg);

// export default configg;
