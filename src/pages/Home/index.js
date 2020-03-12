import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';

import api from '../../services/api';

import {
  ProductCard,
  ProductTitle,
  ProductPrice,
  ProductList,
  ProductImage,
  AddButton,
  AddButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';

import {formatPrice} from '../../util/format';
import * as cartActions from '../../store/module/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state => {
    return state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {});
  });

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormated: `R$ ${product.price}`,
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  const dispatch = useDispatch();

  function handleAddProduct(id) {
    dispatch(cartActions.addToCartRequest(id));
  }

  return (
    <ProductList
      horizontal
      data={products}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (
        <ProductCard>
          <ProductImage source={{uri: item.image}} />
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{formatPrice(item.price)}</ProductPrice>
          <AddButton onPress={() => handleAddProduct(item.id)}>
            <ProductAmount>
              <Icon name="add-shopping-cart" size={20} color="#fff" />
              <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
            </ProductAmount>
            <AddButtonText>ADICIONAR</AddButtonText>
          </AddButton>
        </ProductCard>
      )}
    />
  );
}

// Home.propTypes = {
//   amount: PropTypes.shape({
//     amount: PropTypes.number,
//   }).isRequired,
//   addToCartRequest: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   amount: state.cart.reduce((amount, product) => {
//     amount[product.id] = product.amount;

//     return amount;
//   }, {}),
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(cartActions, dispatch);
