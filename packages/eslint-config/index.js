module.exports = {
 extends: ["eslint:recommended", "plugin:prettier/recommended"],
 plugins: ["import"],
 ignorePatterns: ["dist/", "coverage/"],
 parserOptions: {
  ecmaVersion: "latest",
 },
 rules: {
  // Enforce consistent line breaks
  "linebreak-style": ["error", "unix"],

  // Enforce consistent quotes
  quotes: ["error", "double"],

  // Enforce semicolons at the end of statements
  semi: ["warn", "always"],

  // Enforce trailing commas where possible
  "comma-dangle": [
   "error",
   {
    arrays: "always-multiline",
    objects: "always-multiline",
    imports: "always-multiline",
    exports: "always-multiline",
    functions: "always-multiline",
   },
  ],

  // Disallow the use of eval()
  "no-eval": "error",

  // Enforce consistent function names
  "func-names": ["error", "as-needed"],

  // Enforce camelCase naming convention
  camelcase: ["warn", { properties: "never", ignoreDestructuring: true }],

  // Disallow unused variables
  "no-unused-vars": ["warn", { argsIgnorePattern: "^_", ignoreRestSiblings: true }],

  // Enforce consistent import order
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

  // disallow use of variables before they are defined
  "no-use-before-define": ["error", { functions: true, classes: true, variables: true }],

  // Disallow the var keyword
  "no-label-var": "error",

  // Disallow the use of undeclared variables unless mentioned in /*global */ comments
  "no-undef": "error",

  // Disallow the use of undefined as an identifier
  "no-undefined": "off",

  // Limit cyclomatic complexity
  complexity: ["warn", 20],

  // Disallow the use of alert, confirm, and prompt
  "no-alert": "error",

  // Do not require await in async function
  "require-await": "off",

  // Disallow Yoda conditions
  yoda: "error",

  // disallow empty statements
  "no-empty": "error",

  // disallow unnecessary semicolons
  "no-extra-semi": "error",

  // ensure that the results of typeof are compared against a valid string
  "valid-typeof": ["error", { requireStringLiterals: true }],

  // Prefer double quotes for JSX attributes
  "jsx-quotes": ["off", "prefer-double"],

  // Disable the Unicode Byte Order Mark
  "unicode-bom": ["error", "never"],

  // disallow use of process.env
  "no-process-env": "off",

  // disallow process.exit()
  "no-process-exit": "off",

  // require all requires be top-level
  "global-require": "error",
 },
};
