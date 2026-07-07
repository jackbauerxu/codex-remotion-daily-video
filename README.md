# Codex Remotion Daily Video Skill

把自媒体视频日更从「每天重新剪一条」变成「维护一条可复用的视频生产线」。

这个 Agent Skill 基于 Rachel (@Zesee) 的 X Article《用 Codex + Remotion 实现无痛自媒体视频日更，涨粉过万：把剪视频变成维护一条生产线》整理而成，原文链接：

[https://x.com/Zesee/status/2072417062165635433](https://x.com/Zesee/status/2072417062165635433)

并融合了 mousepotato (@iluciddreaming) 的 X Article《普通人2026做自媒体：Codex+HyperFrames+Remotion 一键出片完全手册》的可确认思路，原文入口：

[https://x.com/iluciddreaming/status/2074384960979636443](https://x.com/iluciddreaming/status/2074384960979636443)

## 项目定位

很多创作者做短视频日更，真正消耗时间的不是每一次灵感本身，而是反复做这些动作：

- 重新搭视频结构
- 重新排字幕和标题
- 重新调整封面
- 重新安排画面节奏
- 重新检查导出规格
- 重新描述账号风格和视觉要求

这个 skill 的核心思路是：不要把每条视频都当成一次性项目，而是把视频制作变成一个可维护的代码项目。

人负责观点、判断和内容方向；Codex 负责把规则、脚本、结构化数据、组件修改和检查流程落到项目里；HyperFrames 用来快速验证选题和视觉节奏；Remotion 负责把 React 组件、JSON 内容、字幕、图片、音频渲染成稳定的视频。

融合后的定位是双引擎工作流：

- HyperFrames：适合快速做出可预览的视频样片，用来验证选题、节奏、画面结构和系列感。
- Remotion：适合沉淀稳定模板，用 JSON 批量驱动长期栏目。
- Codex：负责把创意、脚本、数据、组件、检查规则和复盘结论写进项目。

## 适合谁用

适合这些创作者和团队：

- 想做知识类、观点类、教程类短视频日更的人
- 想把文章、长帖、产品更新转成竖屏视频的人
- 想用 Codex 管理 Remotion 项目的人
- 想先用 HyperFrames 快速验证样片，再把成熟格式沉淀成 Remotion 模板的人
- 已经有固定视频栏目，但每天仍在重复调整字幕、封面、场景的人
- 希望把账号视觉、字幕规则、视频节奏沉淀成项目规则的人
- 想批量生成小红书、抖音、视频号、TikTok、YouTube Shorts 竖屏内容的人

更适合模板化内容，例如：

- AI 工具教程
- 知识卡片视频
- 数据解读视频
- 新闻解释视频
- 观点短视频
- 金句卡片视频
- 播客切片包装
- 产品更新视频
- 课程切片视频
- 讲书号
- 带货讲解视频
- 数据科普视频

## 不适合的情况

这个 skill 不适合把所有视频都强行工程化。

如果你只做一条临时视频，或者内容高度依赖真人实拍、复杂情绪节奏、手工剪辑和大量独特素材，那么直接使用传统剪辑工具可能更快。

这个 skill 的优势在于「重复」：当结构会反复出现，生产线才值得维护。

## 它能实现什么功能

使用这个 skill 后，Codex 会帮助你搭建一套 Codex + Remotion 视频生产方法，重点输出以下内容：

### 1. 判断是否适合 Remotion 生产线

先判断你的内容是否适合模板化生产，以及应该先用 HyperFrames 验证，还是直接进入 Remotion 模板。

判断维度包括：

- 主题是否每天变化，但结构保持稳定
- 视频是否主要由文字、字幕、截图、卡片、UI、图表承载
- 是否需要长期保持统一视觉
- 是否需要多平台尺寸和批量渲染
- 是否值得把规则写入项目，而不是每天重复描述

推荐判断：

| 状态 | 推荐工具 | 原因 |
| --- | --- | --- |
| 选题和画面风格还没稳定 | HyperFrames | 先快速做样片，验证观众是否愿意看 |
| 栏目结构已经稳定 | Remotion | 把模板、字幕、封面、时长、导出规则固定下来 |
| 每天要批量产出同一类内容 | Codex + Remotion | 用 JSON 驱动多条视频，减少重复手工调整 |

### 2. 生成视频项目规则

skill 会指导你创建或完善 `AGENTS.md`，让 Codex 明确知道这个视频账号的长期规则。

规则可以包括：

- 默认视频尺寸，例如 1080x1920
- 帧率和目标时长
- 字幕安全区
- 标题行数和字数限制
- 封面风格
- 字体、颜色、品牌标识
- 动画风格
- 导出目录
- 渲染前检查方式
- 哪些视觉表达不适合这个账号

这样以后不用每次都在聊天里重复解释「我的视频要什么风格」。

### 3. 设计最小 Remotion 项目结构

skill 会给出一套足够小、但可以长期扩展的项目结构：

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

核心原则：每天变化的是 `content/*.json`，不是每天重写视频组件。

### 4. 把每日内容变成结构化 JSON

一条视频的内容会被拆成稳定字段，例如：

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

这样每次只需要输入主题、观点、素材和口播方向，Codex 就能把它整理成 Remotion 可读取的数据。

### 5. 拆出五个可复用视频模块

skill 会把视频生产线拆成五个模块：

| 模块 | 作用 | 复用重点 |
| --- | --- | --- |
| Hook | 前 3 秒让观众知道为什么要看 | 标题、冲突、重点词、快速动效 |
| Scene | 承载主要观点、步骤、案例 | 卡片、对比、UI、图表、段落节奏 |
| Caption | 保证字幕稳定可读 | 字号、行高、安全区、强调色 |
| Asset | 管理图片、截图、头像、品牌元素 | 本地素材引用和命名规则 |
| Ending | 总结和轻提示 | 结尾卡、账号记忆点、行动提示 |

这五个模块稳定后，每天的视频就从「重新做」变成「替换数据 + 少量优化」。

### 6. 加入 HyperFrames 快速验证层

融合后的流程不是一上来就追求完整工程，而是先分清「验证」和「量产」：

1. 新栏目、新人设、新内容赛道：先用 HyperFrames 做 1-3 条样片。
2. 样片重点验证开场、节奏、标题密度、画面信息量和完播理由。
3. 当某个格式连续可复用，再把它沉淀成 Remotion composition。
4. 后续每天只更新 `content/*.json`，由 Codex 检查字段并调用 Remotion 渲染。

这能避免一开始就维护过重的模板，也能避免每次只做一次性视频。

### 7. 建立每日视频流程

推荐日常流程：

1. 写下原始想法：主题、受众、核心观点、语气、素材。
2. 如果栏目还没稳定，先让 Codex 生成 HyperFrames brief，做快速样片。
3. 如果栏目已经稳定，让 Codex 转成 45-75 秒脚本和 `content/YYYY-MM-DD-topic.json`。
4. 让 Codex 检查当前 Remotion 模板是否支持所有字段。
5. 先渲染一张关键帧，检查标题、字幕、画面层级和安全区。
6. 再渲染完整 MP4。
7. 发布后只改进一个生产线问题，例如开场模板、字幕规则、封面构图、场景时长或结尾卡。

重点不是每次临时修一条视频，而是让每次复盘都改进下一次的生产线。

### 8. 三类高复用内容赛道

融合后的 skill 增加了三个更适合普通创作者落地的赛道判断：

| 赛道 | 内容结构 | 生产线重点 |
| --- | --- | --- |
| 讲书号 | 金句、冲突、案例、行动建议 | 强开场、观点密度、书籍信息卡、结尾引导 |
| 带货讲解 | 痛点、场景、产品点、对比、使用结果 | 可信场景、卖点分层、画面证据、轻提示 |
| 数据科普 | 现象、数字、解释、误区、结论 | 图表组件、信息层级、来源备注、低门槛解释 |

这三类内容都适合先做样片，再把跑通的结构沉淀成 Remotion 模板。

### 9. 渲染前检查清单

skill 会提醒 Codex 在完整渲染前检查：

- 标题是否过长
- 字幕是否超出安全区
- 字幕是否盖住核心画面
- Logo 和品牌标识位置是否稳定
- 颜色对比是否足够清晰
- 场景时长是否合理
- 封面是否一眼能看懂
- 输出格式、尺寸、时长是否符合平台要求

### 10. 先做六个模板

不要一开始做太多模板。建议先完成三类最常用模板：

1. 观点解释型：开场、问题、洞察、方法、例子、结尾。
2. 工具教程型：问题、工具、步骤、演示、结果、结尾。
3. 金句卡片型：金句、背景、解释、行动、结尾。
4. 讲书拆解型：书名、金句、现实问题、书中方法、生活案例、行动建议。
5. 带货讲解型：使用场景、痛点、产品点、对比、结果、轻提示。
6. 数据科普型：现象、关键数字、误区、解释、图表、结论。

## 安装

把 skill 目录复制到 Codex skills 目录：

```bash
cp -R codex-remotion-daily-video ~/.codex/skills/
```

安装后，在 Codex 中提出与 Codex + Remotion 视频日更、视频生产线、模板化短视频相关的请求时，会触发这个 skill。

## 使用示例

### 从 0 搭建生产线

```text
我想用 Codex + Remotion 做知识类短视频日更，把每天的视频变成模板加 JSON 的流程。
```

### 先用 HyperFrames 验证样片

```text
我想做讲书号，还不确定视觉风格。先帮我用 HyperFrames 思路设计 3 条样片 brief，再告诉我哪条适合沉淀成 Remotion 模板。
```

### 生成账号规则

```text
帮我设计一个 AGENTS.md，让 Codex 以后知道我的视频账号规则、视觉风格和渲染检查标准。
```

### 把文章转成视频数据

```text
我已经有 Remotion 模板了，想让 Codex 每天把文章转成 content JSON，再渲染一条竖屏视频。
```

### 检查模板问题

```text
我的模板经常字幕溢出，应该改文案还是改组件？
```

### 发布后复盘

```text
根据这条视频的数据，帮我只挑一个最值得改进的生产线问题：开场、字幕、封面、场景节奏或结尾。
```

## 推荐工作方式

这个 skill 最好的使用方式不是让 Codex 一次性生成一个巨大的项目，而是按顺序推进：

1. 先确认你的内容是否值得模板化。
2. 如果赛道还没稳定，先用 HyperFrames 思路做样片 brief。
3. 再写 `AGENTS.md`，固定账号规则。
4. 然后做一个最小 Remotion 模板。
5. 接着用 JSON 驱动每天的视频。
6. 每天发布后只优化生产线里的一个模块。

这样项目会越来越稳定，而不是越做越乱。

## 文件说明

```text
.
├── README.md
├── codex-remotion-daily-video/
│   ├── SKILL.md
│   └── test-prompts.json
└── source/
    ├── zesee-2072417062165635433.md
    └── iluciddreaming-2074384960979636443.md
```

- `codex-remotion-daily-video/SKILL.md`：可安装的 Agent Skill 主文件。
- `codex-remotion-daily-video/test-prompts.json`：触发测试和边界测试。
- `source/zesee-2072417062165635433.md`：原文观点摘要和提炼记录。
- `source/iluciddreaming-2074384960979636443.md`：融合来源摘要和可确认信息记录。

## 来源

本项目根据以下公开文章提炼：

- 原文：用 Codex + Remotion 实现无痛自媒体视频日更，涨粉过万：把剪视频变成维护一条生产线
- 作者：Rachel (@Zesee)
- 链接：[https://x.com/Zesee/status/2072417062165635433](https://x.com/Zesee/status/2072417062165635433)
- 融合来源：普通人2026做自媒体：Codex+HyperFrames+Remotion 一键出片完全手册
- 作者：mousepotato (@iluciddreaming)
- 链接：[https://x.com/iluciddreaming/status/2074384960979636443](https://x.com/iluciddreaming/status/2074384960979636443)
- 整理时间：2026-07-07

## 许可证

当前项目主要是 skill 说明、流程设计和测试提示词。你可以按自己的仓库策略补充许可证文件。
