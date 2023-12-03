import { markdownTable } from "markdown-table";
import * as ESLintConfig from "../packages/eslint-config/flat.js";
import * as PrettierConfig from "../packages/prettier-config/index.js";
import { readFileSync, writeFileSync } from "node:fs";

function capitalize(str) {
 return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateESLintTable(config) {
 return markdownTable([
  ["Rule", "Style", "Type", "Documentation"],
  ...Object.entries(config).map(([ruleName, ruleConfig]) => {
   const ruleType = Array.isArray(ruleConfig) ? ruleConfig[0] : ruleConfig;
   let description = Array.isArray(ruleConfig) ? ruleConfig[1] : ruleConfig;
   const docs = ruleName.toString().includes("/") ? "External rule" : `[Documentation](https://eslint.org/docs/rules/${ruleName})`;

   if (typeof description === "object") description = ruleName.toString().includes("/") ? "-" : docs;

   const typeEmoji = {
    error: "🚫",
    warn: "⚠️",
    off: "💡",
   }[ruleType];

   const typeText = {
    error: "Error",
    warn: "Warning",
    off: "Disabled",
   }[ruleType];

   return [`\`${ruleName}\``, capitalize(description.toString()), `\`${typeEmoji} ${typeText}\``, docs];
  }),
 ]);
}

function generatePrettierTable(config) {
 return markdownTable([
  ["Rule", "Style", "Documentation"],
  ...Object.entries(config).map(([ruleName, ruleConfig]) => {
   const description = ruleName.toString().includes("/") ? "-" : `[Documentation](https://prettier.io/docs/en/options.html#${ruleName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()})`;

   return [`\`${ruleName}\``, `\`${ruleConfig}\``, description];
  }),
 ]);
}

function updateDocs(readmeContent, startMarker, endMarker, table) {
 const start = readmeContent.slice(0, readmeContent.indexOf(startMarker) + startMarker.length);
 const end = readmeContent.slice(readmeContent.indexOf(endMarker));

 return `${start}\n${table}\n${end}`;
}

console.log("Generating documentation...");
const time = Date.now();

const readmePath = "./README.md";
const eslintPath = "./packages/eslint-config/README.md";
const prettierPath = "./packages/prettier-config/README.md";

const startESLintMarker = "<!--START_SECTION:eslint-->";
const endESLintMarker = "<!--END_SECTION:eslint-->";
const startPrettierMarker = "<!--START_SECTION:prettier-->";
const endPrettierMarker = "<!--END_SECTION:prettier-->";

const globalReadmeContent = readFileSync(readmePath, "utf8");
const eslintReadmeContent = readFileSync(eslintPath, "utf8");
const prettierReadmeContent = readFileSync(prettierPath, "utf8");

// get all the rules from all the objects in the array and merge them into one object
const mergedESLintConfig = ESLintConfig.default.reduce((acc, cur) => {
 if (cur.rules) {
  Object.assign(acc, cur.rules);
 }
 return acc;
}, {});

const ESLintTable = generateESLintTable(mergedESLintConfig);
const PrettierTable = generatePrettierTable(PrettierConfig.default);

const ESLintDocs = updateDocs(globalReadmeContent, startESLintMarker, endESLintMarker, ESLintTable);
const PrettierDocs = updateDocs(ESLintDocs, startPrettierMarker, endPrettierMarker, PrettierTable);

const ESLintPackageDocs = updateDocs(eslintReadmeContent, startESLintMarker, endESLintMarker, ESLintTable);
const PrettierPackageDocs = updateDocs(prettierReadmeContent, startPrettierMarker, endPrettierMarker, PrettierTable);

writeFileSync(eslintPath, ESLintPackageDocs);
writeFileSync(prettierPath, PrettierPackageDocs);
writeFileSync(readmePath, PrettierDocs);

console.log(`Done in ${Date.now() - time}ms.`);
