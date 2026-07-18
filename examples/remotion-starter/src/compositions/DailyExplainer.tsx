import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Caption} from '../components/Caption';
import {EndingCard} from '../components/EndingCard';
import {ProgressBar} from '../components/ProgressBar';
import {SceneCard} from '../components/SceneCard';
import {SourceNote} from '../components/SourceNote';
import {TitleCard} from '../components/TitleCard';
import {theme} from '../styles/theme';
import type {DailyVideoContent} from '../types';

type Props = {
  content: DailyVideoContent;
};

export const DailyExplainer = ({content}: Props) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const hookFrames = Math.round(fps * 3);
  const endingFrames = Math.round(fps * 5);
  const sceneFrames = Math.max(
    Math.floor((durationInFrames - hookFrames - endingFrames) / content.scenes.length),
    fps * 4
  );

  const isHook = frame < hookFrames;
  const isEnding = frame >= durationInFrames - endingFrames;
  const sceneIndex = Math.min(
    Math.max(Math.floor((frame - hookFrames) / sceneFrames), 0),
    content.scenes.length - 1
  );
  const scene = content.scenes[sceneIndex];
  const caption = isHook ? content.hook : isEnding ? content.ending.summary : scene.caption;
  const bgShift = interpolate(frame, [0, durationInFrames], [0, -80], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });

  return (
    <AbsoluteFill
      style={{
        background: theme.colors.bg,
        color: theme.colors.ink,
        fontFamily: theme.font.sans,
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 30% 16%, rgba(217,75,61,0.16), transparent 30%), radial-gradient(circle at 80% 75%, rgba(21,21,21,0.08), transparent 35%)',
          transform: `translateY(${bgShift}px)`
        }}
      />
      <ProgressBar frame={frame} durationInFrames={durationInFrames} />
      {isHook ? (
        <TitleCard title={content.title} subtitle={content.subtitle} hook={content.hook} />
      ) : isEnding ? (
        <EndingCard ending={content.ending} />
      ) : (
        <SceneCard scene={scene} index={sceneIndex} total={content.scenes.length} />
      )}
      <SourceNote sources={content.sources} />
      <Caption text={caption} />
    </AbsoluteFill>
  );
};
