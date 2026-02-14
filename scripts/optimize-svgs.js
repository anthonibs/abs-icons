import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { optimize } from "svgo";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC = path.resolve(__dirname, "../src/icons");

console.log("🔍 Optimizing SVGs in:", SRC);

const svgoConfig = {
  plugins: [
    {
      name: "removeAttrs",
      params: {
        attrs: "(class)",
      },
    },
    "preset-default",
  ],
};

function walk(dir, cb) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) walk(full, cb);
    else if (entry.endsWith(".svg")) cb(full);
  }
}

walk(SRC, (file) => {
  const original = fs.readFileSync(file, "utf8");

  const result = optimize(original, {
    path: file,
    ...svgoConfig,
  });

  if (result.error) {
    console.error("❌ Error optimizing:", file, result.error);
    return;
  }

  fs.writeFileSync(file, result.data);
  console.log("✔ SVG optimized:", file);
});

console.log("\n✨ Optimization completed!\n");
