# QA Checks

Use this file before claiming a still frame, preview, or MP4 is complete.

## Preflight

- Package manager detected from lockfile or project convention.
- Dependencies installed or the missing install approval is clearly reported.
- Browser/compositor/FFmpeg requirements prepared through project-supported commands.
- Content JSON passes validation.
- Every referenced asset path exists or is marked optional.
- Source-backed claims are either supported or removed from on-screen text.

## Still Frame Checks

Render or inspect at least one frame near the hook and one middle scene after template changes.

Check:

- title fits within safe area;
- captions stay under two lines and avoid the main visual;
- source notes are readable but not dominant;
- cards do not collide with logo, progress bar, or CTA;
- contrast passes visually on phone size;
- no placeholder text remains;
- no unsupported number or case appears as fact.

## MP4 Checks

After rendering:

- output file exists under `outputs/`;
- file is non-empty;
- duration matches content JSON within project tolerance;
- extension and codec match the requested delivery path;
- review notes record content path, composition id, command, output path, and unresolved manual checks.

## Failure Handling

Fix durable causes first:

- caption overflow -> `Caption` component or schema constraints;
- repeated layout collision -> composition layout;
- unclear source -> content JSON source fields;
- inconsistent style -> `AGENTS.md` and `theme.ts`;
- render environment failure -> bootstrap script or dependency notes.

Do not patch one video's text to hide a reusable component problem.
