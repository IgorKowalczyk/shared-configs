export default {
 input: "index.js",
 output: [
  {
   file: "dist/mjs/index.js",
   format: "esm",
   compact: true,
  },
  {
   file: "dist/cjs/index.js",
   format: "cjs",
   compact: true,
  },
 ],
};
