import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import prettierRecommendedConfig from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
 js.configs.recommended,
 {
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
 },
 {
  plugins: {
   import: importPlugin,
  },
  rules: {
   // Enforce consistent import order with specific grouping and sorting
   "import/order": [
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
   // "import/no-duplicates": "warn",
   // "import/named": "error",
   // "import/export": "error",
  },
 },
 {
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

   // Allow or disallow the use of 'undefined' as an identifier
   "no-undefined": "off",

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

   // Allow or disallow the use of 'process.env'
   "no-process-env": "off",

   // Disallow the use of eval()
   "no-eval": "error",

   // Enforce consistent function names, but allow anonymous functions
   "func-names": ["error", "as-needed"],

   // Enforce camelCase naming convention, except for destructuring
   camelcase: ["warn", { properties: "never", ignoreDestructuring: true }],

   // Warn about unused variables, ignoring variables starting with "_"
   "no-unused-vars": ["warn", { argsIgnorePattern: "^_", ignoreRestSiblings: true }],

   // Require const declarations for variables that are never reassigned after declared
   "prefer-const": "error",

   // Require method and property shorthand syntax for object literals
   "object-shorthand": ["error", "always"],

   // Enforce consistent line breaks [DEPRECATED]
   "linebreak-style": ["error", "unix"],

   // Enforce the use of double quotes for consistency [DEPRECATED]
   quotes: ["error", "double"],

   // Enforce semicolons at the end of statements [DEPRECATED]
   semi: ["warn", "always"],

   // Enforce trailing commas in specific scenarios [DEPRECATED]
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

   // Enforce consistent spacing around blocks [DEPRECATED]
   "block-spacing": "error",

   // Enforce consistent spacing around commas [DEPRECATED]
   "comma-spacing": "error",

   // Enforce consistent spacing before and after keywords [DEPRECATED]
   "keyword-spacing": "error",

   // Enforce consistent spacing before and after operators [DEPRECATED]
   "space-infix-ops": "error",

   // Enforce consistent spacing before and after unary operators [DEPRECATED]
   "space-unary-ops": "error",

   // Enforce consistent brace style for blocks [DEPRECATED]
   "brace-style": "error",

   // Enforce consistent spacing inside braces [DEPRECATED]
   "object-curly-spacing": ["error", "always"],

   // Enforce consistent spacing before function parentheses [DEPRECATED]
   "space-before-function-paren": [
    "error",
    {
     anonymous: "never",
     named: "never",
     asyncArrow: "always",
    },
   ],

   // Enforce consistent spacing inside parentheses [DEPRECATED]
   "space-in-parens": ["error", "never"],

   // Enforce consistent spacing inside array brackets [DEPRECATED]
   "array-bracket-spacing": ["error", "never"],

   // Enforce consistent spacing inside template literals [DEPRECATED]
   "template-curly-spacing": ["error", "never"],

   // Enforce consistent spacing inside computed properties [DEPRECATED]
   "computed-property-spacing": ["error", "never"],

   // Require quotes around object literal property names [DEPRECATED]
   "quote-props": ["error", "as-needed"],

   // Disallow unnecessary semicolons [DEPRECATED]
   "no-extra-semi": "error",

   // Prefer double quotes for JSX attributes [DEPRECATED]
   "jsx-quotes": ["off", "prefer-double"],

   // Allow or disallow the use of 'process.exit()' [DEPRECATED]
   "no-process-exit": "off",

   // Enforce 'require' statements to be top-level [DEPRECATED]
   "global-require": "error",
  },
 },
 ...prettierRecommendedConfig,
];
