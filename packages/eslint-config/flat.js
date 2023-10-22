import js from "@eslint/js";
import importRules from "eslint-plugin-import";
import prettierRules from "eslint-plugin-prettier";
import globals from "globals";

export default {
 plugins: {
  prettier: prettierRules,
  import: importRules,
 },
 languageOptions: {
  ecmaVersion: "latest",
  globals: {
   ...globals.browser,
   ...globals.node,
   ...globals.es2021,
   ...globals.commonjs,
  },
  sourceType: "module",
 },
 ignores: ["build/**", "dist/**", "coverage/**", "tmp/**"],
 rules: {
  // ESlint recommended rules
  ...js.configs.recommended.rules,

  // Disallow lonely 'if' statements
  "no-lonely-if": "error",

  // Enforce consistent line breaks
  "linebreak-style": ["error", "unix"],

  // Enforce consistent code formatting using Prettier
  "prettier/prettier": "warn",

  // Enforce the use of double quotes for consistency
  quotes: ["error", "double"],

  // Enforce semicolons at the end of statements
  semi: ["warn", "always"],

  // Enforce trailing commas in specific scenarios
  "comma-dangle": [
   "error",
   {
    arrays: "always-multiline",
    objects: "always-multiline",
    imports: "always-multiline",
    exports: "always-multiline",
    functions: "never",
   },
  ],

  // Disallow the use of eval()
  "no-eval": "error",

  // Enforce consistent function names, but allow anonymous functions
  "func-names": ["error", "as-needed"],

  // Enforce camelCase naming convention, except for destructuring
  camelcase: ["warn", { properties: "never", ignoreDestructuring: true }],

  // Warn about unused variables, ignoring variables starting with "_"
  "no-unused-vars": ["warn", { argsIgnorePattern: "^_", ignoreRestSiblings: true }],

  // Enforce consistent import order with specific grouping and sorting
  "import/order": [
   "warn",
   {
    groups: ["external", "internal", "parent", "sibling", "index", "builtin"],
    "newlines-between": "never",
    alphabetize: {
     order: "asc",
     caseInsensitive: true,
    },
   },
  ],

  // Enforce consistent spacing before and after keywords
  "prefer-arrow-callback": "error",

  // Enforce consistent spacing around blocks
  "block-spacing": "error",

  // Enforce consistent spacing around commas
  "comma-spacing": "error",

  // Enforce consistent spacing before and after keywords
  "keyword-spacing": "error",

  // Enforce consistent spacing before and after operators
  "space-infix-ops": "error",

  // Enforce consistent spacing before and after unary operators
  "space-unary-ops": "error",

  // Enforce consistent brace style for blocks
  "brace-style": "error",

  // Enforce consistent spacing inside braces
  "object-curly-spacing": ["error", "always"],

  // Enforce consistent spacing before function parentheses
  "space-before-function-paren": [
   "error",
   {
    anonymous: "never",
    named: "never",
    asyncArrow: "always",
   },
  ],

  // Enforce consistent spacing inside parentheses
  "space-in-parens": ["error", "never"],

  // Enforce consistent spacing inside array brackets
  "array-bracket-spacing": ["error", "never"],

  // Enforce consistent spacing inside template literals
  "template-curly-spacing": ["error", "never"],

  // Enforce consistent spacing inside computed properties
  "computed-property-spacing": ["error", "never"],

  // Disallow the use of variables before they are defined
  "no-use-before-define": ["error", { functions: true, classes: true, variables: true }],

  // Disallow the use of 'var' keyword
  "no-label-var": "error",

  // Disallow the use of undeclared variables unless mentioned in /*global */ comments
  "no-undef": "error",

  // Allow or disallow the use of 'undefined' as an identifier
  "no-undefined": "off",

  // Limit cyclomatic complexity to 20
  complexity: ["warn", 20],

  // Disallow the use of 'alert', 'confirm', and 'prompt'
  "no-alert": "error",

  // Allow or disallow the use of 'await' in async functions
  "require-await": "off",

  // Disallow Yoda conditions
  yoda: "error",

  // Disallow empty statements
  "no-empty": "error",

  // Disallow unnecessary semicolons
  "no-extra-semi": "error",

  // Ensure that the results of 'typeof' are compared against a valid string
  "valid-typeof": ["error", { requireStringLiterals: true }],

  // Prefer double quotes for JSX attributes
  "jsx-quotes": ["off", "prefer-double"],

  // Disable the Unicode Byte Order Mark (BOM)
  "unicode-bom": ["error", "never"],

  // Allow or disallow the use of 'process.env'
  "no-process-env": "off",

  // Allow or disallow the use of 'process.exit()'
  "no-process-exit": "off",

  // Enforce 'require' statements to be top-level
  "global-require": "error",
 },
};
