import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import logo from '../../assets/images/Logo.png';

export const Bar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 64px;
  background: black;
  margin: 0 20px;
`;

export const Cart = styled(RectButton)`
  display: flex;
  flex-direction: row;
  padding: 5px;
`;

export const CartAmount = styled.View`
  position: absolute;
  align-items: center;
  margin-left: 14px;
  margin-top: -7px;
  width: 20px;
  height: 20px;
  background: #7151c9;
  border-radius: 10px;
`;

export const Itens = styled.Text`
  color: white;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const ButtonLogo = styled(RectButton)`
  padding: 5px;
`;
