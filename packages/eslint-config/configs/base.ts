import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import type { Linter } from "eslint";
import gitignore from "eslint-config-flat-gitignore";
import importPluginX from "eslint-plugin-import-x";
import globals from "globals";

export default [
 gitignore({
  name: "@igorkowalczyk/eslint-config/gitignore",
 }),
 {
  name: "@igorkowalczyk/eslint-config/base",
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", "**/*.mjs"],
  ...js.configs.recommended,
  languageOptions: {
   ecmaVersion: "latest",
   globals: {
    ...globals.es2021,
    ...globals.es2025,
    ...globals.commonjs,
    ...globals.node,
    ...globals.nodeBuiltin,
   },
   sourceType: "module",
   parserOptions: {
    ecmaFeatures: {
     jsx: true,
    },
   },
  },
  rules: {
   // Disallow lonely 'if' statements
   "no-lonely-if": "error",

   // Disallow calls to the Object constructor without an argument
   "no-object-constructor": "error",

   // Disallow the use of variables before they are defined
   "no-use-before-define": ["error", { functions: true, classes: true, variables: true }],

   // Disallow the use of 'var' keyword
   "no-label-var": "error",

   // Disallow the use of undeclared variables unless mentioned in /*global */ comments
   "no-undef": "error",

   // Limit cyclomatic complexity to 50
   complexity: ["warn", 50],

   // Disallow the use of 'alert', 'confirm', and 'prompt'
   "no-alert": "warn",

   // Allow or disallow the use of 'await' in async functions
   "require-await": "error",

   // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
   "prefer-object-spread": "error",

   // Require destructuring from arrays and/or objects
   "prefer-destructuring": "error",

   // Enforce return statements in callbacks of array methods
   "array-callback-return": "error",

   // Disallow Yoda conditions
   yoda: "error",

   // Disallow empty statements
   "no-empty": "error",

   // Ensure that the results of 'typeof' are compared against a valid string
   "valid-typeof": ["error", { requireStringLiterals: true }],

   // Disable the Unicode Byte Order Mark (BOM)
   "unicode-bom": ["error", "never"],

   // Disallow the use of eval()
   "no-eval": "error",

   // Enforce consistent function names, but allow anonymous functions
   "func-names": ["error", "as-needed"],

   // Enforce camelCase naming convention, except for destructuring
   camelcase: ["warn", { properties: "never", ignoreDestructuring: true }],

   // Warn about unused variables, ignoring variables starting with "_"
   "no-unused-vars": [
    "warn",
    {
     argsIgnorePattern: "^_",
     varsIgnorePattern: "^_",
     caughtErrorsIgnorePattern: "^_",
     destructuredArrayIgnorePattern: "^_",
    },
   ],

   // Require const declarations for variables that are never reassigned after declared
   "prefer-const": "error",

   // Require method and property shorthand syntax for object literals
   "object-shorthand": ["error", "always"],
  },
 },
 {
  name: "@igorkowalczyk/eslint-config/base/import",
  plugins: {
   "import-x": importPluginX,
  },
  rules: {
   // Enforce consistent import order with specific grouping and sorting
   "import-x/order": [
    "warn",
    {
     groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
     "newlines-between": "never",
     alphabetize: {
      order: "asc",
      caseInsensitive: true,
     },
    },
   ],
  },
 },
 {
  name: "@igorkowalczyk/eslint-config/base/stylistic",
  plugins: {
   "@stylistic": stylistic,
  },
  rules: {
   // Enforce consistent line breaks
   "@stylistic/linebreak-style": ["error", "unix"],

   // Enforce the use of double quotes for consistency
   "@stylistic/quotes": ["error", "double"],

   // Enforce semicolons at the end of statements
   "@stylistic/semi": ["warn", "always"],

   // Enforce trailing commas in specific scenarios
   "@stylistic/comma-dangle": [
    "error",
    {
     arrays: "always-multiline",
     objects: "always-multiline",
     imports: "always-multiline",
     exports: "always-multiline",
     functions: "never",
    },
   ],

   // Enforce consistent spacing around blocks
   "@stylistic/block-spacing": "error",

   // Enforce consistent spacing around commas
   "@stylistic/comma-spacing": "error",

   // Enforce consistent spacing before and after keywords
   "@stylistic/keyword-spacing": "error",

   // Enforce consistent spacing before and after operators
   "@stylistic/space-infix-ops": "error",

   // Enforce consistent spacing before and after unary operators
   "@stylistic/space-unary-ops": "error",

   // Enforce consistent brace style for blocks
   "@stylistic/brace-style": "error",

   // Enforce consistent spacing inside braces
   "@stylistic/object-curly-spacing": ["error", "always"],

   // Enforce consistent spacing before function parentheses
   "@stylistic/space-before-function-paren": [
    "error",
    {
     anonymous: "never",
     named: "never",
     asyncArrow: "always",
    },
   ],

   // Enforce consistent spacing inside parentheses
   "@stylistic/space-in-parens": ["error", "never"],

   // Enforce consistent spacing inside array brackets
   "@stylistic/array-bracket-spacing": ["error", "never"],

   // Enforce consistent spacing inside template literals
   "@stylistic/template-curly-spacing": ["error", "never"],

   // Enforce consistent spacing inside computed properties
   "@stylistic/computed-property-spacing": ["error", "never"],

   // Require quotes around object literal property names
   "@stylistic/quote-props": ["error", "as-needed"],

   // Disallow unnecessary semicolons
   "@stylistic/no-extra-semi": "error",

   // Prefer double quotes for JSX attributes
   "@stylistic/jsx-quotes": ["error", "prefer-double"],
  },
 },
] as Linter.Config[];
