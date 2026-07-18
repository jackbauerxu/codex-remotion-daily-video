import {interpolate, useCurrentFrame} from 'remotion';
import {theme} from '../styles/theme';

type Props = {
  title: string;
  subtitle?: string;
  hook: string;
};

export const TitleCard = ({title, subtitle, hook}: Props) => {
  const frame = useCurrentFrame();
  const y = interpolate(frame, [0, 24], [36, 0], {
    extrapolateRight: 'clamp'
  });
  const opacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: 'clamp'
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: theme.layout.safeX,
        right: theme.layout.safeX,
        top: 210,
        transform: `translateY(${y}px)`,
        opacity
      }}
    >
      <div
        style={{
          width: 96,
          height: 12,
          background: theme.colors.accent,
          marginBottom: 38
        }}
      />
      <h1
        style={{
          margin: 0,
          fontFamily: theme.font.display,
          fontSize: 124,
          lineHeight: 1.02,
          letterSpacing: 0
        }}
      >
        {title}
      </h1>
      {subtitle ? (
        <p
          style={{
            margin: '28px 0 0',
            fontSize: 48,
            lineHeight: 1.24,
            color: theme.colors.muted
          }}
        >
          {subtitle}
        </p>
      ) : null}
      <p
        style={{
          margin: '130px 0 0',
          fontSize: 46,
          lineHeight: 1.35,
          maxWidth: 800
        }}
      >
        {hook}
      </p>
    </div>
  );
};
