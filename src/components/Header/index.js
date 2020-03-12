import React from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Bar, Logo, ButtonLogo, Cart, CartAmount, Itens} from './styles';

export default function Header({navigation}) {
  const cartSize = useSelector(state => {
    return state.cart.length;
  });

  return (
    <>
      <Bar>
        <ButtonLogo onPress={() => navigation.navigate('Home')}>
          <Logo />
        </ButtonLogo>
        <Cart onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={20} color="#fff" />
          <CartAmount>
            <Itens>{cartSize || 0}</Itens>
          </CartAmount>
        </Cart>
      </Bar>
    </>
  );
}
