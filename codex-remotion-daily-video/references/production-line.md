# Production Line

Use this file when turning a parent Workflow Contract into an executable video project.

## Parent Intake

Preserve the parent contract boundary:

```markdown
## Workflow Contract
- Goal:
- Trigger:
- Inputs:
- Outputs:
- Project folder:
- Steps:
- Human review points:
- Quality checks:
- Stop conditions:
- Child skill: codex-remotion-daily-video
```

Map it into video decisions:

| Contract field | Video decision |
| --- | --- |
| Goal | account lane, platform, cadence, expected output |
| Trigger | new article, book note, product update, data point, tutorial outline, quote, podcast clip |
| Inputs | source text, assets, brand rules, voiceover, dimensions, rights constraints |
| Outputs | HyperFrames brief, content JSON, still frame, MP4, review notes |
| Human review points | hook, sample variant, still frame, final render, template improvement |
| Quality checks | title length, subtitle safe zone, asset paths, duration, output file |
| Stop conditions | missing source, unclear rights, unapproved claims, missing required data |

## Engine Choice

Choose HyperFrames first when the lane, hook, pacing, or visual rhythm is unproven. Ask it for 1-3 sample briefs that vary the hook or scene rhythm.

Choose Remotion directly when the series structure is already proven and the user needs repeatable output, JSON-driven daily runs, stable captions, or batch rendering.

Use both when a validated HyperFrames sample should be promoted into a durable Remotion composition. Extract the stable structure, not the one-off surface decoration.

## Project Layout

Start from `examples/remotion-starter/` and adapt it:

```text
daily-video/
  AGENTS.md
  package.json
  src/
    Root.tsx
    compositions/
    components/
    styles/
  content/
  public/assets/
  scripts/
  outputs/
```

Daily variation belongs in `content/*.json`. Do not modify the composition for ordinary daily content. Change the composition only when the lane or schema needs a durable capability.

## Daily Workflow

1. Receive raw idea, source, or parent contract handoff.
2. Check fit: repeatable structure, clear source, enough assets, rights acceptable.
3. If unproven, create HyperFrames briefs and select one repeatable direction.
4. If proven, write the script and content JSON.
5. Validate JSON and referenced assets.
6. Render one still frame and inspect layout.
7. Render the MP4.
8. Save outputs and review notes.
9. Improve exactly one durable rule: hook template, caption rule, cover composition, scene timing, style preset, schema field, or ending card.

## Stop Conditions

Stop before render when source material is missing, rights are unclear, a factual claim is unapproved, required JSON fields are absent, assets cannot be found, the still frame fails safe-zone checks, or environment bootstrap fails.
