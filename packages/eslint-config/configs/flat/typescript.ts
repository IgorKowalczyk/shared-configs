import tseslint from "typescript-eslint";
import { type Linter } from "eslint";

export default tseslint.config(...tseslint.configs.recommended) as Linter.FlatConfig[];
