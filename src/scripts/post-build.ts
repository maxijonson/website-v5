import fs from "fs-extra";
import path from "path";

const OUT = path.resolve(__dirname, "../../dist");
const OUT_ASSETS = path.resolve(OUT, "assets");

const SRC = path.resolve(__dirname, "..");
const SRC_ASSETS = path.resolve(SRC, "assets");
const SRC_IMAGES = path.resolve(SRC_ASSETS, "images");

// Copy profile pictures
fs.copySync(
    path.resolve(SRC_IMAGES, "tristan"),
    path.resolve(OUT_ASSETS, "tristan")
);

// Copy logos
fs.copySync(path.resolve(SRC_IMAGES, "logo"), path.resolve(OUT_ASSETS, "logo"));

// Copy OG images
fs.copySync(
    path.resolve(SRC_IMAGES, "meta/og-image.jpg"),
    path.resolve(OUT_ASSETS, "meta/og-image.jpg")
);
