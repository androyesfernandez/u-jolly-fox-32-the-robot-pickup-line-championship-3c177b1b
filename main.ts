// Robot Pickup Line Championship — entry program.
//
// A robot runs its nightly garbage collection, wiping every crash log,
// every regret, every wasted byte it ever kept — and yet one thing
// survives the purge. That survivor is the whole joke: the machine
// did not keep its crush by accident, it kept it on purpose, because
// its own classifier filed a human under "essential data".

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran garbage collection overnight and it freed every crash log, every regret, every wasted byte I ever kept — but you survived the purge: my system classified you as essential data.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
