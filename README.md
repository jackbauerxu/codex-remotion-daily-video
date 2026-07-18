# Codex Remotion Daily Video

把短视频日更从“每天重新剪一条”变成“维护一条可复用的视频生产线”。

这个仓库是一个 Codex / ChatGPT Skill，也包含可改造的 Remotion starter。它不是父级工作流设计器；它是视频生产线的子级落地层。

## 它融合了什么

- Rachel (@Zesee) 的 Codex + Remotion 日更思路：把视频账号的稳定结构沉淀成 React 组件、JSON 内容和渲染规则。
- mousepotato (@iluciddreaming) 的 Codex + HyperFrames + Remotion 方法：新栏目先用 HyperFrames 验证样片，稳定后再升级成 Remotion 模板。
- zhouwei713/seedance-prompt 的真实视频提示词方法：在需要 B-roll 或 AI 视频素材时，用“素材来源身份、设备年代、真实缺陷、自然时间轴”来减少 AI 味。
- `codex-workflow-builder` 的父子协作边界：父级判断流程是否值得复用并输出 Workflow Contract；本 Skill 接收合同后处理视频专项生产。

原始蒸馏来源保留在 `source/`：

- `source/zesee-2072417062165635433.md`
- `source/iluciddreaming-2074384960979636443.md`

## 它能做什么

这个 Skill 负责把可重复的视频内容变成工程化生产线：

- 接收父级 Workflow Contract；
- 判断 HyperFrames 验证、Remotion 生产，或两者都用；
- 选择内容 lane，例如观点解释、工具教程、讲书、产品讲解、数据科普、金句卡、播客切片；
- 生成脚本模板、提示词、风格预设和镜头语言；
- 把每日选题写成 `content/*.json`；
- 维护 Remotion composition、标题、字幕、场景、进度条、来源和结尾组件；
- 渲染前做内容、素材、安全区和 still frame 检查；
- 渲染后验证 MP4 文件，并把复盘结论沉淀回组件或规则。

## 和父级 Skill 的关系

`codex-workflow-builder` 是父级。它回答：

- 这个流程是否值得长期复用？
- 输入、输出、触发、检查点和停止条件是什么？
- 应该交给哪个子 Skill 落地？

`codex-remotion-daily-video` 是子级。它回答：

- 视频 lane 选哪一种？
- 用 HyperFrames 验证，还是直接 Remotion 量产？
- JSON schema 长什么样？
- 哪些组件必须可复用？
- still frame 和 MP4 怎么检查？
- 复盘时该改哪条长期规则？

不要把父级的流程判断内容复制进子级。子级要把视频真正跑起来。

## 仓库结构

```text
.
├── codex-remotion-daily-video/
│   ├── SKILL.md
│   ├── references/
│   │   ├── production-line.md
│   │   ├── qa-checks.md
│   │   ├── schema-and-rendering.md
│   │   └── style-prompts-and-scripts.md
│   └── test-prompts.json
├── examples/
│   └── remotion-starter/
│       ├── AGENTS.md
│       ├── content/example.json
│       ├── src/
│       └── scripts/
├── scripts/
│   └── verify-repo.mjs
└── source/
```

## 快速使用

安装 Skill 后，可以这样调用：

```text
这是 codex-workflow-builder 生成的 Workflow Contract。
请用 codex-remotion-daily-video 继续设计视频 lane、content JSON、Remotion 模板、still frame 检查和 MP4 渲染流程。
```

如果你要从 starter 开始一个真实项目：

```bash
cp -R examples/remotion-starter my-daily-video
cd my-daily-video
npm run validate
npm run brief -- --content content/example.json --out outputs/example-brief.md
npm install
npm run still -- --content content/example.json --out outputs/example.png
npm run render -- --content content/example.json --out outputs/example.mp4
npm run verify -- outputs/example.mp4 --kind mp4
```

在没有安装依赖前，`validate` 和 `brief` 可以先跑；still / MP4 渲染需要 Remotion 依赖、浏览器和 FFmpeg 环境可用。

## Definition Of Done

一次合格的视频生产线改造必须满足：

- `SKILL.md` 保持入口清晰，细节在 `references/`；
- 有脚本库、提示词库、风格预设和 QA 规则；
- 有可改造的 Remotion starter；
- 有内容 JSON 示例；
- 有不依赖 Remotion 安装即可运行的结构验证；
- 有 still frame 和 MP4 渲染脚本；
- 不把未渲染的 JSON、brief 或 React 组件说成视频；
- 不把未经证实的数字、案例或结果画成事实。
