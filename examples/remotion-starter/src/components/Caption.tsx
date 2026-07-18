import {theme} from '../styles/theme';

type Props = {
  text: string;
};

export const Caption = ({text}: Props) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: theme.layout.safeX,
        right: theme.layout.safeX,
        bottom: theme.layout.safeBottom,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          maxWidth: 850,
          padding: '24px 34px',
          borderRadius: 18,
          background: 'rgba(21,21,21,0.88)',
          color: '#fffaf0',
          fontSize: 42,
          lineHeight: 1.24,
          fontWeight: 800,
          textAlign: 'center'
        }}
      >
        {text}
      </div>
    </div>
  );
};
