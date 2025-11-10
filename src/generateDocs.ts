import { readFileSync, writeFileSync } from "node:fs";
import { markdownTable } from "markdown-table";
import { Options } from "prettier";
import PrettierConfig from "../packages/prettier-config/index";

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

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findMarkerMatch(content: string, fullMarker: string) {
  const base = fullMarker.replace(/-{1,}>?\s*$/, "").trim();
  const regex = new RegExp(escapeRegExp(base) + "\\s*-{2,}>?\\s*", "m");
  const marker = content.match(regex);
  return marker ? { index: marker.index ?? -1, length: marker[0].length } : { index: -1, length: 0 };
}

function replaceBetween(content: string, startMarker: string, endMarker: string, replacement: string): string {
  const startMatch = findMarkerMatch(content, startMarker);
  const endMatch = findMarkerMatch(content, endMarker);
  if (startMatch.index === -1 || endMatch.index === -1) {
    throw new Error(`Missing markers: ${startMarker} or ${endMarker}`);
  }
  if (startMatch.index > endMatch.index) {
    throw new Error(`Marker order invalid: ${startMarker} appears after ${endMarker}`);
  }

  const before = content.slice(0, startMatch.index + startMatch.length);
  const after = content.slice(endMatch.index);

  const cleanReplacement = replacement.replace(/^\s+|\s+$/g, "");

  const needsLeadingNewline = before.endsWith("\n") ? "" : "\n";
  const needsTrailingNewline = after.startsWith("\n") ? "" : "\n";

  return `${before}${needsLeadingNewline}${cleanReplacement}${needsTrailingNewline}${after}`;
}

type Section = {
  name: string;
  packageReadme: string;
  outerStart: string;
  outerEnd: string;
  modules?: {
    outerStart: string;
    outerEnd: string;
    generator: () => string;
  }[];
};

const sections: Section[] = [
  {
    name: "prettier",
    packageReadme: "./packages/prettier-config/README.md",
    outerStart: "<!--START_SECTION:prettier-->",
    outerEnd: "<!--END_SECTION:prettier-->",
    modules: [
      {
        outerStart: "<!--START_SECTION:prettier-table-->",
        outerEnd: "<!--END_SECTION:prettier-table-->",
        generator: () => generatePrettierTable(PrettierConfig),
      },
    ],
  },
  {
    name: "eslint",
    packageReadme: "./packages/eslint-config/README.md",
    outerStart: "<!--START_SECTION:eslint-->",
    outerEnd: "<!--END_SECTION:eslint-->",
  },
  {
    name: "renovate",
    packageReadme: "./packages/renovate-config/README.md",
    outerStart: "<!--START_SECTION:renovate-->",
    outerEnd: "<!--END_SECTION:renovate-->",
  },
];

console.log("Generating documentation...");
const time = Date.now();

const globalReadmePath = "./README.md";
let globalReadme = readFileSync(globalReadmePath, "utf8");

for (const section of sections) {
  let pkgContent = readFileSync(section.packageReadme, "utf8");

  if (section.modules && section.modules.length > 0) {
    let updated = false;
    for (const mod of section.modules) {
      const startMatch = findMarkerMatch(pkgContent, mod.outerStart);
      const endMatch = findMarkerMatch(pkgContent, mod.outerEnd);
      if (startMatch.index === -1 || endMatch.index === -1) {
        throw new Error(`Missing module markers for ${section.name} in ${section.packageReadme}: ${mod.outerStart} / ${mod.outerEnd}`);
      }

      const generated = mod.generator();
      pkgContent = replaceBetween(pkgContent, mod.outerStart, mod.outerEnd, generated);
      updated = true;
    }
    if (updated) {
      writeFileSync(section.packageReadme, pkgContent);
      pkgContent = readFileSync(section.packageReadme, "utf8");
    }
  }

  const startMatch = findMarkerMatch(pkgContent, section.outerStart);
  const endMatch = findMarkerMatch(pkgContent, section.outerEnd);
  if (startMatch.index === -1 || endMatch.index === -1) {
    throw new Error(`Missing outer markers for ${section.name} in ${section.packageReadme}`);
  }
  const inner = pkgContent.slice(startMatch.index + startMatch.length, endMatch.index).trim();

  globalReadme = replaceBetween(globalReadme, section.outerStart, section.outerEnd, inner);
}

writeFileSync(globalReadmePath, globalReadme);

console.log(`Done in ${Date.now() - time}ms.`);
