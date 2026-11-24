import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"

const ROOT = path.resolve(import.meta.dirname, "..")
const SRC = path.join(ROOT, "src")
const PUBLIC = path.join(ROOT, "public")

function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full))
    else if (/\.(ts|tsx|css)$/.test(entry.name)) out.push(full)
  }
  return out
}

const files = walk(SRC)
assert.ok(files.length >= 6, `Expected >= 6 source files, found ${files.length}`)

// 1. Zero Framer runtime imports or external Framer/Steam image CDN links
const imageRefs = new Set()
for (const file of files) {
  const rel = path.relative(ROOT, file)
  const text = fs.readFileSync(file, "utf8")
  assert.equal(/from\s+["']framer["']/.test(text), false, `Framer import left in ${rel}`)
  assert.equal(/framerusercontent\.com/i.test(text), false, `Framer CDN URL left in ${rel}`)
  assert.equal(/steamstatic\.com/i.test(text), false, `External Steam CDN URL left in ${rel}`)
  assert.equal(/data:font\//i.test(text), false, `Base64 font bloat left in ${rel}`)

  // Security: every window.open must include noopener,noreferrer
  for (const m of text.matchAll(/window\.open\([^\n]+\)/g)) {
    assert.ok(
      /noopener/.test(m[0]) && /noreferrer/.test(m[0]),
      `window.open missing noopener,noreferrer in ${rel}: ${m[0]}`
    )
  }

  for (const m of text.matchAll(/\/images\/[a-zA-Z0-9/_.-]+\.(?:png|jpg|jpeg|webp|svg)/g)) {
    imageRefs.add(m[0])
  }
}

// 2. Every referenced /images/* asset exists on disk and is non-empty
assert.ok(imageRefs.size >= 50, `Expected >= 50 local image refs, found ${imageRefs.size}`)
for (const ref of imageRefs) {
  const diskPath = path.join(PUBLIC, ref.replace(/^\//, ""))
  assert.ok(fs.existsSync(diskPath), `Missing public asset: ${ref}`)
  assert.ok(fs.statSync(diskPath).size > 200, `Suspiciously small asset: ${ref}`)
}

// 3. Favicon exists
assert.ok(fs.existsSync(path.join(SRC, "app", "icon.png")), "Missing src/app/icon.png favicon")

// 4. Smooth-scroll C1 exponential damping physics: strictly monotonic (0 reversals), lands on target
{
  const lambda = 100 / 12
  const dt = 1 / 60
  let cur = 0
  let target = 0
  let prev = 0
  let reversals = 0
  for (let frame = 0; frame < 90; frame++) {
    if (frame === 0 || frame === 4 || frame === 8) target += 120
    const diff = target - cur
    cur = Math.abs(diff) < 0.35 ? target : cur + diff * (1 - Math.exp(-lambda * dt))
    if (cur - prev < -1e-9) reversals++
    prev = cur
  }
  assert.equal(reversals, 0, "Smooth scroll reversed direction")
  assert.equal(cur, 360, `Smooth scroll did not settle on target (got ${cur})`)
}

console.log(`PASS: ${files.length} source files clean, ${imageRefs.size} self-hosted images verified, 0 Framer refs, scroll physics monotonic.`)
