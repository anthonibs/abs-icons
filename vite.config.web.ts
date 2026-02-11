import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@anthonibs/abs-icons": path.resolve(__dirname, "src/ui/icons"),
    },
  },

  build: {
    outDir: "dist-web",
    emptyOutDir: true,
  },
});
