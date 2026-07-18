# AGENTS.md

## Video Account Rules

- Default format: 1080x1920 vertical video, 30fps.
- Target duration: 45-75 seconds.
- Captions stay inside the lower safe zone and never cover the primary visual.
- Title has at most 2 lines; each line should stay under 14 Chinese characters when possible.
- New content goes into `content/*.json`; do not rewrite the composition for ordinary daily topics.
- After component or style changes, render a still frame before rendering a full MP4.
- Final MP4 files go to `outputs/`.
- New lanes get a HyperFrames brief before becoming Remotion templates.

## Style Lock

- Use `src/styles/theme.ts` as the source of truth for colors, typography, spacing, radii, and safe zones.
- Keep motion readable: slide, fade, reveal, progress, and emphasis pulse are enough for the starter.
- Do not put unsourced numbers, cases, or results on screen as facts.
- Prefer durable component fixes over one-off text hacks.
