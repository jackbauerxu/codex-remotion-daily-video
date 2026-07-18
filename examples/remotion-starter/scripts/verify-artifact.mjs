import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

function arg(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

const target = process.argv[2];
const kind = arg('--kind', target?.endsWith('.png') ? 'still' : 'mp4');

if (!target) {
  console.error('Usage: node scripts/verify-artifact.mjs outputs/example.mp4 --kind mp4');
  process.exit(1);
}

const absolute = path.resolve(target);

if (!fs.existsSync(absolute)) {
  console.error(`Artifact missing: ${target}`);
  process.exit(1);
}

const stat = fs.statSync(absolute);
const minBytes = kind === 'still' ? 1000 : 10000;

if (stat.size < minBytes) {
  console.error(`Artifact too small: ${target} (${stat.size} bytes)`);
  process.exit(1);
}

if (kind === 'mp4' && path.extname(target) !== '.mp4') {
  console.error('MP4 artifact must use .mp4 extension');
  process.exit(1);
}

console.log(`Artifact OK: ${target} (${stat.size} bytes)`);
