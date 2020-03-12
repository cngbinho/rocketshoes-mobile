import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductCard,
  ProductDetails,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  DeleteProduct,
  ProductAmount,
  SubTotal,
  QtyProduct,
  CartTotal,
  Footer,
  TotalText,
  TotalAmount,
  FinishButton,
  FinishButtonText,
  EmptyCart,
  TextEmptyCart,
} from './styles';

import {formatPrice} from '../../util/format';
import * as cartActions from '../../store/module/cart/actions';

export default function Cart() {
  const products = useSelector(state => {
    return state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }));
  });

  const total = useSelector(state => {
    return formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    );
  });

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(cartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(cartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  const getFooter = () => {
    return (
      <Footer>
        <CartTotal>
          <TotalText>TOTAL</TotalText>
          <TotalAmount>{total}</TotalAmount>
        </CartTotal>
        <FinishButton>
          <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
        </FinishButton>
      </Footer>
    );
  };

  return (
    <Container>
      {products.length ? (
        <ProductCard
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <>
              <ProductDetails>
                <ProductImage source={{uri: item.image}} />
                <ProductInfo>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                </ProductInfo>
                <DeleteProduct>
                  <Icon
                    name="delete-forever"
                    size={20}
                    color="#7159C1"
                    onPress={() => {
                      dispatch(cartActions.removeFromCart(item.id));
                    }}
                  />
                </DeleteProduct>
              </ProductDetails>
              <ProductAmount>
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  color="#7159C1"
                  onPress={() => decrement(item)}
                />
                <QtyProduct>{item.amount}</QtyProduct>
                <Icon
                  name="add-circle-outline"
                  size={20}
                  color="#7159C1"
                  onPress={() => increment(item)}
                />
                <SubTotal>{item.subtotal}</SubTotal>
              </ProductAmount>
            </>
          )}
          ListFooterComponent={getFooter}
        />
      ) : (
        <EmptyCart>
          <Icon name="remove-shopping-cart" size={60} color="#eee" />
          <TextEmptyCart>Seu carrinho está vazio.</TextEmptyCart>
        </EmptyCart>
      )}
    </Container>
  );
}

// Cart.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.object).isRequired,
//   total: PropTypes.string.isRequired,
//   removeFromCart: PropTypes.func.isRequired,
//   updateAmountRequest: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   // products:
//   // })),
//   total:
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(cartActions, dispatch);

// export default connect(
//   null,
//   mapDispatchToProps
// )(Cart);
