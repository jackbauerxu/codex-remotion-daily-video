---
name: codex-remotion-daily-video
description: Build or operate repeatable Codex + HyperFrames + Remotion short-video production lines for knowledge, tutorial, book-summary, product-explainer, data-explainer, quote, podcast-clip, product-update, course-clip, social commerce explainer, or daily vertical video workflows. Use when a parent Workflow Contract routes to this child skill, when the user wants JSON-driven Remotion templates, still-frame/MP4 render checks, HyperFrames-to-Remotion promotion, reusable video scripts, style presets, prompt libraries, or a production-grade Remotion starter.
---

# Codex Remotion Daily Video

Turn repeatable short-video work into a code-backed production line. Keep the human in charge of judgment and message; let Codex maintain the project rules, structured content, reusable Remotion components, validation scripts, and review loop.

## Operating Boundary

Use this as a child production skill, not as the parent workflow designer.

- `codex-workflow-builder` owns the reusable workflow decision and the Workflow Contract.
- `codex-remotion-daily-video` owns video lanes, scripts, prompts, JSON content, Remotion templates, still-frame checks, MP4 render checks, and template improvement.
- HyperFrames validates uncertain format ideas quickly. Remotion holds stable production templates. Do not treat HyperFrames samples as the long-term source of truth.

If the request is still vague about trigger, inputs, output folder, review points, or stop conditions, create the missing video-specific contract fields first or route back to `codex-workflow-builder`.

## Load What You Need

- For parent-child intake, engine choice, folder layout, and daily operating steps, read `references/production-line.md`.
- For content JSON, lane fields, reusable modules, and render scripts, read `references/schema-and-rendering.md`.
- For script templates, prompt library, style presets, shot language, and Seedance-style realistic B-roll prompts, read `references/style-prompts-and-scripts.md`.
- Before preview/render completion claims, read `references/qa-checks.md`.
- When starting a real project, copy or adapt `examples/remotion-starter/` instead of inventing a new project from memory.

## Execution

1. Intake the Workflow Contract or create the missing video-specific fields.
2. Decide the engine: HyperFrames validation, Remotion production, or both.
3. Choose a content lane and script template.
4. Produce or validate `content/*.json`.
5. Confirm that the Remotion composition renders every required field.
6. Run still-frame checks before full MP4 render.
7. Render only after environment bootstrap and validation pass.
8. Review the result and improve one durable production rule, component, prompt, or schema field.

## Environment Rule

For any still frame, preview, or MP4 request, bootstrap the actual project environment before claiming completion:

- detect the package manager from the lockfile or project convention;
- install or update project-local dependencies only through the environment approval mechanism when downloads are needed;
- prepare browser, compositor, and FFmpeg requirements through the project-supported diagnostic path;
- run diagnostics, still-frame checks, and artifact checks;
- report a JSON file, storyboard, brief, or React component as such, never as a rendered video.

If automatic setup fails, stop before rendering and report the missing dependency, failed command, and next safe action.

## Done Means

A production line is ready only when a new idea can become structured JSON, the selected composition can render it, captions and titles stay in safe zones, a still frame catches layout problems before full render, an MP4 export path exists, and review improves the system rather than patching one video.
