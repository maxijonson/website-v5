import fs from "fs";
import path from "path";

const OUT = path.resolve(__dirname, "../../dist");
const OUT_ASSETS = path.resolve(OUT, "assets");

const SRC = path.resolve(__dirname, "..");
const SRC_ASSETS = path.resolve(SRC, "assets");
const SRC_IMAGES = path.resolve(SRC_ASSETS, "images");

// Copy profile picture
fs.copyFileSync(
    path.resolve(SRC_IMAGES, "Tristan.jpg"),
    path.resolve(OUT_ASSETS, "Tristan.jpg")
);

// Copy OG images
fs.mkdirSync(path.resolve(OUT_ASSETS, "meta"), { recursive: true });
fs.copyFileSync(
    path.resolve(SRC_IMAGES, "meta/og-image.jpg"),
    path.resolve(OUT_ASSETS, "meta/og-image.jpg")
);
