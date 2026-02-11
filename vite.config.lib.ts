import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@icons": resolve(__dirname, "src/icons"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format, entryName) => {
        const ext = format === "es" ? "js" : "cjs";
        return `${entryName}.${ext}`;
      },
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
