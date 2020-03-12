import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {darken} from 'polished';

export const ProductList = styled.FlatList`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const ProductCard = styled.View`
  display: flex;

  margin: 10px;
  padding: 10px;
  height: 368px;
  width: 230px;
  background: #fff;
  border-radius: 5px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #333333;

  margin-bottom: 10px;
`;

export const ProductPrice = styled.Text`
  font-size: 22px;

  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  height: 40px;
  background: #7151c9;
  border-radius: 5px;
  margin-top: auto;
`;

export const AddButtonText = styled.Text`
  flex: 1;

  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 50px;
  height: 100%;
  padding: 5px;
  background: ${darken('0.05', '#7151C9')};
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

export const ProductAmountText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const StyledSafeArea = styled.SafeAreaView`
  flex: 1;
  background: black;
`;
