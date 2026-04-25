import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const categoriesPath = join(__dirname, "categories.json");
const KEY_WORDS_CATEGORIES_MAP = JSON.parse(
  fs.readFileSync(categoriesPath, "utf8"),
);

const ICON_VARIANTS = ["alt", "soft"];

export function getCategory(fileName) {
  const clean = fileName
    .toLowerCase()
    .replace(/^abs-/, "")
    .replace(/-solid|-outline/, "")
    .replace(/\.svg$/, "");

  const parts = clean.split("-").filter((p) => !ICON_VARIANTS.includes(p));

  const exactName = parts.join("-");
  const first = parts[0];

  for (const [category, keywords] of Object.entries(KEY_WORDS_CATEGORIES_MAP)) {
    if (keywords.includes(exactName)) {
      return category;
    }
  }

  for (const [category, keywords] of Object.entries(KEY_WORDS_CATEGORIES_MAP)) {
    if (category !== "brands" && keywords.includes(first)) {
      return category;
    }
  }

  for (const [category, keywords] of Object.entries(KEY_WORDS_CATEGORIES_MAP)) {
    if (category !== "brands" && keywords.some((k) => parts.includes(k))) {
      return category;
    }
  }

  return "general";
}

export function formatFileName(name) {
  return name
    .replace(/\.[^.]+$/i, "")
    .replace(/^(?:abs-)+/i, "")
    .replace(/(?:-(?:icon|outline|solid))+$/i, "")
    .replace(/[_\s]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

export function formatComponentName(filename) {
  const isSolid = filename.toLowerCase().includes("solid");
  const style = isSolid ? "Solid" : "Outline";

  let name = filename
    .replace(/^abs-/, "")
    .replace(/-solid\.svg$|-outline\.svg$|\.svg$/i, "")
    .replace(/[-_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^(.)/, (c) => c.toUpperCase());

  return `${name}${style}Icon`;
}

export function cleanSvgForReact(svgContent) {
  let cleaned = svgContent
    .replace(/<\?xml.*?\?>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<defs[\s\S]*?<\/defs>/gi, "")
    .replace(/\s(class|id|style|data-name|fill|stroke)="[^"]*"/gi, "")
    .trim();

  cleaned = cleaned.replace(/<svg([^>]+)>/i, (match, tagContent) => {
    const viewBoxMatch = tagContent.match(/viewBox="[^"]*"/i);
    const viewBox = viewBoxMatch ? viewBoxMatch[0] : 'viewBox="0 0 24 24"';
    return `<svg ${viewBox} color="currentColor">`;
  });

  return cleaned
    .replace(/clip-rule=/g, "clipRule=")
    .replace(/fill-rule=/g, "fillRule=")
    .replace(/stroke-width=/g, "strokeWidth=")
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=");
}
