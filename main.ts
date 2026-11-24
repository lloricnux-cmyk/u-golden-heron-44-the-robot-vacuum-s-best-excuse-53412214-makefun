// The Robot Vacuum's Best Excuse — make.fun entry.
// Writes one original excuse line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Node 22 stdlib only, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My cliff sensor says your black sock is a bottomless pit, and I don't risk my life for crumbs.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
