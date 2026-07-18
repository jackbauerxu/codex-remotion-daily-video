import {theme} from '../styles/theme';

type Props = {
  frame: number;
  durationInFrames: number;
};

export const ProgressBar = ({frame, durationInFrames}: Props) => {
  const pct = Math.min(1, Math.max(0, frame / durationInFrames));

  return (
    <div
      style={{
        position: 'absolute',
        left: theme.layout.safeX,
        right: theme.layout.safeX,
        top: 70,
        height: 12,
        borderRadius: 999,
        background: 'rgba(21,21,21,0.12)',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          width: `${pct * 100}%`,
          height: '100%',
          borderRadius: 999,
          background: theme.colors.accent
        }}
      />
    </div>
  );
};
