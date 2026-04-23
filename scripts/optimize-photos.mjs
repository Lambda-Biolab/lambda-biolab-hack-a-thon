#!/usr/bin/env node
// Optimize every raster image under public/photos and public/tracks:
// - Resize down to a target max-width (photos: 1600w; small icons: 256w)
// - Convert to WebP at quality 82 (visually lossless for photos)
// - Write sibling .webp file, leaving original in place
//
// The script is idempotent — re-running regenerates the .webp outputs.
// After running, delete the originals in a separate commit so reviewers
// see the size win clearly. Update src/ references from .jpg/.jpeg/.png
// to .webp.
//
// Usage: pnpm optimize:photos

import { readdir, stat, mkdir } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";
import sharp from "sharp";

const ROOT = new URL("../public/", import.meta.url).pathname;

const TARGETS = [
  { dir: "photos", maxWidth: 1600, quality: 82 },
  { dir: "tracks", maxWidth: 256, quality: 85 },
];

const RASTER = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);

async function walk(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (RASTER.has(extname(e.name))) out.push(p);
  }
  return out;
}

function toWebp(path) {
  return join(dirname(path), basename(path, extname(path)) + ".webp");
}

async function main() {
  let before = 0;
  let after = 0;
  let count = 0;

  for (const { dir, maxWidth, quality } of TARGETS) {
    const abs = join(ROOT, dir);
    const files = await walk(abs);

    for (const src of files) {
      const dst = toWebp(src);
      await mkdir(dirname(dst), { recursive: true });
      const rel = src.replace(ROOT, "");

      try {
        const srcSize = (await stat(src)).size;
        // failOn: "none" tolerates images with minor corruption (truncated
        // EXIF, non-standard markers, etc.) that would otherwise abort.
        const img = sharp(src, { failOn: "none" }).rotate();
        const meta = await img.metadata();

        const needsResize = (meta.width ?? 0) > maxWidth;
        const pipeline = needsResize
          ? img.resize({ width: maxWidth, withoutEnlargement: true })
          : img;

        await pipeline.webp({ quality, effort: 6 }).toFile(dst);

        const dstSize = (await stat(dst)).size;
        before += srcSize;
        after += dstSize;
        count++;

        const pct = ((1 - dstSize / srcSize) * 100).toFixed(0);
        console.log(
          `  ${rel}  ${(srcSize / 1024).toFixed(0)}KB -> ${(dstSize / 1024).toFixed(0)}KB  (-${pct}%)`,
        );
      } catch (err) {
        console.warn(`  ${rel}  SKIPPED — ${err.message}`);
      }
    }
  }

  console.log(
    `\n${count} files: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(1)}MB  (-${((1 - after / before) * 100).toFixed(0)}%)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
