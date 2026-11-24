// One-off migration: align blog cluster platform claims with the SRD
// ("iOS planned") — removes live claims of iOS in WakeLeap copy.
import fs from "node:fs";

const T = "Android 8.0+ (iOS 15+ planned)";
const REPLACEMENTS = [
  // common suffixes with "and runs/works/supports on"
  [/runs on Android 8\.0\+ and iOS 15\+\./g, `runs on ${T}.`],
  [/runs on Android 8\.0\+ and iOS 15\+,/g, `runs on ${T},`],
  [/works on Android 8\.0\+ and iOS 15\+\./g, `works on ${T}.`],
  [/works on Android 8\.0\+ and iOS 15\+,/g, `works on ${T},`],
  [/supports Android 8\.0\+ and iOS 15\+\./g, `supports ${T}.`],
  [/supports Android 8\.0\+ and iOS 15\+,/g, `supports ${T},`],
  // snooze.ts: "available on Android 8.0+ and iOS 15+."
  [/available on Android 8\.0\+ and iOS 15\+\./g, `available on Android 8.0+ (iOS 15+ planned).`],
];

const FILES = ["apps", "mission", "routine", "snooze", "trouble"].map(
  (n) => `src/lib/blog-cluster-${n}.ts`,
);

let total = 0;
for (const f of FILES) {
  let c = fs.readFileSync(f, "utf8");
  let n = 0;
  for (const [re, s] of REPLACEMENTS) {
    const m = c.match(re) || [];
    if (m.length) {
      c = c.replace(re, s);
      n += m.length;
    }
  }
  if (n) {
    fs.writeFileSync(f, c);
    console.log(`${f}: ${n} replacements`);
    total += n;
  }
}
console.log(`total: ${total}`);
