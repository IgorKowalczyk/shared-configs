import { type Linter } from "eslint";
import { composer } from "eslint-flat-config-utils";
import tseslint from "typescript-eslint";

const typescriptConfigs = tseslint.configs.recommended as Linter.FlatConfig[];

const flattenedConfig = typescriptConfigs.reduce((acc, curr) => {
 const mergedConfig = { ...acc, ...curr };

 if (acc.rules && curr.rules) mergedConfig.rules = { ...acc.rules, ...curr.rules };

 return mergedConfig;
}, {} as Linter.FlatConfig);

export default await composer(flattenedConfig)
 .renamePlugins({
  "@typescript-eslint": "typescript",
 })
 .override("typescript-eslint/recommended", {
  name: "@igorkowalczyk/eslint-config/node",
 });
