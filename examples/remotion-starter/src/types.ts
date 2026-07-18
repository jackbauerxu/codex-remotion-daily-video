export type ContentLane =
  | 'book-summary'
  | 'product-explainer'
  | 'data-explainer'
  | 'tool-tutorial'
  | 'opinion-explainer'
  | 'quote-card'
  | 'podcast-clip';

export type Scene = {
  type: string;
  title: string;
  voiceover?: string;
  caption: string;
  visual: string;
  bullets?: string[];
  asset?: string;
};

export type VideoSource = {
  title: string;
  url?: string;
  note?: string;
};

export type DailyVideoContent = {
  id: string;
  lane: ContentLane;
  title: string;
  subtitle?: string;
  durationSec: number;
  platform: string;
  format: {
    width: number;
    height: number;
    fps: number;
  };
  hook: string;
  scenes: Scene[];
  ending: {
    summary: string;
    cta?: string;
  };
  sources?: VideoSource[];
};
