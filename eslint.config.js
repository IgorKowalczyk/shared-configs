import eslintConfig from "./packages/eslint-config/configs/flat/index.ts";

export default [...eslintConfig.base, ...eslintConfig.node];
