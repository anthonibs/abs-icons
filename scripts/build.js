import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { transform } from "@svgr/core";

import {
  formatFileName,
  formatComponentName,
  cleanSvgForReact,
  getCategory,
} from "../src/helpers/utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC = path.resolve(__dirname, "../src/icons");
const OUT = path.resolve(__dirname, "../src/ui/icons");

async function generate() {
  if (fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  const files = fs.readdirSync(SRC).filter((f) => f.endsWith(".svg"));

  const tree = { solid: {}, outline: {} };

  for (const filename of files) {
    const isSolid = filename.toLowerCase().includes("solid");
    const styleFolder = isSolid ? "solid" : "outline";
    const groupFolder = getCategory(filename);
    const componentName = formatComponentName(filename);

    const rawSvg = fs.readFileSync(path.join(SRC, filename), "utf8");
    const cleanedSvg = cleanSvgForReact(rawSvg);

    const componentCode = await transform(
      cleanedSvg,
      {
        typescript: true,
        icon: true,
        jsxRuntime: "automatic",
        plugins: ["@svgr/plugin-jsx"],
      },
      { componentName },
    );

    const outputDir = path.join(OUT, styleFolder, groupFolder);
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const metadata = {
      fileName: filename,
      presentationName: formatFileName(filename),
      style: styleFolder,
      category: groupFolder,
    };

    const finalCode = `
      import * as React from "react";
      import { createIcon } from "../../../createIcon";

      ${componentCode
        .replace(`const ${componentName} =`, "const SVGComponent =")
        .replace(`export default ${componentName};`, "")}

      export const ${componentName} = createIcon("${componentName}", SVGComponent, ${JSON.stringify(
      metadata,
      null,
      2,
    )});
      `.trim();

    fs.writeFileSync(path.join(outputDir, `${componentName}.tsx`), finalCode);

    if (!tree[styleFolder][groupFolder]) tree[styleFolder][groupFolder] = [];
    tree[styleFolder][groupFolder].push(componentName);

    console.log(`✅ Generated: ${componentName}`);
  }

  let mainIndex = "";

  for (const style in tree) {
    let styleIndex = "";
    for (const category in tree[style]) {
      const catExports = tree[style][category]
        .map((name) => `export * from "./${name}";`)
        .join("\n");
      fs.writeFileSync(path.join(OUT, style, category, "index.ts"), catExports);

      styleIndex += `export * as ${category}${style}Icons from "./${category}";\n`;
      styleIndex += `export * from "./${category}";\n`;
    }
    fs.writeFileSync(path.join(OUT, style, "index.ts"), styleIndex);

    mainIndex += `export * from "./${style}";\n`;
  }

  fs.writeFileSync(path.join(OUT, "index.ts"), mainIndex);

  console.log(
    `\n🎉 Process completed! Category structure created successfully.`,
  );
}

generate().catch(console.error);
