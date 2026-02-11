/**
 * ------------------------------------------------------
 * GERADOR AUTOMÁTICO DE COMPONENTES DE ÍCONES
 * Agora compatível com tsup (sem ?react)
 * ------------------------------------------------------
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { transform } from "@svgr/core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC = path.resolve(__dirname, "../src/icons");
const OUT = path.resolve(__dirname, "../src/ui/icons");

function pascalCase(str) {
  return (
    str
      .replace(/cc-|\.svg/g, "")
      .replace(/[-_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
      .replace(/^(.)/, (c) => c.toUpperCase()) + "Icon"
  );
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getSvgFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getSvgFiles(filePath, fileList);
    } else if (file.endsWith(".svg")) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

console.log(`🔍 Lendo ícones de: ${SRC}`);

if (fs.existsSync(OUT)) {
  fs.rmSync(OUT, { recursive: true, force: true });
}
ensureDir(OUT);

const exportsList = [];
const svgFiles = getSvgFiles(SRC);

for (const svgPath of svgFiles) {
  const rel = path.relative(SRC, svgPath).split(path.sep).join("/");
  const parts = rel.split("/");

  if (parts.length < 3) continue;

  const [styleFolder, groupFolder, filename] = parts;
  const componentName = pascalCase(filename);

  const svgCode = fs.readFileSync(svgPath, "utf8");

  // Converte SVG → Componente React
  const componentCode = await transform(
    svgCode,
    {
      typescript: true,
      icon: true,
      jsxRuntime: "automatic",
      plugins: ["@svgr/plugin-jsx"],
      exportType: "named",
      svgo: true,
      svgoConfig: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "removeDimensions", active: true },
          { name: "removeXMLNS", active: true },
          { name: "cleanupIds", active: true },
          { name: "removeComments", active: true },
        ],
      },
    },
    { componentName },
  );

  const outputDir = path.join(
    OUT,
    styleFolder.charAt(0).toUpperCase() + styleFolder.slice(1),
    groupFolder.charAt(0).toUpperCase() + groupFolder.slice(1),
  );

  ensureDir(outputDir);

  const outputFile = path.join(outputDir, `${componentName}.tsx`);

  // Wrapper com createIcon
  const finalCode = `
${componentCode}

import { createIcon } from "../../../createIcon";

const WrappedIcon = createIcon(${componentName}, "${componentName}");

export default WrappedIcon;
`.trim();

  fs.writeFileSync(outputFile, finalCode);

  exportsList.push(
    `export { default as ${componentName} } from "./${
      styleFolder.charAt(0).toUpperCase() + styleFolder.slice(1)
    }/${
      groupFolder.charAt(0).toUpperCase() + groupFolder.slice(1)
    }/${componentName}";`,
  );

  console.log(`✅ Gerado: ${componentName}`);
}

fs.writeFileSync(
  path.join(OUT, "index.ts"),
  exportsList.sort().join("\n") + "\n",
);

console.log(`\n🎉 Processo concluído! ${exportsList.length} ícones gerados.`);
