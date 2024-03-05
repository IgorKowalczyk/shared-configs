import eslintConfig from "./packages/eslint-config/dist/esm/flat/index.mjs";

export default [...eslintConfig.base, ...eslintConfig.node];
