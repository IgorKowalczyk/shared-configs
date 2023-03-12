module.exports = {
 extends: ["eslint:recommended", "plugin:prettier/recommended"],
 plugins: ["import"],
 rules: {
  // Enforce consistent line breaks
  "linebreak-style": ["error", "unix"],

  // Enforce consistent quotes
  quotes: ["error", "double"],

  // Enforce semicolons at the end of statements
  semi: ["error", "always"],

  // Enforce trailing commas where possible
  "comma-dangle": ["error", "always-multiline"],

  // Disallow the use of eval()
  "no-eval": "error",

  // Enforce consistent function names
  "func-names": ["error", "as-needed"],

  // Enforce the use of strict mode
  strict: ["error", "global"],

  // Enforce camelCase naming convention
  camelcase: ["error", { properties: "never", ignoreDestructuring: true }],

  // Disallow unused variables
  "no-unused-vars": ["error", { argsIgnorePattern: "^_", ignoreRestSiblings: true }],

  // Enforce consistent import order
  "import/order": [
   "error",
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
 },
};
