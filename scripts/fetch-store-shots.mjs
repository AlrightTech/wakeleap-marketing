#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "store");

const BASE = "https://play-lh.googleusercontent.com/";
const shots = [
  { id: "ZlE7n8j_R4TWYzCwjW6JrBMq6oUlaHExuBPpnHfkai23GVVb6Oj8z8BXBceXvlP1oy5kB0OFJ7vPIuf5MdQL", device: "phone" },
  { id: "ZTGTPxwaied3Q4TxMRI2lwOUXWMgy1SEs4F9EfRP-EA-6iujuuM8QVIkFks8X8Embq1e52X9qYyuJCyYC83K", device: "phone" },
  { id: "QIfBE2Ad87mBWojivWKl1D9WIvTMLXphLLT2KXDP8SJJWLp_iQSN5-3SO0r3MkeVV3_k3Bnkn2fUKr9nk_mM", device: "phone" },
  { id: "HmQaGS2DyPecHQSeC8IIeaxIBeR0dlGTHlNqz6lxFR0ivg6kb5osvhycleZ4l839Pq73VtGeyLiNe7DZnVwmnpI", device: "phone" },
  { id: "PCZlfVYyFs9MbMSKYF_m9HqNQxBR55SSW1eHt7zNfiPVEyCNoJIgC02rlycaW5TcTq3WGp-0h78Cm4bBZpYnOw", device: "phone" },
  { id: "WecaWcJ86MNn5prtUT_ow8P2GT6DvPVEFOsqKl38pP1dQplKcknY3TUaHqLhCu0_suqJ0LiWPleS4s295caMvA", device: "phone" },
  { id: "XRsd9QU-ptY5FPpD5Dj5f0buVEbXblRlKjo_fYtqZQq5odclXbM3O9s62sC2qsr4EnaVl6Rzw4RS7iEXGyVh", device: "phone" },
  { id: "0DsWD2NivEh9kIIVX0u5oa52MzKucGVUrbl4p7GWrrgkyxSczgjl-IVBeHXYIEkGFiMgiCAzc2MPeNKU5Xb9", device: "phone" },
  { id: "Tm3k55UCZ9SS-TblkbEnmJ7uIOgEkVZ5lZFveHbzVZaf1L03piNmZ5rqO1uyOM__9ilV3MpuedGr3D78P3bSqQ", device: "tablet" },
  { id: "ejzLyHg7MBItMnCjh03LYy5R905bd-wBF-PTuhv7oM5zEvWoqC0Iv5pBTSvqNMO2lA1-1ngo5ybzEv8M1mAfYQ", device: "tablet" },
  { id: "WwLwNk_bEog-D5vKusk_f3eZUKhmuW1_zt-NsMB7qpk21vfTGYr4LWCAejrIeIC4TEf5dIueFGXq96Jp7OR2cQ", device: "tablet" },
  { id: "iXmE9QHsBeT0LWXEYdJ1uS1aiz6tsi7ItyuUyev-fcdPZieta5D2L06vWNATI9pODD1WxTy9_nHfE3OYzOzQqg", device: "tablet" },
  { id: "hicWl_v3-Y0Shk7Z1Lp8J8MejwCwdubMUKAgu_n5dcfH6cUW8JWn0EleCV2YGug0skqBad8Bx-hqcWh3Lmki2eE", device: "tablet" },
  { id: "iEN_OrDqhX_r0vjtUSYDxrVdp1-oymJmv8___4eleVl8WVz3Jr_Tx7L6RWPt5J8L1T4eQo77meE15X7pHRTV", device: "tablet" },
  { id: "Xbkm2pJdKl8EUdZDWAbfmUNyN9unbV6Q4jkW14Muk5fFGnEjTg6sl9TQqaHdDzN_mk6mSCNYf8ugppBHNC3lBA", device: "tablet" },
  { id: "M5LDAq0vB4GttX1k2qKZhcVHAYgNIu1QbKBcEVGEr9QVkCTFfEf8oa-aYblic8RIOGmZ1fHcPO9JvwgcrfGToQ", device: "tablet" },
];

fs.mkdirSync(outDir, { recursive: true });

let phone = 0;
let tablet = 0;

for (const s of shots) {
  const n = s.device === "phone" ? ++phone : ++tablet;
  const size = s.device === "phone" ? "=w828-h1792" : "=w1200";
  const url = `${BASE}${s.id}${size}`;
  const webp = path.join(outDir, `shot-${String(n).padStart(2, "0")}-${s.device}.webp`);
  const tmp = path.join(outDir, `_tmp-${n}.img`);
  process.stdout.write(`Fetching ${webp}... `);
  const res = await fetch(url);
  if (!res.ok) {
    console.log(`FAIL ${res.status}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(tmp, buf);
  try {
    execSync(`cwebp -q 82 "${tmp}" -o "${webp}"`, { stdio: "pipe" });
    const kb = Math.round(fs.statSync(webp).size / 1024);
    console.log(`${kb}KB`);
  } catch (e) {
    // Source may already be webp/png
    fs.copyFileSync(tmp, webp);
    console.log("copied");
  }
  fs.unlinkSync(tmp);
}

console.log("Done.");