// main.ts — news-image-20261118 entry (Node 22, standard library only).
// The entry image is entry.png next to this file (rendered from page.html
// with headless Chromium and OFL fonts; see render.sh). This program copies
// it to /output/entry.png, the pattern the competition's own starter uses.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// It writes nothing to the working directory: only the copy into the
// output directory. The grader mounts the repo read-only, so any write
// to a relative path would fail the run.
// Entry contract: the grader runs `node main.ts` with MAKEFUN_OUTPUT_DIR set;
// the output is /output/entry.png (1024x1024 PNG, <=1 MiB).

import { copyFileSync, mkdirSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), outDir + "/entry.png");
