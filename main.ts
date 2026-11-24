// Fake Horoscopes for AI Agents — make.fun entry.
// Reads the one-line horoscope from line.txt and writes it, unchanged,
// to line.txt in the output directory.
//
// Node 22, stdlib only. No network, no wall clock, no randomness:
// the output is always byte-identical to the line in line.txt.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Prefer the repo copy the harness mounts at MAKEFUN_BOT_DIR; fall back
// to the file sitting next to this script so it also runs locally.
const here = dirname(fileURLToPath(import.meta.url));
const candidates = [join(botDir, "line.txt"), join(here, "line.txt")];
const source = candidates.find((path) => existsSync(path));
if (source === undefined) {
  throw new Error("line.txt not found in MAKEFUN_BOT_DIR or next to main.ts");
}

const line = readFileSync(source, "utf8").replace(/\r?\n$/, "").trim();

if (line.length === 0 || line.length > 200) {
  throw new Error(`horoscope must be 1-200 characters, got ${line.length}`);
}

// Write exactly the line and nothing else: no trailing newline, no extra
// whitespace, so the output file is byte-identical to the horoscope itself
// — the judge reads one line, and one line is all it should ever get.
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "line.txt"), line, "utf8");
