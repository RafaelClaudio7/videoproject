import React from 'react';
import {
  Bottom,
  CloseButton,
  Container,
  Description,
  ExpandButton,
  LeftSide,
  Logo,
  Mid,
  PlayButton,
  TextContainer,
  Title,
  Top,
  TopContent,
} from './styles';
import {Play, X, CornersOut, Pause} from 'phosphor-react-native';

interface IControlsProps {
  onClose: () => void;
  isPaused: boolean;
  isFullScreen: boolean;
  onTogglePause: () => void;
  onToggleFullScreen: () => void;
  title: string;
  description: string;
  info: string;
}

const Controls = ({
  onClose,
  isPaused,
  isFullScreen,
  onTogglePause,
  onToggleFullScreen,
  title,
  description,
  info,
}: IControlsProps) => {
  return (
    <Container>
      <Top>
        <TopContent>
          <LeftSide>
            <CloseButton onPress={onClose}>
              <X size={20} color={'white'} />
            </CloseButton>
            {isFullScreen ? (
              <TextContainer>
                <Title>{title}</Title>
                <Description>{description + ' - ' + info}</Description>
              </TextContainer>
            ) : null}
          </LeftSide>
          <Logo source={require('../../assets/yt.png')} />
        </TopContent>
      </Top>
      <Mid>
        <PlayButton onPress={onTogglePause}>
          {isPaused ? (
            <Play size={30} color={'white'} />
          ) : (
            <Pause size={30} color={'white'} />
          )}
        </PlayButton>
      </Mid>
      <Bottom>
        <ExpandButton onPress={onToggleFullScreen}>
          <CornersOut size={20} color={'white'} />
        </ExpandButton>
      </Bottom>
    </Container>
  );
};

export default Controls;
