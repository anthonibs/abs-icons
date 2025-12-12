import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { optimize } from "svgo";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC = path.resolve(__dirname, "../src/icons");

console.log("🔍 Otimizando SVGs em:", SRC);

// Configuração do SVGO embutida no script
const svgoConfig = {
  // Define que queremos usar a predefinição padrão de otimização,
  // mas adiciona/sobrescreve um plugin específico:
  plugins: [
    {
      name: "removeAttrs",
      params: {
        attrs: "(class)", // Isso remove o atributo 'class' de todos os elementos
      },
    },
    "preset-default", // Mantém todas as outras otimizações padrão do SVGO
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

  // Passa a configuração diretamente para a função optimize
  const result = optimize(original, {
    path: file,
    // Removemos 'configFile' daqui
    ...svgoConfig, // Espalha nossa configuração embutida aqui
  });

  if (result.error) {
    console.error("❌ Erro otimizando:", file, result.error);
    return;
  }

  fs.writeFileSync(file, result.data);
  console.log("✔ SVG otimizado:", file);
});

console.log("\n✨ Otimização finalizada!\n");
