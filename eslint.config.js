import eslintConfig from "./packages/eslint-config/dist/esm/flat/index.js";

export default [...eslintConfig.base, ...eslintConfig.node];
