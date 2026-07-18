# Remotion Starter

This starter is the production-side example for `codex-remotion-daily-video`.

It demonstrates:

- JSON-driven daily content;
- a reusable vertical `DailyExplainer` composition;
- title, scene, caption, progress, source, and ending modules;
- content validation that runs without installing Remotion;
- HyperFrames brief export for unproven lanes;
- still/MP4 render scripts for projects with Remotion dependencies installed.

## Quick Check

```bash
npm run validate
npm run brief -- --content content/example.json --out outputs/example-brief.md
```

## Render After Dependencies Are Installed

```bash
npm install
npm run still -- --content content/example.json --out outputs/example.png
npm run render -- --content content/example.json --out outputs/example.mp4
npm run verify -- outputs/example.mp4 --kind mp4
```

Do not report an MP4 until `verify-artifact.mjs` passes.
