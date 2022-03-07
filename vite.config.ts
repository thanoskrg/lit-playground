import path from "path";
import minifyHTML from "rollup-plugin-minify-html-literals";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig(() => {
  return {
    build: {
      outDir: "dist",
      emptyOutDir: false,
      sourcemap: "hidden",
      lib: {
        name: "MyLibrary",
        entry: path.resolve(__dirname, "index.ts"),
        formats: ["iife"],
        fileName: () => "my-library.js",
      },
    },
    plugins: [eslintPlugin(), minifyHTML()],
  };
});
