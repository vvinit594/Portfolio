import sharp from "sharp";
import toIco from "to-ico";
import { mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourceIcon = path.join(root, "public", "favicon.ico");
const sourceOg = path.join(root, "public", "og-image.png");
const appDir = path.join(root, "src", "app");
const publicDir = path.join(root, "public");

await mkdir(appDir, { recursive: true });

const iconPipeline = sharp(sourceIcon).resize(512, 512, {
  fit: "contain",
  background: { r: 11, g: 11, b: 15, alpha: 1 },
});

await iconPipeline.clone().resize(32, 32).png().toFile(path.join(appDir, "icon.png"));
await iconPipeline
  .clone()
  .resize(180, 180)
  .png()
  .toFile(path.join(appDir, "apple-icon.png"));
const faviconPngPath = path.join(publicDir, "favicon.png");
await iconPipeline.clone().resize(48, 48).png().toFile(faviconPngPath);

const iconPng = await readFile(path.join(appDir, "icon.png"));
const faviconIco = await toIco([iconPng]);
await writeFile(path.join(appDir, "favicon.ico"), faviconIco);
await writeFile(path.join(publicDir, "favicon.ico"), faviconIco);

const ogTemp = path.join(publicDir, "og-image.tmp.png");
const ogPipeline = sharp(sourceOg).resize(1200, 630, {
  fit: "cover",
  position: "centre",
});

await ogPipeline
  .clone()
  .png({ quality: 82, compressionLevel: 9 })
  .toFile(path.join(appDir, "opengraph-image.png"));

await ogPipeline
  .png({ quality: 82, compressionLevel: 9 })
  .toFile(ogTemp);

await unlink(path.join(publicDir, "og-image.png")).catch(() => undefined);
await rename(ogTemp, path.join(publicDir, "og-image.png"));

const stat = async (file) => (await sharp(file).metadata()).size;
console.log("Optimized asset sizes (bytes):", {
  icon: await stat(path.join(appDir, "icon.png")),
  apple: await stat(path.join(appDir, "apple-icon.png")),
  faviconPng: await stat(path.join(publicDir, "favicon.png")),
  ogApp: await stat(path.join(appDir, "opengraph-image.png")),
  ogPublic: await stat(path.join(publicDir, "og-image.png")),
});
