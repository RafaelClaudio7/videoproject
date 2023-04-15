import styled from 'styled-components/native';

const buttonBg = 'rgba(0,0,0,0.3)';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: space-between;
`;

export const Top = styled.View`
  height: 20%;
  /* background-color: red; */
  padding-top: 10px;
  align-items: flex-start;
`;

export const TopContent = styled.View`
  width: 100%;
  /* background-color: green; */
  flex-direction: row;
  align-items: center;
`;

export const Mid = styled.View`
  /* background-color: blue; */
  height: 60%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 30px;
  width: 30px;
  align-self: flex-end;
  margin-right: 20px;
`;

export const Bottom = styled.View`
  height: 20%;
  /* background-color: green; */
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background-color: ${buttonBg};
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const TextContainer = styled.View``;

export const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 900;
  margin-left: 20px;
`;

export const Description = styled.Text`
  color: #c9d6df;
  font-size: 14px;
  font-weight: 400;
  margin-left: 20px;
`;

export const PlayButton = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  background-color: ${buttonBg};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const ExpandButton = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background-color: ${buttonBg};
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
