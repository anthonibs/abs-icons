import { defineConfig } from "tsup";
import pkg from "glob";
const { sync: globSync } = pkg;

const iconFiles = globSync("src/ui/icons/**/*.{ts,tsx}");

export default defineConfig({
  entry: ["src/ui/icons/index.ts", ...iconFiles],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  minify: true,
  splitting: true,
  treeshake: true,
  external: ["react", "react-dom", "zustand"],
  tsconfig: "./tsconfig.build.json",
  outDir: "dist",
  bundle: true,
});
