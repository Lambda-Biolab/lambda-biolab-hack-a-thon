#!/usr/bin/env node
// Generate share card images from the Lambda Biolab avatar + event copy.
// Two outputs:
//   public/og-image.png             — 1200x630, OG/Twitter standard
//   .github/social-preview.png      — 1280x640, GitHub repo social preview
// Upload the second manually at Settings -> General -> Social preview.
//
// Usage: pnpm generate:og

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = new URL("../", import.meta.url).pathname;
const AVATAR = join(ROOT, "src/app/icon.png");

const VARIANTS = [
  { width: 1200, height: 630, out: "public/og-image.png" },
  { width: 1280, height: 640, out: ".github/social-preview.png" },
];

function cardSvg(width, height) {
  // Left: 320px area for avatar (composited by sharp, not drawn here).
  // Right: text block. textX must match avatarX + avatarSize + gap.
  const avatarSize = 320;
  const textX = Math.round(width * 0.1) + avatarSize + 60;
  const textY = Math.round(height * 0.4);

  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#08090a"/>
      <stop offset="100%" stop-color="#161b22"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect x="0" y="${height - 8}" width="${width}" height="8" fill="#5e6ad2"/>
  <g>
    <text x="${textX}" y="${textY}" font-family="Inter, system-ui, sans-serif" font-size="72" font-weight="600" fill="#f0f0f0" letter-spacing="-2">Lambda Hack Basel</text>
    <text x="${textX}" y="${textY + 70}" font-family="Inter, system-ui, sans-serif" font-size="32" font-weight="400" fill="#b0b4bc">May 16–17, 2026 · Basel, Switzerland</text>
    <text x="${textX}" y="${textY + 130}" font-family="Inter, system-ui, sans-serif" font-size="28" font-weight="400" fill="#8a8f98">Five tracks. Real lab. Open science.</text>
    <text x="${textX}" y="${height - 60}" font-family="ui-monospace, SFMono-Regular, monospace" font-size="20" font-weight="400" fill="#5e6ad2">by Lambda Biolab · Bioengineering everything since 2022</text>
  </g>
</svg>`;
}

async function main() {
  const avatar = await readFile(AVATAR);
  const avatarResized = await sharp(avatar).resize(320, 320).png().toBuffer();

  for (const { width, height, out } of VARIANTS) {
    const avatarX = Math.round(width * 0.1);
    const avatarY = Math.round((height - 320) / 2);
    const svg = Buffer.from(cardSvg(width, height));

    await sharp(svg)
      .composite([{ input: avatarResized, left: avatarX, top: avatarY }])
      .png()
      .toFile(join(ROOT, out));

    console.log(`  ${out}  ${width}x${height}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
