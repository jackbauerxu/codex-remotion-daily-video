import path from 'node:path';
import process from 'node:process';
import {fileURLToPath} from 'node:url';
import {readJson, validateContent} from './validate-content.mjs';

function arg(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

async function loadRemotion() {
  try {
    const [{bundle}, {renderMedia, renderStill, selectComposition}] = await Promise.all([
      import('@remotion/bundler'),
      import('@remotion/renderer')
    ]);
    return {bundle, renderMedia, renderStill, selectComposition};
  } catch (error) {
    throw new Error(
      'Remotion dependencies are not installed. Run npm install in examples/remotion-starter before still or MP4 rendering.'
    );
  }
}

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, '..');
const contentPath = path.resolve(projectRoot, arg('--content', 'content/example.json'));
const outPath = path.resolve(projectRoot, arg('--out', 'outputs/example.mp4'));
const stillFrame = process.argv.includes('--still') ? Number(arg('--still', '90')) : null;
const content = readJson(contentPath);
const errors = validateContent(content, path.dirname(contentPath));

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

const {bundle, renderMedia, renderStill, selectComposition} = await loadRemotion();
const entryPoint = path.resolve(projectRoot, 'src/Root.tsx');
const serveUrl = await bundle({entryPoint});
const inputProps = {content};
const composition = await selectComposition({
  serveUrl,
  id: 'DailyExplainer',
  inputProps
});

if (stillFrame !== null) {
  await renderStill({
    composition,
    serveUrl,
    frame: stillFrame,
    inputProps,
    output: outPath
  });
  console.log(`Still rendered: ${outPath}`);
} else {
  await renderMedia({
    composition,
    serveUrl,
    codec: 'h264',
    inputProps,
    outputLocation: outPath
  });
  console.log(`MP4 rendered: ${outPath}`);
}
