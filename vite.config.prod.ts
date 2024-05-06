import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import { create } from "@openreplyde/web-docker-vite-plugin";

export default defineConfig(() => {
  const base = import.meta.env.VITE_APP_BASE_PATH || "/";
  return {
    plugins: [
      create({
        basePath: base,
        fileName: "page-module.json",
        module: "page-module",
        type: "page",
        pages: [".*"],
      }),
    ],
    base,
    build: {
      outDir: "dist",
    },
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
