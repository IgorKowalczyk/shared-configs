import { markdownTable } from "markdown-table";
import * as ESlintConfig from "../packages/eslint-config/index.js";
import * as PrettierConfig from "../packages/prettier-config/index.js";
import { readFileSync, writeFileSync } from "fs";

console.log("Generating documentation...");
const time = Date.now();

const readmePath = "./README.md";
const readmeContent = readFileSync(readmePath, "utf8");

const startESlintMarker = "<!--START_SECTION:eslint-->";
const endESlintMarker = "<!--END_SECTION:eslint-->";
const startPrettierMarker = "<!--START_SECTION:prettier-->";
const endPrettierMarker = "<!--END_SECTION:prettier-->";

export function Capitalize(str) {
 return str.charAt(0).toUpperCase() + str.slice(1);
}

const ESlintTable = markdownTable([
 ["Rule", "Style", "Type", "Documentation"],
 ...Object.entries(ESlintConfig.default.rules).map(([ruleName, ruleConfig]) => {
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

  return [`\`${ruleName}\``, Capitalize(description.toString()), `${typeEmoji} \`${typeText}\``, docs];
 }),
]);

const PrettierTable = markdownTable([
 ["Rule", "Style", "Documentation"],
 ...Object.entries(PrettierConfig.default).map(([ruleName, ruleConfig]) => {
  const description = ruleName.toString().includes("/") ? "-" : `[Documentation](https://prettier.io/docs/en/options.html#${ruleName})`;

  return [`\`${ruleName}\``, `\`${ruleConfig}\``, description];
 }),
]);

const ESlintDocs = readmeContent.slice(0, readmeContent.indexOf(startESlintMarker) + startESlintMarker.length) + "\n" + ESlintTable + "\n" + readmeContent.slice(readmeContent.indexOf(endESlintMarker));
const PrettierDocs = ESlintDocs.slice(0, ESlintDocs.indexOf(startPrettierMarker) + startPrettierMarker.length) + "\n" + PrettierTable + "\n" + ESlintDocs.slice(ESlintDocs.indexOf(endPrettierMarker));

writeFileSync(readmePath, PrettierDocs);
console.log(`Done in ${Date.now() - time}ms.`);
