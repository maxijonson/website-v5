import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

const PRESERVED = ["Tristan.jpg"];

export default defineConfig({
    plugins: [react(), imagetools()],
    root: "src",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: resolve(__dirname, "src/index.html"),
            output: {
                assetFileNames: (chunkInfo) => {
                    console.info("chunk", chunkInfo.name);
                    if (PRESERVED.some((p) => chunkInfo.name?.endsWith(p))) {
                        return "assets/[name].[ext]";
                    }
                    return "assets/[name].[hash].[ext]";
                },
            },
        },
    },
    preview: {
        port: 3001,
        strictPort: true,
    },
});
