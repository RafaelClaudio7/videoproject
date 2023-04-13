import React, {useState} from 'react';

import {StyleSheet} from 'react-native';
import Video from 'react-native-video';
import styled from 'styled-components/native';
import Controls from './src/components/Controls';

interface IContainerProps {
  isFullScreen: boolean;
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #283149;
`;

const Container = styled.TouchableHighlight`
  elevation: 1;
  background-color: rgba(0, 0, 0, 1);
  height: ${({isFullScreen}: IContainerProps) =>
    isFullScreen ? '100%' : '350px'};
`;

function App(): JSX.Element {
  const [controlsActive, setControlsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const title = 'TV CULTURA';

  function handleControlsActive() {
    setControlsActive(true);
    setTimeout(() => {
      setControlsActive(false);
    }, 5000);
  }

  function closeVideo() {
    setIsPaused(true);
    setIsFullScreen(false);
  }

  function toggleFullScreen() {
    setIsFullScreen(prev => !prev);
  }

  return (
    <Wrapper>
      <Container onPress={handleControlsActive} isFullScreen={isFullScreen}>
        <>
          <Video
            source={{
              uri: 'https://vjs.zencdn.net/v/oceans.mp4',
              type: 'mp4',
            }}
            // source={{
            //   uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
            //   type: 'm3u8',
            // }}
            paused={isPaused}
            style={styles.backgroundVideo}
            resizeMode="cover"
            volume={5}
            fullscreen={isFullScreen}
          />
          {controlsActive && (
            <Controls
              onClose={closeVideo}
              isPaused={isPaused}
              onTogglePause={() => setIsPaused(previous => !previous)}
              onToggleFullScreen={toggleFullScreen}
              title={title}
            />
          )}
        </>
      </Container>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {},
  backgroundVideo: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
  },
});

export default App;
