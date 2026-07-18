export const theme = {
  colors: {
    bg: '#f7f2e8',
    ink: '#151515',
    muted: '#65615a',
    card: '#fffaf0',
    line: '#d8ccb7',
    accent: '#d94b3d',
    accentSoft: '#f2c0b5',
    shadow: 'rgba(21, 21, 21, 0.16)'
  },
  font: {
    display:
      '"Noto Serif SC", "Source Han Serif SC", "Songti SC", "Times New Roman", serif',
    sans:
      '"Inter", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif'
  },
  layout: {
    width: 1080,
    height: 1920,
    safeX: 82,
    safeTop: 120,
    safeBottom: 180,
    radius: 28
  }
} as const;
