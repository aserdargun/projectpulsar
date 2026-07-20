import { promises as fs } from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(absolute)));
    else files.push(absolute);
  }
  return files;
}

function candidatePaths(url) {
  const clean = decodeURI(url.split("#")[0].split("?")[0]);
  const relative = clean.replace(/^\/+/, "");
  if (!relative) return [path.join(dist, "index.html")];
  if (path.extname(relative)) return [path.join(dist, relative)];
  return [
    path.join(dist, relative),
    path.join(dist, relative, "index.html"),
    path.join(dist, `${relative}.html`)
  ];
}

const htmlFiles = (await walk(dist)).filter((file) => file.endsWith(".html"));
const failures = [];
const attributePattern = /\b(?:href|src)=["']([^"'<>]+)["']/g;

for (const file of htmlFiles) {
  const source = await fs.readFile(file, "utf8");
  for (const match of source.matchAll(attributePattern)) {
    const url = match[1];
    if (
      /^(?:https?:|mailto:|tel:|data:|#)/.test(url) ||
      url.startsWith("//")
    ) {
      continue;
    }

    const candidates = candidatePaths(url);
    let found = false;
    for (const candidate of candidates) {
      try {
        await fs.access(candidate);
        found = true;
        break;
      } catch {
        // Continue to the next generated-file shape.
      }
    }
    if (!found) {
      failures.push(
        `${path.relative(dist, file)} -> ${url} (${candidates
          .map((candidate) => path.relative(dist, candidate))
          .join(", ")})`
      );
    }
  }
}

if (failures.length > 0) {
  console.error("Broken local links:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Checked local links in ${htmlFiles.length} generated HTML files.`);
