# Schema And Rendering

Use this file when writing content JSON, building Remotion components, or preparing render scripts.

## Content Schema

Use this minimum shape:

```json
{
  "id": "2026-07-18-codex-remotion",
  "lane": "opinion-explainer",
  "title": "日更最痛的不是写脚本",
  "subtitle": "而是每天从零剪一遍",
  "durationSec": 60,
  "platform": "xhs",
  "format": {
    "width": 1080,
    "height": 1920,
    "fps": 30
  },
  "hook": "你以为日更卡在灵感，其实卡在重复剪辑。",
  "scenes": [
    {
      "type": "problem",
      "title": "每天从零开始",
      "voiceover": "如果每次都重新搭时间线，日更一定会越来越累。",
      "caption": "日更累在重复搭工程",
      "visual": "empty timeline turning into reusable blocks",
      "bullets": ["标题", "字幕", "封面", "导出"]
    }
  ],
  "ending": {
    "summary": "把稳定结构交给代码，把判断留给人。",
    "cta": "收藏，下次做视频先搭生产线。"
  },
  "sources": [
    {
      "title": "source title",
      "url": "https://example.com",
      "note": "what this source supports"
    }
  ]
}
```

Do not invent evidence. If a number, case, quote, or result is not sourced, write it as a claim to verify or remove it from on-screen text.

## Lane Extensions

| Lane | Extra fields | First reusable cards |
| --- | --- | --- |
| `book-summary` | `sourceTitle`, `author`, `quote`, `claim`, `evidence` | book card, quote card, takeaway card |
| `product-explainer` | `product`, `pain`, `feature`, `proof`, `result` | scene card, comparison card, proof card |
| `data-explainer` | `metric`, `period`, `sourceNote`, `chart` | chart card, source note, misconception card |
| `tool-tutorial` | `tool`, `steps`, `demoAssets`, `result` | step card, demo frame, result card |
| `opinion-explainer` | `tension`, `insight`, `method`, `example` | hook card, contrast card, takeaway card |
| `quote-card` | `quote`, `speaker`, `context`, `interpretation` | quote card, context card, action card |
| `podcast-clip` | `clipPath`, `transcript`, `speaker`, `highlights` | waveform card, caption card, quote pullout |

## Reusable Modules

Build these modules before adding lane-specific flourishes:

| Module | Job | Required behavior |
| --- | --- | --- |
| Hook | First 3 seconds | large readable title, tension, one emphasized phrase |
| Scene | Main idea cards | render title, voiceover/caption, bullets, visual direction |
| Caption | Subtitle layer | safe-zone aware, two-line max, consistent emphasis |
| Asset | Screenshots/B-roll/logo | local paths validated before render |
| Source | Evidence note | compact source label when claims depend on external material |
| Ending | Summary/CTA | reusable closing card with low-friction action |

## Render Scripts

Minimum scripts:

- `scripts/validate-content.mjs`: validate JSON shape and asset references without requiring Remotion.
- `scripts/make-hyperframes-brief.mjs`: turn content JSON into a prototype brief for unproven lanes.
- `scripts/render-daily.mjs`: call Remotion still/video rendering after dependencies are installed.
- `scripts/verify-artifact.mjs`: check output file exists, is non-empty, and matches expected extension.

Keep render commands deterministic. Prefer a single composition id and content path argument:

```bash
npm run render -- --content content/example.json --out outputs/example.mp4
```

## Completion Rule

Do not report a rendered video until the expected output file exists and the artifact verification script passes. A valid JSON file and a valid composition are necessary, but not sufficient.
