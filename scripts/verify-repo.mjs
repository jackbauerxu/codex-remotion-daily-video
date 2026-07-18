import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const required = [
  'README.md',
  'LICENSE',
  'CONTRIBUTING.md',
  'CHANGELOG.md',
  'codex-remotion-daily-video/SKILL.md',
  'codex-remotion-daily-video/test-prompts.json',
  'codex-remotion-daily-video/references/production-line.md',
  'codex-remotion-daily-video/references/schema-and-rendering.md',
  'codex-remotion-daily-video/references/style-prompts-and-scripts.md',
  'codex-remotion-daily-video/references/qa-checks.md',
  'examples/remotion-starter/package.json',
  'examples/remotion-starter/AGENTS.md',
  'examples/remotion-starter/content/example.json',
  'examples/remotion-starter/src/Root.tsx',
  'examples/remotion-starter/src/compositions/DailyExplainer.tsx',
  'examples/remotion-starter/scripts/render-daily.mjs',
  'examples/remotion-starter/scripts/validate-content.mjs',
  '.github/workflows/verify.yml'
];

const errors = [];

for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) {
    errors.push(`Missing required file: ${file}`);
  }
}

const skillPath = path.join(root, 'codex-remotion-daily-video/SKILL.md');
if (fs.existsSync(skillPath)) {
  const skill = fs.readFileSync(skillPath, 'utf8');
  const lines = skill.split('\n').length;
  if (lines > 180) errors.push(`SKILL.md is too long for this repo entry point: ${lines} lines`);
  for (const pointer of [
    'references/production-line.md',
    'references/schema-and-rendering.md',
    'references/style-prompts-and-scripts.md',
    'references/qa-checks.md',
    'examples/remotion-starter/'
  ]) {
    if (!skill.includes(pointer)) errors.push(`SKILL.md missing pointer: ${pointer}`);
  }
}

const readme = fs.existsSync('README.md') ? fs.readFileSync('README.md', 'utf8') : '';
for (const phrase of [
  'codex-workflow-builder',
  'HyperFrames',
  'Remotion',
  'seedance-prompt',
  'Definition Of Done'
]) {
  if (!readme.includes(phrase)) errors.push(`README missing project context: ${phrase}`);
}

const examplePkgPath = path.join(root, 'examples/remotion-starter/package.json');
if (fs.existsSync(examplePkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(examplePkgPath, 'utf8'));
  for (const script of ['validate', 'brief', 'still', 'render', 'verify', 'typecheck']) {
    if (!pkg.scripts?.[script]) errors.push(`Starter package missing script: ${script}`);
  }
}

const promptsPath = path.join(root, 'codex-remotion-daily-video/test-prompts.json');
if (fs.existsSync(promptsPath)) {
  const prompts = JSON.parse(fs.readFileSync(promptsPath, 'utf8'));
  const cases = prompts.test_cases || [];
  if (cases.length < 12) errors.push('test-prompts.json should include at least 12 cases');
  if (!cases.some((item) => item.type === 'should_not_trigger')) {
    errors.push('test-prompts.json missing should_not_trigger cases');
  }
  if (!cases.some((item) => item.prompt?.includes('Workflow Contract'))) {
    errors.push('test-prompts.json missing parent Workflow Contract case');
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log('Repository structure OK');
