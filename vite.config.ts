import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

const PRESERVED_NAMES = ["Tristan.jpg"];

const defaultDirectives = {
    webp: new URLSearchParams({
        format: "webp",
        quality: "80",
    }),
};

export default defineConfig({
    plugins: [
        react(),
        imagetools({
            include: "**/*.{jpeg,jpg,png,webp}*",
            defaultDirectives: (_url) => {
                return defaultDirectives.webp;
            },
        }),
    ],
    root: "src",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: resolve(__dirname, "src/index.html"),
            output: {
                assetFileNames: (chunkInfo) => {
                    if (
                        PRESERVED_NAMES.some((p) => chunkInfo.name?.endsWith(p))
                    ) {
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
