import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import wc from "wildcard-match";

const PRESERVED_NAMES = [wc("Tristan.jpg")];

const directives = {
    webp: new URLSearchParams({
        format: "webp",
        quality: "80",
    }),
};

const fileDirectives = [
    {
        isMatch: wc("**/src/assets/images/Tristan.jpg"),
        directive: new URLSearchParams({
            format: "webp;jpg",
            quality: "80;100",
        }),
    },
];

export default defineConfig({
    plugins: [
        react(),
        imagetools({
            include: "**/*.{jpeg,jpg,png,webp}*",
            defaultDirectives: (url) => {
                const fileDirective = fileDirectives.find(({ isMatch }) =>
                    isMatch(url.pathname)
                );

                if (fileDirective) {
                    return fileDirective.directive;
                }
                return directives.webp;
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
                    console.info("chunkInfo", chunkInfo.name);
                    if (
                        PRESERVED_NAMES.some((isMatch) =>
                            isMatch(chunkInfo.name ?? "")
                        )
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
