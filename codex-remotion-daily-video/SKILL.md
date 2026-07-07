---
name: codex-remotion-daily-video
description: Use when the user wants to turn repeatable knowledge, tutorial, news, quote, podcast-clip, product-update, or course-clip videos into a Codex plus Remotion daily production line with reusable templates, structured JSON content, render checks, and review loops.
---

# Codex + Remotion Daily Video

## Overview

Use this skill to turn repeatable short-video production into a maintainable code project. The core idea: the human owns judgment and message; Codex maintains the production line; Remotion renders stable videos from React components and structured data.

## When to Use

Use for:

- Daily or weekly knowledge videos with repeated structure.
- AI tool tutorials, data explainers, news explainers, quote cards, podcast clips, product updates, course clips.
- Users who keep repeating video setup tasks: script, scenes, captions, cover, timing, dimensions, checks, exports.
- Requests like "make my video workflow repeatable", "use Codex and Remotion for daily videos", "turn articles into consistent short videos", "create a video production Skill".

Do not use for:

- One-off cinematic edits, heavy live footage, emotional montage, or footage-first storytelling.
- Tasks where a manual editor is clearly faster and consistency is not important.
- Requests that only need a single caption, title, or thumbnail.

## Core Principle

Do not start from an empty video project every day. Maintain one template and feed it new data.

The stable parts live in code:

- visual theme
- scene components
- caption rules
- cover rules
- render commands
- acceptance checks

The daily-changing parts live in JSON:

- title
- hook
- scenes
- captions
- image references
- voiceover
- duration

## Fit Check

Before proposing Remotion, decide whether the content is template-friendly.

Good fit:

- The topic changes, but the structure stays similar.
- The user wants consistency across many videos.
- Text, captions, screenshots, cards, UI, charts, or simple motion carry the video.
- The user can benefit from batch rendering or multiple platform formats.

Weak fit:

- Each video depends on unique camera footage, timing, music, or emotional editing.
- The user needs one quick clip and will not repeat the workflow.
- The content cannot be represented as structured scenes.

## Required Output Shape

When using this skill, output these sections:

1. **Fit verdict**: whether Codex + Remotion is worth it.
2. **Video rule file**: proposed `AGENTS.md` rules.
3. **Minimum project structure**.
4. **Content JSON schema**.
5. **Reusable modules**.
6. **Daily workflow**.
7. **Render and layout checks**.
8. **Review loop**.
9. **First three templates to build**.

## Workflow

### 1. Define the Video Rules

Create or update `AGENTS.md` in the video project. Include:

```markdown
# AGENTS.md

## Video account rules

- Default format: 1080x1920 vertical video, 30fps.
- Target duration: 45-75 seconds.
- Captions stay inside safe zones and never cover the main visual.
- Title has at most 2 lines; each line has at most 14 Chinese characters.
- Animation is clean and readable; avoid noisy transitions.
- After template changes, render a still frame before full video render.
- Final MP4 exports go to outputs/.
```

Add account-specific style rules: brand colors, fonts, caption style, cover style, CTA style, and banned visual patterns.

### 2. Build the Minimum Production Line

Start small:

```text
daily-video/
  AGENTS.md
  package.json
  src/
    Root.tsx
    compositions/
      DailyExplainer.tsx
      ToolTutorial.tsx
      QuoteCard.tsx
    components/
      TitleCard.tsx
      Caption.tsx
      ProgressBar.tsx
      SceneCard.tsx
      BrandMark.tsx
    styles/
      theme.ts
  content/
    2026-07-01-topic.json
  public/
    assets/
  scripts/
    render-daily.mjs
    make-content-from-md.mjs
  outputs/
```

Keep daily variation in `content/*.json`; avoid changing the composition for every video.

### 3. Use Structured Content

Start with a small schema:

```json
{
  "title": "用 Codex + Remotion 做到视频日更",
  "durationSec": 60,
  "hook": "日更最痛的不是写脚本，而是每天从零剪一遍。",
  "scenes": [
    {
      "type": "problem",
      "title": "日更为什么累",
      "voiceover": "如果你每天都打开一个空白剪辑工程，日更一定会越来越累。",
      "caption": "每天从零剪，才是最累的",
      "visual": "empty timeline becoming a reusable template"
    },
    {
      "type": "workflow",
      "title": "真正的解法",
      "bullets": ["Codex 写模板", "Remotion 渲染视频", "每天只换 JSON"]
    }
  ]
}
```

### 4. Split the Video into Five Modules

Build these first:

| Module | Job | Must be reusable |
|---|---|---|
| Hook | First 3 seconds, make viewer care | title, highlight word, quick motion |
| Scene | Main ideas, steps, examples | cards, comparisons, UI, charts |
| Caption | Readable subtitle layer | font size, safe area, emphasis color |
| Asset | Screenshots, logo, avatar, B-roll | local assets, stable references |
| Ending | Summary and light CTA | reusable closing card |

### 5. Daily Loop

Use this repeatable loop:

1. User writes raw idea: topic, audience, core point, style.
2. Codex turns it into a 45-75 second script and `content/YYYY-MM-DD-topic.json`.
3. Codex checks whether the composition supports all fields.
4. Render one key still frame and inspect layout.
5. Render the full MP4.
6. Review performance and improve one template rule.

### 6. Render Checks

Before full render, check:

- title length
- caption overflow
- safe-zone collisions
- logo position
- color contrast
- scene timing
- cover readability
- output format and duration

If something fails, adjust components or schema rules before rendering the full video. Prefer fixing the system over patching one video.

### 7. First Three Templates

Start with:

1. **Opinion explainer**: hook, problem, insight, method, example, ending.
2. **Tool tutorial**: problem, tool, steps, demo, result, ending.
3. **Quote card**: quote, context, interpretation, action, ending.

## Prompt Patterns

Turn raw idea into JSON:

```text
Turn this idea into a 60-second vertical video script.
Requirements:
1. First 3 seconds must contain a clear tension.
2. Use 4 scenes.
3. Each scene needs title, voiceover, caption, and visual.
4. Output as content/YYYY-MM-DD-topic.json.
5. Do not change Remotion components unless the schema is insufficient.
```

Check template support:

```text
Read content/YYYY-MM-DD-topic.json and src/compositions/DailyExplainer.tsx.
Check whether every field is rendered.
If captions may overflow, adjust the Caption component, not the script.
```

Review after publishing:

```text
Based on this video's data, identify one production-line improvement.
Choose only one: hook template, caption rule, cover composition, scene timing, or ending card.
Update the relevant rule or component.
```

## Common Mistakes

- Rebuilding the timeline every day instead of feeding new JSON.
- Letting captions live inside each scene instead of one caption component.
- Changing components for one video instead of improving schema and reusable modules.
- Skipping still-frame layout checks before full render.
- Repeating style preferences in chat instead of writing them into `AGENTS.md`, `theme.ts`, schema, and components.
- Building too many templates before the first daily template is stable.

## Definition of Done

A video production line is ready when:

- A new idea can become structured JSON.
- One Remotion composition can render multiple videos.
- Captions and titles stay inside safe zones.
- A still frame can catch layout issues before full render.
- The same command exports MP4 to `outputs/`.
- Reviews improve the system, not only the current video.
