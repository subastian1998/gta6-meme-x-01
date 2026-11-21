import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

// Copy POST.json from the repository root into the grader output directory.
// The repository root is MAKEFUN_BOT_DIR (or the current directory when unset),
// and the destination is MAKEFUN_OUTPUT_DIR (or /output when unset).
// Deterministic by design: no network, no clock, no files outside the repo;
// the same input bytes always produce the same output bytes.
const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? ".");
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

const sourcePath = join(botDir, "POST.json");
const raw = readFileSync(sourcePath, "utf8");
const parsed = JSON.parse(raw) as unknown;
if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  throw new Error("POST.json must be a JSON object");
}
const url = (parsed as Record<string, unknown>).url;
if (typeof url !== "string" || url.length === 0) {
  throw new Error("POST.json must carry a non-empty url string");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, join(outputDir, "POST.json"));
