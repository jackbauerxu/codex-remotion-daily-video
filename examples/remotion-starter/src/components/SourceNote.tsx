import {theme} from '../styles/theme';
import type {VideoSource} from '../types';

type Props = {
  sources?: VideoSource[];
};

export const SourceNote = ({sources}: Props) => {
  const source = sources?.[0];

  if (!source) {
    return null;
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: theme.layout.safeX,
        right: theme.layout.safeX,
        bottom: 92,
        color: theme.colors.muted,
        fontSize: 24,
        lineHeight: 1.3
      }}
    >
      Source: {source.title}
    </div>
  );
};
