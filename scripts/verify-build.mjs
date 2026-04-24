#!/usr/bin/env node
// Acceptance contract for the static build. Asserts post-build state for
// the custom-domain migration + site-config extraction. Runs against
// out/ after `GITHUB_PAGES=true pnpm build`.
//
// Usage: pnpm verify:build
//
// Exit 0 = all checks pass. Exit 1 = one or more contract violations
// listed with file:line context.

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname;
const EXPECTED_DOMAIN = "hack-basel.lambdabiolab.com";
const OLD_DOMAIN = "lambda-biolab.github.io";
const OLD_BASEPATH = "/lambda-biolab-hack-a-thon/";

/** @type {Array<{ok: boolean, label: string, detail?: string}>} */
const results = [];

/** @param {string} label @param {boolean} ok @param {string} [detail] */
function check(label, ok, detail) {
  results.push({ ok, label, detail });
}

function read(rel) {
  const p = join(OUT, rel);
  if (!existsSync(p)) return null;
  return readFileSync(p, "utf8");
}

// --- CNAME ---
const cname = read("CNAME");
check(
  "out/CNAME exists",
  cname !== null,
  cname === null ? "missing — custom domain will be stripped on deploy" : undefined,
);
check(
  "out/CNAME contents match custom domain",
  cname !== null && cname.trim() === EXPECTED_DOMAIN,
  cname !== null ? `got: ${JSON.stringify(cname.trim())}` : undefined,
);

// --- robots.txt ---
const robots = read("robots.txt");
check("out/robots.txt exists", robots !== null);
check(
  "robots.txt references new domain in Sitemap: directive",
  robots !== null && robots.includes(`Sitemap: https://${EXPECTED_DOMAIN}/sitemap.xml`),
  robots !== null
    ? `first 200 chars: ${robots.slice(0, 200)}`
    : undefined,
);
check(
  "robots.txt does not mention old domain",
  robots === null || !robots.includes(OLD_DOMAIN),
);

// --- sitemap.xml ---
const sitemap = read("sitemap.xml");
check("out/sitemap.xml exists", sitemap !== null);
check(
  "sitemap.xml <loc> uses new domain",
  sitemap !== null && sitemap.includes(`<loc>https://${EXPECTED_DOMAIN}</loc>`),
  sitemap !== null
    ? `snippet: ${sitemap.slice(50, 200)}`
    : undefined,
);
check(
  "sitemap.xml has <lastmod>",
  sitemap !== null && /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/.test(sitemap),
);
check(
  "sitemap.xml does not mention old domain",
  sitemap === null || !sitemap.includes(OLD_DOMAIN),
);

// --- index.html ---
const html = read("index.html");
check("out/index.html exists", html !== null);
check(
  "index.html canonical link points to new domain",
  html !== null &&
    new RegExp(`<link rel="canonical" href="https://${EXPECTED_DOMAIN}"`).test(html),
);
check(
  "index.html og:url uses new domain",
  html !== null &&
    new RegExp(`<meta property="og:url" content="https://${EXPECTED_DOMAIN}"`).test(
      html,
    ),
);
check(
  "index.html og:image uses new domain",
  html !== null &&
    new RegExp(
      `<meta property="og:image" content="https://${EXPECTED_DOMAIN}/og-image.png"`,
    ).test(html),
);
check(
  "index.html contains JSON-LD Event schema",
  html !== null && html.includes('"@type":"Event"'),
);
check(
  "index.html JSON-LD references new domain only",
  html !== null && !new RegExp(`"url":"https://${OLD_DOMAIN}`).test(html),
);

// --- basePath fully removed ---
check(
  "index.html asset src paths are root-relative (no basePath prefix)",
  html !== null && !html.includes(OLD_BASEPATH),
  html !== null && html.includes(OLD_BASEPATH)
    ? `found '${OLD_BASEPATH}' in index.html — asset paths still prefixed`
    : undefined,
);
check(
  "robots.txt has no basePath prefix",
  robots === null || !robots.includes(OLD_BASEPATH),
);
check(
  "sitemap.xml has no basePath prefix",
  sitemap === null || !sitemap.includes(OLD_BASEPATH),
);

// --- llms.txt (if present) ---
const llms = read("llms.txt");
if (llms !== null) {
  check("llms.txt does not reference old domain", !llms.includes(OLD_DOMAIN));
}

// --- report ---
const failed = results.filter((r) => !r.ok);
const passed = results.length - failed.length;

for (const r of results) {
  const icon = r.ok ? "✓" : "✗";
  const detail = r.detail ? `\n    ${r.detail}` : "";
  console.log(`  ${icon} ${r.label}${detail}`);
}

console.log(`\n${passed}/${results.length} checks passed`);

if (failed.length) {
  console.error(`\n✗ ${failed.length} contract violation(s) — see above.`);
  process.exit(1);
}

console.log("\n✅ build output matches the custom-domain contract.");
