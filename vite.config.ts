import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react(), imagetools()],
    root: "src",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: resolve(__dirname, "src/index.html"),
        },
    },
    preview: {
        port: 3001,
        strictPort: true,
    },
});
