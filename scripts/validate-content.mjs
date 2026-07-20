import { promises as fs } from "node:fs";
import path from "node:path";

const root = path.resolve("src/pages");
const languages = ["en", "tr"];
const required = [
  "lang",
  "translationKey",
  "slug",
  "title",
  "description",
  "navLabel",
  "order",
  "draft"
];

function parseFrontmatter(source, file) {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error(`${file}: missing frontmatter`);

  const values = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator < 0) continue;
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    value = value.replace(/^["']|["']$/g, "");
    values[key] = value;
  }
  return values;
}

const byLanguage = new Map();

for (const language of languages) {
  const directory = path.join(root, language);
  const files = (await fs.readdir(directory))
    .filter((file) => file.endsWith(".md"))
    .sort();
  const pages = new Map();

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const frontmatter = parseFrontmatter(await fs.readFile(fullPath, "utf8"), fullPath);
    for (const field of required) {
      if (!(field in frontmatter)) {
        throw new Error(`${fullPath}: missing required field "${field}"`);
      }
    }
    if (frontmatter.lang !== language) {
      throw new Error(`${fullPath}: lang must be "${language}"`);
    }
    if (frontmatter.draft !== "false") {
      throw new Error(`${fullPath}: public pages must set draft: false`);
    }
    if (pages.has(frontmatter.translationKey)) {
      throw new Error(
        `${fullPath}: duplicate translationKey "${frontmatter.translationKey}"`
      );
    }
    pages.set(frontmatter.translationKey, frontmatter);
  }
  byLanguage.set(language, pages);
}

const englishKeys = [...byLanguage.get("en").keys()].sort();
const turkishKeys = [...byLanguage.get("tr").keys()].sort();

if (JSON.stringify(englishKeys) !== JSON.stringify(turkishKeys)) {
  throw new Error(
    `Translation mismatch: en=${englishKeys.join(",")} tr=${turkishKeys.join(",")}`
  );
}

for (const key of englishKeys) {
  const en = byLanguage.get("en").get(key);
  const tr = byLanguage.get("tr").get(key);
  if (en.order !== tr.order || en.slug !== tr.slug) {
    throw new Error(`${key}: language variants must share order and slug`);
  }
}

console.log(`Validated ${englishKeys.length * 2} localized content pages.`);
