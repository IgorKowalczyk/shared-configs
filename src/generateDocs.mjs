import { markdownTable } from "markdown-table";
import * as ESLintConfig from "../packages/eslint-config/flat.js";
import * as PrettierConfig from "../packages/prettier-config/index.js";
import { readFileSync, writeFileSync } from "fs";

console.log("Generating documentation...");
const time = Date.now();

const readmePath = "./README.md";
const eslintPath = "./packages/eslint-config/README.md";
const prettierPath = "./packages/prettier-config/README.md";

const readmeContent = readFileSync(readmePath, "utf8");
const eslintReadme = readFileSync(eslintPath, "utf8");
const prettierReadme = readFileSync(prettierPath, "utf8");

const startESLintMarker = "<!--START_SECTION:eslint-->";
const endESLintMarker = "<!--END_SECTION:eslint-->";

const startPrettierMarker = "<!--START_SECTION:prettier-->";
const endPrettierMarker = "<!--END_SECTION:prettier-->";

export function Capitalize(str) {
 return str.charAt(0).toUpperCase() + str.slice(1);
}

const ESLintTable = markdownTable([
 ["Rule", "Style", "Type", "Documentation"],
 ...Object.entries(ESLintConfig.default.rules).map(([ruleName, ruleConfig]) => {
  const ruleType = Array.isArray(ruleConfig) ? ruleConfig[0] : ruleConfig;
  let description = Array.isArray(ruleConfig) ? ruleConfig[1] : ruleConfig;
  const docs = ruleName.toString().includes("/") ? "External rule" : `[Documentation](https://eslint.org/docs/rules/${ruleName})`;

  if (typeof description === "object") {
   description = ruleName.toString().includes("/") ? "-" : docs;
  }

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

  return [`\`${ruleName}\``, Capitalize(description.toString()), `\`${typeEmoji} ${typeText}\``, docs];
 }),
]);

const PrettierTable = markdownTable([
 ["Rule", "Style", "Documentation"],
 ...Object.entries(PrettierConfig.default).map(([ruleName, ruleConfig]) => {
  const description = ruleName.toString().includes("/") ? "-" : `[Documentation](https://prettier.io/docs/en/options.html#${ruleName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()})`;

  return [`\`${ruleName}\``, `\`${ruleConfig}\``, description];
 }),
]);

const ESLintDocs = readmeContent.slice(0, readmeContent.indexOf(startESLintMarker) + startESLintMarker.length) + "\n" + ESLintTable + "\n" + readmeContent.slice(readmeContent.indexOf(endESLintMarker));
const PrettierDocs = ESLintDocs.slice(0, ESLintDocs.indexOf(startPrettierMarker) + startPrettierMarker.length) + "\n" + PrettierTable + "\n" + ESLintDocs.slice(ESLintDocs.indexOf(endPrettierMarker));

const ESLintPackageDocs = eslintReadme.slice(0, eslintReadme.indexOf(startESLintMarker) + startESLintMarker.length) + "\n" + ESLintTable + "\n" + eslintReadme.slice(eslintReadme.indexOf(endESLintMarker));
const PrettierPackageDocs = prettierReadme.slice(0, prettierReadme.indexOf(startPrettierMarker) + startPrettierMarker.length) + "\n" + PrettierTable + "\n" + prettierReadme.slice(prettierReadme.indexOf(endPrettierMarker));

writeFileSync(eslintPath, ESLintPackageDocs);
writeFileSync(prettierPath, PrettierPackageDocs);
writeFileSync(readmePath, PrettierDocs);

console.log(`Done in ${Date.now() - time}ms.`);
