import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  display: flex;

  margin: 20px;
  background: #fff;
  border-radius: 5px;
`;

export const ProductCard = styled.FlatList`
  display: flex;
  padding: 10px;
  margin-top: 10px;
`;

export const ProductDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductInfo = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 16px;
`;

export const DeleteProduct = styled.View`
  padding: 20px;
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;

  background: #eee;
  border-radius: 5px;
  padding: 8px;
`;

export const SubTotal = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 16px;
  text-align: right;
`;

export const QtyProduct = styled.TextInput.attrs({
  editable: false,
})`
  margin: 0 5px;
  padding: 5px;
  min-width: 50px;
  border-radius: 5px;
  text-align: center;
  color: #000;
  background: #fff;
`;

export const Footer = styled.View`
  margin-bottom: 10px;
`;

export const CartTotal = styled.View`
  align-items: center;
  margin: 15px;
`;

export const TotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const TotalAmount = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const FinishButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  height: 40px;
  background: #7159c1;
  border-radius: 5px;
  margin: 10px;
`;

export const FinishButtonText = styled.Text`
  flex: 1;

  text-align: center;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const EmptyCart = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const TextEmptyCart = styled.Text`
  color: #999;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
`;
