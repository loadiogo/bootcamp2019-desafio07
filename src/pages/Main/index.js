import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
// import formatPrice from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductList,
  ProductView,
  ProductImage,
  ProductName,
  ProductValue,
  AddToCartButton,
  AddToCartText,
  ProductAmountContainer,
  ProductAmountText,
} from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => product.id}
        renderItem={({ item }) => (
          <ProductView>
            <ProductImage source={{ uri: item.image }} />
            <ProductName>{item.title}</ProductName>
            <ProductValue>{item.priceFormatted}</ProductValue>
            <AddToCartButton onPress={() => handleAddProduct(item.id)}>
              <ProductAmountContainer>
                <Icon name="shopping-basket" size={24} color="#fff" />
                <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
              </ProductAmountContainer>
              <AddToCartText>ADICIONAR</AddToCartText>
            </AddToCartButton>
          </ProductView>
        )}
      />
    </Container>
  );
}
