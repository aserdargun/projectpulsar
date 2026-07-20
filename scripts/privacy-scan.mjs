import { promises as fs } from "node:fs";
import path from "node:path";

const roots = ["src", "public", "dist"];
const extensions = new Set([
  ".astro",
  ".css",
  ".html",
  ".js",
  ".json",
  ".md",
  ".svg",
  ".txt",
  ".ts",
  ".xml"
]);
const blocked = [
  /enerjisa/iu,
  /aveva/iu,
  /\bsap\b/iu,
  /\bswapp\b/iu,
  /\bvitals\b/iu,
  /\batlas\b/iu,
  /\bforge\b/iu,
  /\bb300\b/iu,
  /\bgb300\b/iu,
  /\bmi355x\b/iu,
  /confidentiality:\s*internal/iu,
  /organization:\s*/iu
];

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      files.push(...(await walk(absolute)));
    } else if (extensions.has(path.extname(entry.name))) {
      files.push(absolute);
    }
  }
  return files;
}

const findings = [];

for (const root of roots) {
  try {
    const files = await walk(path.resolve(root));
    for (const file of files) {
      if (file.endsWith("privacy-scan.mjs")) continue;
      const source = await fs.readFile(file, "utf8");
      for (const pattern of blocked) {
        if (pattern.test(source)) {
          findings.push(`${path.relative(process.cwd(), file)} matched ${pattern}`);
        }
        pattern.lastIndex = 0;
      }
    }
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

if (findings.length > 0) {
  console.error("Privacy scan failed:");
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log("Privacy scan passed for source, public assets and build output.");
