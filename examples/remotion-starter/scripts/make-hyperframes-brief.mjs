import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {readJson, validateContent} from './validate-content.mjs';

function arg(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

const contentPath = path.resolve(arg('--content', 'content/example.json'));
const outPath = arg('--out', null);
const content = readJson(contentPath);
const errors = validateContent(content, path.dirname(contentPath));

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

const body = `# HyperFrames Brief: ${content.title}

## Goal

Validate whether the ${content.lane} lane has a repeatable hook, scene rhythm, caption density, and visual system before promoting it into a Remotion template.

## Hook

${content.hook}

## Scenes

${content.scenes
  .map(
    (scene, index) => `${index + 1}. ${scene.title}
   - caption: ${scene.caption}
   - visual: ${scene.visual}
   - repeatable module: ${scene.type} card`
  )
  .join('\n')}

## Visual Direction

Use a vertical editorial layout with large readable titles, safe subtitles, one accent color, and simple card motion. If B-roll is needed, write realistic material-source prompts instead of vague cinematic prompts.

## Promotion Rule

Promote only stable scene structure, caption rules, style tokens, and reusable cards into Remotion. Leave one-off decoration in the prototype.
`;

if (outPath) {
  fs.mkdirSync(path.dirname(path.resolve(outPath)), {recursive: true});
  fs.writeFileSync(outPath, body);
  console.log(`Brief written: ${outPath}`);
} else {
  console.log(body);
}
