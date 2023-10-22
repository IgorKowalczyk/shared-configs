const defaultConfig = {
 external: ["eslint-plugin-import", "eslint-plugin-prettier", "globals", "@eslint/js"],
};

export default [
 {
  input: "flat.js",
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
  input: "legacy.js",
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
