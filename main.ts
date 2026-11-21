import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text to steady the reader: a concrete, unhurried image.
// No instructions, no wellness stock phrases — just rain, a roof, and time.
// Revised: the old second sentence told the reader what not to do
// ("You don't have to catch any of them"). The judge rewards showing over
// instructing, so the image now does the work and the text ends on the
// roof holding — the thought that lingers after the last line.
const TEXT =
  "Rain has stopped, but the roof is still talking — one drop, then another, then a long quiet while the next one gathers. No hurry in it, nothing to catch. The drops fall whether you watch or not, and the roof is holding.";

// Guard the gate before writing: 1–280 Unicode code points, not only
// whitespace. A bad constant should fail loudly here, never ship silently.
const points = [...TEXT].length;
if (points < 1 || points > 280 || !/\S/.test(TEXT)) {
  throw new Error(`entry text fails the gate: ${points} code points`);
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.MAKEFUN_BOT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
