/**
 * ------------------------------------------------------
 *  GERADOR AUTOMÁTICO DE COMPONENTES DE ÍCONES
 *  @viaflex/icons
 * ------------------------------------------------------
 *  Lê src/icons/* e cria componentes React em src/ui/icons/*
 *  Suporta múltiplas categorias e subcategorias
 *  Gera index.ts central
 * ------------------------------------------------------
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ------------------------------------------------------
// Suporte ESModules no Node
// ------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ------------------------------------------------------
// Caminhos principais
// ------------------------------------------------------
const SRC = path.resolve(__dirname, "../src/icons");
const OUT = path.resolve(__dirname, "../src/ui/icons");

// ------------------------------------------------------
// Helpers
// ------------------------------------------------------
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

// ------------------------------------------------------
// Categorias suportadas
// ------------------------------------------------------
const CATEGORY_MAP = {
  filled: "Filled",
  outline: "Outline",
};

const SUBCATEGORY_MAP = {
  actions: "Actions",
  misc: "Misc",
  fuel: "Fuel",
  data: "Data",
  navigation: "Navigation",
  status: "Status",
  system: "System",
};

// ------------------------------------------------------
// Limpa saída e recria estrutura
// ------------------------------------------------------
if (fs.existsSync(OUT)) {
  for (const file of fs.readdirSync(OUT)) {
    const full = path.join(OUT, file);
    if (fs.statSync(full).isDirectory()) {
      fs.rmSync(full, { recursive: true, force: true });
    }
  }
} else {
  fs.mkdirSync(OUT, { recursive: true });
}

for (const cat of Object.values(CATEGORY_MAP)) {
  for (const sub of Object.values(SUBCATEGORY_MAP)) {
    ensureDir(path.join(OUT, cat, sub));
  }
}

const exportsList = [];

// ------------------------------------------------------
// PROCESSAMENTO PRINCIPAL
// ------------------------------------------------------
walkSvgFiles(SRC, (svgPath) => {
  const rel = path.relative(SRC, svgPath).replace(/\\/g, "/");
  const [styleFolder, groupFolder, filename] = rel.split("/");

  const category = CATEGORY_MAP[styleFolder.toLowerCase()];
  if (!category) {
    console.warn("⚠ Ignorado: categoria desconhecida:", styleFolder);
    return;
  }

  const subcategory = SUBCATEGORY_MAP[groupFolder.toLowerCase()];
  if (!subcategory) {
    console.warn("⚠ Ignorado: subcategoria desconhecida:", groupFolder);
    return;
  }

  const componentName = pascalCase(filename);

  const outputDir = path.join(OUT, category, subcategory);
  const outputFile = path.join(outputDir, `${componentName}.tsx`);

  // Caminho do SVG usando alias @icons
  const importPath =
    "@icons/" + rel.replace(/\\/g, "/").replace(/\.svg$/, "") + ".svg?react";

  // Template do componente React
  const tsx =
    `
import RawSvg from "${importPath}";
import { createIcon } from "@viaflex-system/icons/createIcon";

export const ${componentName} = createIcon(RawSvg, "${componentName}");
`.trim() + "\n";

  fs.writeFileSync(outputFile, tsx);

  exportsList.push(
    `export * from "./${category}/${subcategory}/${componentName}";`
  );

  console.log(`✔ Criado: ${category}/${subcategory}/${componentName}.tsx`);
});

// ------------------------------------------------------
// Gera index.ts central
// ------------------------------------------------------
fs.writeFileSync(path.join(OUT, "index.ts"), exportsList.join("\n") + "\n");

console.log("\n✨ Ícones gerados com sucesso!\n");
