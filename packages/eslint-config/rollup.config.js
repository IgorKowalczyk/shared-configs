const defaultConfig = {
 external: ["eslint-plugin-n", "eslint-plugin-prettier/recommended", "eslint-plugin-import", "eslint-plugin-react", "eslint-plugin-react-hooks", "eslint-plugin-next", "globals", "@eslint/js", "globals", "@stylistic/eslint-plugin"],
};

export default [
 {
  input: "configs/flat/index.js",
  output: [
   {
    file: "dist/mjs/flat.js",
    format: "esm",
    compact: true,
   },
   {
    file: "dist/cjs/flat.cjs",
    format: "cjs",
    compact: true,
   },
  ],
  ...defaultConfig,
 },

 {
  input: "configs/legacy/index.js",
  output: [
   {
    file: "dist/mjs/legacy.js",
    format: "esm",
    compact: true,
   },
   {
    file: "dist/cjs/legacy.cjs",
    format: "cjs",
    compact: true,
   },
  ],
  ...defaultConfig,
 },
];
