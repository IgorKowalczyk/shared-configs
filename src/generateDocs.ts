import { readFileSync, writeFileSync } from "node:fs";
import { markdownTable } from "markdown-table";
import PrettierConfig from "../packages/prettier-config/index";
import { Options } from "prettier";

function generatePrettierTable(config: Options): string {
  return markdownTable([
    ["Rule", "Style", "Documentation"],
    ...Object.entries(config).map(([ruleName, ruleConfig]) => {
      const description = ruleName.toString().includes("/")
        ? "-"
        : `[Documentation](https://prettier.io/docs/en/options.html#${ruleName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()})`;

      return [`\`${ruleName}\``, `\`${ruleConfig}\``, description];
    }),
  ]);
}

function updateDocs(
  readmeContent: string,
  startMarker: string,
  endMarker: string,
  table: string,
): string {
  const start = readmeContent.slice(
    0,
    readmeContent.indexOf(startMarker) + startMarker.length,
  );
  const end = readmeContent.slice(readmeContent.indexOf(endMarker));

  return `${start}\n${table}\n${end}`;
}

console.log("Generating documentation...");
const time = Date.now();

const readmePath = "./README.md";
const prettierPath = "./packages/prettier-config/README.md";

const startPrettierMarker = "<!--START_SECTION:prettier-->";
const endPrettierMarker = "<!--END_SECTION:prettier-->";

const globalReadmeContent: string = readFileSync(readmePath, "utf8");
const prettierReadmeContent: string = readFileSync(prettierPath, "utf8");

const PrettierTable: string = generatePrettierTable(PrettierConfig);

const PrettierDocs: string = updateDocs(
  globalReadmeContent,
  startPrettierMarker,
  endPrettierMarker,
  PrettierTable,
);
const PrettierPackageDocs: string = updateDocs(
  prettierReadmeContent,
  startPrettierMarker,
  endPrettierMarker,
  PrettierTable,
);

writeFileSync(prettierPath, PrettierPackageDocs);
writeFileSync(readmePath, PrettierDocs);

console.log(`Done in ${Date.now() - time}ms.`);
