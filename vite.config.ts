import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@icons": path.resolve(__dirname, "src/icons"),
      "@viaflex-system/icons": path.resolve(__dirname, "src/ui/icons"),
    },
  },
});
