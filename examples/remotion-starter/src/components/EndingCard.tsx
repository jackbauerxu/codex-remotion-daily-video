import {theme} from '../styles/theme';
import type {DailyVideoContent} from '../types';

type Props = {
  ending: DailyVideoContent['ending'];
};

export const EndingCard = ({ending}: Props) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: theme.layout.safeX,
        right: theme.layout.safeX,
        top: 330,
        minHeight: 840,
        padding: '78px 66px',
        borderRadius: theme.layout.radius,
        background: theme.colors.ink,
        color: theme.colors.card,
        boxShadow: `0 32px 90px ${theme.colors.shadow}`
      }}
    >
      <div
        style={{
          width: 92,
          height: 12,
          background: theme.colors.accent,
          marginBottom: 70
        }}
      />
      <h2
        style={{
          margin: 0,
          fontFamily: theme.font.display,
          fontSize: 82,
          lineHeight: 1.16,
          letterSpacing: 0
        }}
      >
        {ending.summary}
      </h2>
      {ending.cta ? (
        <p
          style={{
            margin: '100px 0 0',
            fontSize: 40,
            lineHeight: 1.35,
            color: theme.colors.accentSoft
          }}
        >
          {ending.cta}
        </p>
      ) : null}
    </div>
  );
};
