import type { Options } from "prettier";

const config: Options = {
 arrowParens: "always",
 bracketSpacing: true,
 embeddedLanguageFormatting: "auto",
 htmlWhitespaceSensitivity: "css",
 jsxSingleQuote: false,
 printWidth: 200000,
 proseWrap: "preserve",
 quoteProps: "as-needed",
 requirePragma: false,
 semi: true,
 singleQuote: false,
 tabWidth: 1,
 trailingComma: "es5",
 useTabs: false,
} satisfies Options;

export default config;
