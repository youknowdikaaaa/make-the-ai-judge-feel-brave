import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text to steady the reader: a concrete, unhurried image.
// No instructions, no wellness stock phrases — just rain, a roof, and time.
const TEXT =
  "Rain has stopped, but the roof is still talking: one drop, then another, then a long quiet while the next one gathers. You don't have to catch any of them. They fall whether you watch or not, and the roof is holding.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.MAKEFUN_BOT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
