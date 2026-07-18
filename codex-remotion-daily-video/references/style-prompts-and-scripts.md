# Style, Prompts, And Scripts

Use this file when selecting script structure, writing visual prompts, or locking design language.

## Script Templates

These are template families, not a fixed content scope. Choose the one that matches the user's lane.

### Tension Method Example

1. Hook: name the hidden cost or surprising contrast.
2. Problem: show why the default way wastes time.
3. Insight: state the reusable rule.
4. Method: give 2-4 concrete steps.
5. Example: show the rule in a realistic scene.
6. Ending: summarize and invite a small next action.

### Tutorial Example

1. Problem in one sentence.
2. Tool or method introduction.
3. Three steps with visible before/after state.
4. Common mistake.
5. Result and next action.

### Explainer Example

1. Phenomenon.
2. Why people misunderstand it.
3. Evidence or source-backed context.
4. Clear explanation.
5. Practical takeaway.

### Product Update Example

1. What changed.
2. Who it helps.
3. How it works.
4. Proof, screenshot, or demo cue.
5. Upgrade path or soft CTA.

## Design Language Lock

Every project must store design decisions in `AGENTS.md`, `src/styles/theme.ts`, and component props.

Define:

- font stack and fallback;
- color tokens for background, text, accent, muted text, card, and warning;
- title size, caption size, and safe zones;
- motion vocabulary: snap, slide, reveal, count, pulse, or fade;
- spacing rhythm and card radius;
- forbidden patterns, such as noisy transitions, illegible text, unsourced numbers, or style drift from other installed design skills.

## Style Presets

Use presets as starting points. Customize after still-frame review.

| Preset | Use for | Visual rules |
| --- | --- | --- |
| `clean-editorial` | knowledge, book, opinion | off-white background, black type, one accent, paper-like restraint |
| `product-demo` | tools, SaaS, update videos | dark UI frame, screenshot zones, clear callouts, compact captions |
| `data-card` | data explainers | chart area, source note, restrained accent color, high contrast labels |
| `creator-desk` | humanized tutorials | desk texture, notebook/screenshot mix, soft shadows, warm but readable |
| `social-commerce` | product explainers | product first, benefit card, proof area, no invented claims |

## Shot Language

For Remotion UI scenes, write visual direction as composable cards: title card, split comparison, chart card, screenshot frame, quote pullout, timeline, checklist, source note, ending card.

For B-roll or AI video prompts, use the Seedance-style "material source identity" pattern:

1. Who captured the footage?
2. What device and era created it?
3. Where is the scene and what concrete objects prove it?
4. What imperfections make it feel real?
5. What is the exact 10-15 second timeline?
6. What natural audio belongs in the scene?

Add realistic constraints such as handheld drift, slight focus hunting, exposure breathing, compression artifacts, environmental interruptions, and a natural ending. Use these for optional B-roll prompts, not as a replacement for Remotion render checks.

## Prompt Library

### Raw Idea To Content JSON

```text
Turn this raw idea into a 60-second vertical video content JSON.
Use the selected lane and preserve source boundaries.
Each scene needs: type, title, voiceover, caption, visual, and optional bullets.
Do not invent numbers, results, or cases. Mark unsupported claims as needs_verification.
```

### HyperFrames Brief

```text
Create 3 HyperFrames briefs for this unproven video lane.
Each brief needs hook, scene list, visual direction, captions, duration, repeatability reason, and what would become a Remotion component if it wins.
```

### Promote Sample To Remotion

```text
Extract the stable structure from this winning sample.
Return a Remotion composition plan, content JSON fields, reusable components, style tokens, and still-frame checks.
Ignore one-off decoration unless it improves repeatability.
```

### B-roll Prompt

```text
Write a realistic 10-15 second B-roll prompt for this scene.
Use material source identity, concrete environment details, imperfect camera behavior, natural audio, and a plausible ending.
Keep character identity, wardrobe, and object continuity locked.
```

## Review Principle

Creativity belongs in theme, metaphor, shot direction, and examples. Durability belongs in schema, components, style tokens, and QA. Do both; do not let free-form creativity erase the production line.
