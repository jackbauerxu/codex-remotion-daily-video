import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {fileURLToPath} from 'node:url';

const lanes = new Set([
  'book-summary',
  'product-explainer',
  'data-explainer',
  'tool-tutorial',
  'opinion-explainer',
  'quote-card',
  'podcast-clip'
]);

export function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function validateContent(content, baseDir = process.cwd()) {
  const errors = [];

  for (const key of ['id', 'lane', 'title', 'durationSec', 'platform', 'format', 'hook', 'scenes', 'ending']) {
    if (!(key in content)) errors.push(`Missing required field: ${key}`);
  }

  if (!lanes.has(content.lane)) errors.push(`Unsupported lane: ${content.lane}`);
  if (!Number.isFinite(content.durationSec) || content.durationSec < 10) {
    errors.push('durationSec must be a number >= 10');
  }
  if (!content.format || content.format.width <= 0 || content.format.height <= 0 || content.format.fps <= 0) {
    errors.push('format must include positive width, height, and fps');
  }
  if (!Array.isArray(content.scenes) || content.scenes.length < 1) {
    errors.push('scenes must contain at least one scene');
  }

  content.scenes?.forEach((scene, index) => {
    for (const key of ['type', 'title', 'caption', 'visual']) {
      if (!scene[key]) errors.push(`Scene ${index + 1} missing ${key}`);
    }
    if (scene.caption && scene.caption.length > 34) {
      errors.push(`Scene ${index + 1} caption is likely too long for two-line mobile subtitles`);
    }
    if (scene.asset) {
      const assetPath = path.resolve(baseDir, scene.asset);
      if (!fs.existsSync(assetPath)) errors.push(`Scene ${index + 1} asset not found: ${scene.asset}`);
    }
  });

  if (!content.ending?.summary) errors.push('ending.summary is required');

  return errors;
}

function main() {
  const contentPath = process.argv[2] || 'content/example.json';
  const absolute = path.resolve(contentPath);
  const content = readJson(absolute);
  const errors = validateContent(content, path.dirname(absolute));

  if (errors.length) {
    console.error(errors.map((error) => `- ${error}`).join('\n'));
    process.exit(1);
  }

  console.log(`Content OK: ${contentPath}`);
}

const isMain = process.argv[1] === fileURLToPath(import.meta.url);
if (isMain) main();
