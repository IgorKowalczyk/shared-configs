import type { Linter } from "eslint";
import { composer } from "eslint-flat-config-utils";
import prettierRecommendedConfig from "eslint-plugin-prettier/recommended";

export default (await composer({
 name: "@igorkowalczyk/eslint-config/base/prettier",
 ...prettierRecommendedConfig,
})) as Linter.Config[];
