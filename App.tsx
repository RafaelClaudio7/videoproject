import React, {useState} from 'react';

import {StyleSheet} from 'react-native';
import Video from 'react-native-video';
import styled from 'styled-components/native';
import Controls from './src/components/Controls';
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';

interface IContainerProps {
  isFullScreen: boolean;
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #222831;
`;

const Container = styled.TouchableHighlight`
  background-color: rgba(0, 0, 0, 1);
  height: ${({isFullScreen}: IContainerProps) =>
    isFullScreen ? '100%' : '250px'};
`;

const TitleContainer = styled.View`
  height: 150px;
  padding: 10px 0px 0 10px;
  justify-content: flex-start;
`;

const Title = styled.Text`
  color: #ffff;
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.Text`
  color: #c9d6df;
  font-size: 16px;
  font-weight: 400;
`;

function App(): JSX.Element {
  const [controlsActive, setControlsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const title = '10 MOTIVOS PARA TORCER PARA O REAL MADRID';
  const description = 'O Melhor Time do Mundo';
  const additional = 'Temporada 2 ep 7';

  function handleControlsActive() {
    setControlsActive(true);
    setTimeout(() => {
      setControlsActive(prev => !prev);
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
      {isFullScreen ? (
        <OrientationLocker orientation={LANDSCAPE} />
      ) : (
        <OrientationLocker orientation={PORTRAIT} />
      )}
      <Container onPress={handleControlsActive} isFullScreen={isFullScreen}>
        <>
          <Video
            source={{
              uri: 'https://vjs.zencdn.net/v/oceans.mp4',
              type: 'mp4',
            }}
            paused={isPaused}
            style={styles.backgroundVideo}
            resizeMode="contain"
            volume={5}
            fullscreen={isFullScreen}
          />
          {controlsActive && (
            <Controls
              onClose={closeVideo}
              isPaused={isPaused}
              isFullScreen={isFullScreen}
              onTogglePause={() => setIsPaused(previous => !previous)}
              onToggleFullScreen={toggleFullScreen}
              title={title}
              description={description}
              info={additional}
            />
          )}
        </>
      </Container>
      {!isFullScreen ? (
        <TitleContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TitleContainer>
      ) : null}
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
    bottom: 0,
  },
});

export default App;
