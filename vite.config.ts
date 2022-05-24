import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import wc from "wildcard-match";

const PRESERVED_NAMES = [wc("Tristan.jpg")];

const directives = {
    webp: new URLSearchParams({
        format: "webp",
    }),
};

const fileDirectives: {
    isMatch: ReturnType<typeof wc>;
    directive: URLSearchParams | ((url: URL) => URLSearchParams);
}[] = [
    {
        isMatch: wc("**/src/assets/images/Tristan.jpg"),
        directive: new URLSearchParams({
            format: "webp",
            width: "200",
            height: "200",
        }),
    },
    {
        isMatch: wc("**/src/assets/images/skills/*"),
        directive: new URLSearchParams({
            format: "webp",
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
            width: "25",
            height: "25",
            fit: "cover",
        }),
    },
    {
        isMatch: wc("**/src/assets/images/education/*"),
        directive: new URLSearchParams({
            format: "webp",
            width: "128",
            height: "64",
            fit: "contain",
            background: "transparent",
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
                    if (typeof fileDirective.directive === "function") {
                        return fileDirective.directive(url);
                    }
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
