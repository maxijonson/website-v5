import fs from "fs-extra";
import path from "path";

const OUT = path.resolve(__dirname, "../../dist");
const SRC = path.resolve(__dirname, "..");

const ASSETS = path.join("assets");
const ASSETS_IMAGES = path.join(ASSETS, "images");

const COPY_PATHS = [
    path.join(ASSETS_IMAGES, "tristan"),
    path.join(ASSETS_IMAGES, "maxijonson"),
    path.join(ASSETS_IMAGES, "logo"),
    path.join(ASSETS_IMAGES, "meta"),
];

COPY_PATHS.forEach((copyPath) => {
    fs.copySync(path.resolve(SRC, copyPath), path.resolve(OUT, copyPath));
});
