import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import wc from "wildcard-match";
import _ from "lodash";
import { dependencies } from "./package.json";

/**
 * an array file directives to override the default Vite compilation params for specific files.
 */
const FILE_DIRECTIVES: {
    isMatch: ReturnType<typeof wc>;
    directive: URLSearchParams | ((url: URL) => URLSearchParams);
}[] = [
    {
        isMatch: wc("**/src/assets/images/logo/*"),
        directive: new URLSearchParams({
            format: "webp",
            quality: "100",
        }),
    },
    {
        isMatch: wc("**/src/assets/images/landing/background.jpg"),
        directive: new URLSearchParams({
            format: "webp",
            quality: "100",
        }),
    },
    {
        isMatch: wc("**/src/assets/images/tristan/*"),
        directive: new URLSearchParams({
            format: "webp",
            width: "200",
            height: "200",
            quality: "100",
        }),
    },
    {
        isMatch: wc("**/src/assets/images/skills/*"),
        directive: new URLSearchParams({
            format: "webp",
            quality: "60",
            width: "16",
            height: "16",
            fit: "contain",
            background: "transparent",
        }),
    },
    {
        isMatch: wc("**/src/assets/images/projects/*"),
        directive: (url) => {
            return new URLSearchParams({
                format: "webp",
                quality: "100",
                width: "300",
                height: "160",
                fit: url.pathname.endsWith("react.jpg") ? "cover" : "contain",
                background: "transparent",
            });
        },
    },
    {
        isMatch: wc("**/src/assets/images/experience/*"),
        directive: new URLSearchParams({
            format: "webp",
            quality: "60",
            width: "25",
            height: "25",
            fit: "cover",
        }),
    },
    {
        isMatch: wc("**/src/assets/images/education/*"),
        directive: new URLSearchParams({
            format: "webp",
            quality: "90",
            width: "128",
            height: "64",
            fit: "contain",
            background: "transparent",
        }),
    },
    {
        isMatch: wc("**/src/assets/images/favicon/*"),
        directive: new URLSearchParams({
            quality: "100",
        }),
    },
];

/**
 * Dependencies to be chunked together instead of individually.
 */
const MANUAL_CHUNKS: { [chunkName: string]: (keyof typeof dependencies)[] } = {
    react: ["react", "react-dom", "react-router-dom"],
    mantine: ["@mantine/core", "@mantine/hooks"],
    i18next: [
        "i18next",
        "i18next-browser-languagedetector",
        "i18next-resources-to-backend",
        "react-i18next",
    ],
};

const chunkDependencies = () => {
    const chunks: { [key: string]: string[] } = {};
    const chunked: string[] = _(MANUAL_CHUNKS).map().flatten().value();
    Object.keys(dependencies).forEach((key) => {
        if (chunked.includes(key)) return;
        chunks[key] = [key];
    });
    return chunks;
};

export default defineConfig({
    plugins: [
        react(),
        eslintPlugin(),
        imagetools({
            include: "**/*.{jpeg,jpg,png,webp}*",
            defaultDirectives: (url) => {
                const fileDirective = FILE_DIRECTIVES.find(({ isMatch }) =>
                    isMatch(url.pathname)
                );

                if (fileDirective) {
                    if (typeof fileDirective.directive === "function") {
                        return fileDirective.directive(url);
                    }
                    return fileDirective.directive;
                }

                // Default directive. Convert asset to webp format.
                return new URLSearchParams({
                    format: "webp",
                });
            },
        }),
    ],
    root: "src",
    assetsInclude: ["**/*.vcf"],
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        assetsInlineLimit: 0,
        sourcemap: false,
        rollupOptions: {
            input: resolve(__dirname, "src/index.html"),
            output: {
                assetFileNames: () => {
                    // If you want to preserve the asset file name, use the post-build script instead to copy the file to the dist folder.
                    // Assets used in the website should have a hash to prevent showing outdated assets due to caching.
                    return "assets/[name].[hash].[ext]";
                },
                manualChunks: {
                    ...MANUAL_CHUNKS,
                    ...chunkDependencies(),
                },
            },
        },
    },
    server: {
        port: 3000,
    },
    preview: {
        port: 3001,
        strictPort: true,
    },
});
