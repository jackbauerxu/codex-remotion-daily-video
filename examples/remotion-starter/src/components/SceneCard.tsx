import {interpolate, useCurrentFrame} from 'remotion';
import {theme} from '../styles/theme';
import type {Scene} from '../types';

type Props = {
  scene: Scene;
  index: number;
  total: number;
};

export const SceneCard = ({scene, index, total}: Props) => {
  const frame = useCurrentFrame();
  const local = frame % 240;
  const scale = interpolate(local, [0, 18], [0.96, 1], {
    extrapolateRight: 'clamp'
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: theme.layout.safeX,
        right: theme.layout.safeX,
        top: 210,
        minHeight: 1040,
        padding: '70px 62px',
        border: `3px solid ${theme.colors.line}`,
        borderRadius: theme.layout.radius,
        background: theme.colors.card,
        boxShadow: `0 32px 90px ${theme.colors.shadow}`,
        transform: `scale(${scale})`
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 54
        }}
      >
        <span
          style={{
            color: theme.colors.accent,
            fontSize: 34,
            fontWeight: 800
          }}
        >
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span
          style={{
            color: theme.colors.muted,
            fontSize: 30,
            textTransform: 'uppercase'
          }}
        >
          {scene.type}
        </span>
      </div>
      <h2
        style={{
          margin: 0,
          fontFamily: theme.font.display,
          fontSize: 74,
          lineHeight: 1.14,
          letterSpacing: 0
        }}
      >
        {scene.title}
      </h2>
      <p
        style={{
          margin: '60px 0 0',
          fontSize: 40,
          lineHeight: 1.42,
          color: theme.colors.muted
        }}
      >
        {scene.voiceover}
      </p>
      {scene.bullets?.length ? (
        <div
          style={{
            display: 'grid',
            gap: 22,
            marginTop: 70
          }}
        >
          {scene.bullets.map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 22,
                fontSize: 42,
                fontWeight: 800
              }}
            >
              <span
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 999,
                  background: theme.colors.accent
                }}
              />
              {item}
            </div>
          ))}
        </div>
      ) : null}
      <div
        style={{
          position: 'absolute',
          left: 62,
          right: 62,
          bottom: 58,
          padding: '28px 32px',
          borderRadius: 18,
          background: theme.colors.accentSoft,
          color: theme.colors.ink,
          fontSize: 30,
          lineHeight: 1.35
        }}
      >
        Visual cue: {scene.visual}
      </div>
    </div>
  );
};
