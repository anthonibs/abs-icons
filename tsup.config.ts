import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/ui/icons/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: false,
  minify: true,
  external: ["react", "react-dom", "zustand"],
  tsconfig: "./tsconfig.build.json",
  outDir: "dist",
});
