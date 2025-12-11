import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
// -----------------------------
// Suporte ESModules em Node
// -----------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// -----------------------------
// Caminhos principais
// -----------------------------
const SRC = path.resolve(__dirname, "../src/icons");
const OUT = path.resolve(__dirname, "../src/ui/icons");
// -----------------------------
// Helpers
// -----------------------------
function pascalCase(str) {
  return (
    str
      .replace(/cc-|\.svg/g, "")
      .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
      .replace(/^(.)/, (c) => c.toUpperCase()) + "Icon"
  );
}
function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}
function walkSvgFiles(dir, cb) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkSvgFiles(full, cb);
    else if (file.endsWith(".svg")) cb(full);
  }
}
// -----------------------------
// Prepara saída
// -----------------------------
fs.rmSync(OUT, { recursive: true, force: true });
ensureDir(OUT);
const CATEGORIES = ["Filled", "Outline"];
const SUBCATEGORIES = ["Actions", "Misc"];
// Cria estrutura inicial
for (const cat of CATEGORIES)
  for (const sub of SUBCATEGORIES) ensureDir(path.join(OUT, cat, sub));
const exportsList = [];
// -----------------------------
// PROCESSAMENTO PRINCIPAL
// -----------------------------
walkSvgFiles(SRC, (svgPath) => {
  // Ex.: src/icons/filled/misc/cc-box-filled.svg
  const rel = path.relative(SRC, svgPath).replace(/\\/g, "/");
  const [styleFolder, groupFolder, filename] = rel.split("/");
  const style = styleFolder.toLowerCase();
  const group = groupFolder.toLowerCase();
  const category =
    style === "filled" ? "Filled" : style === "outline" ? "Outline" : null;
  if (!category) {
    console.warn("⚠️ Pasta inválida ignorada:", styleFolder);
    return;
  }
  const subcategory =
    group === "action" ? "Actions" : group === "misc" ? "Misc" : null;
  if (!subcategory) {
    console.warn("⚠️ Subpasta inválida ignorada:", groupFolder);
    return;
  }
  const componentName = pascalCase(filename);
  const outputDir = path.join(OUT, category, subcategory);
  const outputFile = path.join(outputDir, `${componentName}.tsx`);
  // -----------------------------
  // IMPORT PATH seguro para Vite + TS
  // vira: @icons/filled/misc/xxxx.svg
  // -----------------------------
  const importPath = "@icons/" + rel.replace(/\\/g, "/").replace(/\.svg$/, "");
  // TSX do componente de ícone
  const tsx =
    `
import RawSvg from "${importPath}.svg?react";
import { createIcon } from "../../createIcons";

export const ${componentName} = createIcon(RawSvg);
  `.trim() + "\n";
  fs.writeFileSync(outputFile, tsx);
  exportsList.push(
    `export * from "./${category}/${subcategory}/${componentName}";`
  );
  console.log("✔ Criado:", `${category}/${subcategory}/${componentName}.tsx`);
});
// -----------------------------
// Gera index.ts central
// -----------------------------
fs.writeFileSync(path.join(OUT, "index.ts"), exportsList.join("\n") + "\n");
console.log("\n✨ Ícones gerados com sucesso!\n");
