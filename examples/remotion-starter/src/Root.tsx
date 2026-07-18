import {Composition} from 'remotion';
import {DailyExplainer} from './compositions/DailyExplainer';
import defaultContent from '../content/example.json';
import type {DailyVideoContent} from './types';

const content = defaultContent as DailyVideoContent;

export const RemotionRoot = () => {
  return (
    <Composition
      id="DailyExplainer"
      component={DailyExplainer}
      durationInFrames={content.durationSec * content.format.fps}
      fps={content.format.fps}
      width={content.format.width}
      height={content.format.height}
      defaultProps={{
        content
      }}
    />
  );
};
