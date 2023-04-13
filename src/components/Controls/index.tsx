import React from 'react';
import {
  Bottom,
  CloseButton,
  Container,
  ExpandButton,
  Mid,
  PlayButton,
  Title,
  Top,
  TopContent,
} from './styles';
import {Play, X, CornersOut, Pause} from 'phosphor-react-native';

interface IControlsProps {
  onClose: () => void;
  isPaused: boolean;
  onTogglePause: () => void;
  onToggleFullScreen: () => void;
  title: string;
}

const Controls = ({
  onClose,
  isPaused,
  onTogglePause,
  onToggleFullScreen,
  title,
}: IControlsProps) => {
  console.log('teste');
  return (
    <Container>
      <Top>
        <TopContent>
          <CloseButton onPress={onClose}>
            <X size={20} color={'white'} />
          </CloseButton>
          <Title>{title}</Title>
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
