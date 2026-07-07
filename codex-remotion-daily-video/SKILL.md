---
name: codex-remotion-daily-video
description: Use when the user wants repeatable knowledge, tutorial, book-summary, product-explainer, data-explainer, quote, podcast-clip, product-update, or course-clip videos as a Codex, HyperFrames, and Remotion production line.
---

# Codex + HyperFrames + Remotion Daily Video

## Overview

Use this skill to turn repeatable short-video production into a maintainable code project. The core idea: the human owns judgment and message; Codex maintains the production line; HyperFrames helps validate new video formats quickly; Remotion renders stable videos from React components and structured data.

## When to Use

Use for:

- Daily or weekly knowledge videos with repeated structure.
- AI tool tutorials, book-summary accounts, product explainers, data explainers, news explainers, quote cards, podcast clips, product updates, course clips.
- Users who want to test a new content format with HyperFrames before turning it into a Remotion template.
- Users who keep repeating video setup tasks: script, scenes, captions, cover, timing, dimensions, checks, exports.
- Requests like "make my video workflow repeatable", "use Codex and Remotion for daily videos", "use Codex + HyperFrames + Remotion", "turn articles into consistent short videos", "create a video production Skill".

Do not use for:

- One-off cinematic edits, heavy live footage, emotional montage, or footage-first storytelling.
- Tasks where a manual editor is clearly faster and consistency is not important.
- Requests that only need a single caption, title, or thumbnail.

## Core Principle

Do not start from an empty video project every day. First validate uncertain formats quickly, then maintain stable templates and feed them new data.

Use the two-engine rule:

- HyperFrames is for quick format validation: hook, pacing, layout direction, scene rhythm, and sample outputs.
- Remotion is for stable production: reusable React components, JSON content, caption rules, render commands, and batch output.
- Codex is the operator: it turns ideas into scripts, briefs, schemas, components, checks, and review improvements.

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

Before proposing a full Remotion setup, decide whether the content is template-friendly and whether it needs a HyperFrames validation pass first.

Good fit:

- The topic changes, but the structure stays similar.
- The user wants consistency across many videos.
- Text, captions, screenshots, cards, UI, charts, or simple motion carry the video.
- The user can benefit from batch rendering or multiple platform formats.

Use HyperFrames first when:

- The user is exploring a new account direction, visual style, or content series.
- The content is template-friendly, but the winning hook, pacing, and layout are not known yet.
- The user wants a quick sample for book-summary, product-explainer, or data-explainer videos.

Use Remotion directly when:

- The series format is already proven.
- The user needs repeatable output, JSON-driven videos, or multiple videos per day.
- The user wants stable captions, covers, components, and render checks.

Weak fit:

- Each video depends on unique camera footage, timing, music, or emotional editing.
- The user needs one quick clip and will not repeat the workflow.
- The content cannot be represented as structured scenes.

## Required Output Shape

When using this skill, output these sections:

1. **Fit verdict**: whether Codex + Remotion is worth it.
2. **Engine choice**: HyperFrames validation, Remotion production, or both.
3. **Video rule file**: proposed `AGENTS.md` rules.
4. **Minimum project structure**.
5. **Content JSON schema**.
6. **Reusable modules**.
7. **Daily workflow**.
8. **Render and layout checks**.
9. **Review loop**.
10. **First templates to build**.

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
- New formats get a HyperFrames brief before becoming Remotion templates.
```

Add account-specific style rules: brand colors, fonts, caption style, cover style, ending style, content lane, and visual patterns to avoid.

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
    make-hyperframes-brief.mjs
  outputs/
```

Keep daily variation in `content/*.json`; avoid changing the composition for every video.

### 3. Decide the Content Lane

Classify the video before designing templates:

| Lane | Structure | Build first |
|---|---|---|
| Book summary | quote, problem, method, example, action | hook, book card, takeaway card |
| Product explainer | scenario, pain, feature, proof, result | scene card, comparison, ending |
| Data explainer | phenomenon, number, context, misconception, conclusion | chart card, source note, simple explanation |
| Tool tutorial | problem, tool, steps, demo, result | step card, demo frame, result card |
| Opinion explainer | tension, insight, method, example, ending | hook card, contrast card, takeaway |

For a new lane, create 1-3 HyperFrames briefs before creating a Remotion composition.

### 4. Use Structured Content

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

For book-summary, product-explainer, and data-explainer videos, extend only the fields that change the lane:

```json
{
  "lane": "book-summary",
  "sourceTitle": "The Almanack of Naval Ravikant",
  "claim": "真正的杠杆不是更努力，而是让系统替你重复。",
  "evidence": ["作者观点", "现实案例", "可执行动作"],
  "cta": "收藏这条，下一次做内容前先看一遍。"
}
```

### 5. Split the Video into Five Modules

Build these first:

| Module | Job | Must be reusable |
|---|---|---|
| Hook | First 3 seconds, make viewer care | title, highlight word, quick motion |
| Scene | Main ideas, steps, examples | cards, comparisons, UI, charts |
| Caption | Readable subtitle layer | font size, safe area, emphasis color |
| Asset | Screenshots, logo, avatar, B-roll | local assets, stable references |
| Ending | Summary and light CTA | reusable closing card |

### 6. HyperFrames Validation Loop

Use this when the format is not stable yet:

1. Turn the raw idea into a HyperFrames brief: hook, scene list, visual direction, captions, duration, and ending.
2. Produce 1-3 sample variants with different hooks or scene rhythms.
3. Choose one format based on clarity, pacing, repeatability, and platform fit.
4. Convert the winning format into a Remotion composition only after the structure is reusable.

HyperFrames output should be treated as a prototype, not the long-term source of truth.

### 7. Daily Loop

Use this repeatable loop:

1. User writes raw idea: topic, audience, core point, style.
2. If the lane is unproven, Codex creates a HyperFrames brief and sample variants.
3. If the lane is proven, Codex turns it into a 45-75 second script and `content/YYYY-MM-DD-topic.json`.
4. Codex checks whether the Remotion composition supports all fields.
5. Render one key still frame and inspect layout.
6. Render the full MP4.
7. Review performance and improve one template rule.

### 8. Render Checks

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

### 9. First Templates

Start with:

1. **Opinion explainer**: hook, problem, insight, method, example, ending.
2. **Tool tutorial**: problem, tool, steps, demo, result, ending.
3. **Quote card**: quote, context, interpretation, action, ending.
4. **Book summary**: book/title card, quote, practical problem, method, example, action.
5. **Product explainer**: pain, scene, feature, proof, result, light ending.
6. **Data explainer**: phenomenon, key number, chart, misconception, explanation, conclusion.

## Prompt Patterns

Create HyperFrames briefs:

```text
I want to test a new short-video lane before building a Remotion template.
Create 3 HyperFrames briefs.
Each brief needs: hook, scene list, visual direction, captions, duration, and why it is repeatable.
Then recommend which one should become a Remotion composition.
```

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

Turn a book-summary idea into JSON:

```text
Turn this book-summary idea into a 60-second vertical video.
Use lane=book-summary.
Include sourceTitle, claim, evidence, scenes, captions, visual direction, and ending.
If the format is not stable, produce a HyperFrames brief first.
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
- Turning every new idea into a Remotion template before the format has been validated.
- Treating HyperFrames prototypes as the long-term production system instead of promoting winning formats into stable templates.
- Letting captions live inside each scene instead of one caption component.
- Changing components for one video instead of improving schema and reusable modules.
- Skipping still-frame layout checks before full render.
- Repeating style preferences in chat instead of writing them into `AGENTS.md`, `theme.ts`, schema, and components.
- Building too many templates before the first daily template is stable.

## Definition of Done

A video production line is ready when:

- A new idea can become structured JSON.
- Unproven lanes can be tested with a HyperFrames brief before template work.
- One Remotion composition can render multiple videos.
- Captions and titles stay inside safe zones.
- A still frame can catch layout issues before full render.
- The same command exports MP4 to `outputs/`.
- Reviews improve the system, not only the current video.
