import eslintConfig from "./packages/eslint-config/configs/flat/index.js";

export default [...eslintConfig.base, ...eslintConfig.node];
