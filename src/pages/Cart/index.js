import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductList,
  Product,
  Image,
  Name,
  UnitValue,
  AmountContainer,
  Number,
  Value,
  DetailsContainer,
  ProductContainer,
  TotalContainer,
  TotalText,
  Total,
  FinalizarPedidoButton,
  FinalizarPedidoText,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalPrice, product) => {
        return totalPrice + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductList>
        {cart.map(product => (
          <Product>
            <ProductContainer>
              <Image source={{ uri: product.image }} />
              <DetailsContainer>
                <Name>{product.title}</Name>
                <UnitValue>{product.priceFormatted}</UnitValue>
              </DetailsContainer>
              <TouchableOpacity
                onPress={() => dispatch(CartActions.removeFromCart(product.id))}
              >
                <Icon name="remove-shopping-cart" color="#00cc74" size={23} />
              </TouchableOpacity>
            </ProductContainer>
            <AmountContainer>
              <TouchableOpacity onPress={() => decrement(product)}>
                <Icon name="remove-circle-outline" color="#00cc74" size={16} />
              </TouchableOpacity>
              <Number>{product.amount}</Number>
              <TouchableOpacity onPress={() => increment(product)}>
                <Icon name="add-circle-outline" color="#00cc74" size={16} />
              </TouchableOpacity>
              <Value>{product.subtotal}</Value>
            </AmountContainer>
          </Product>
        ))}
        <TotalContainer>
          <TotalText>TOTAL</TotalText>
          <Total>{total}</Total>
        </TotalContainer>
        <FinalizarPedidoButton>
          <FinalizarPedidoText>FINALIZAR PEDIDO</FinalizarPedidoText>
        </FinalizarPedidoButton>
      </ProductList>
    </Container>
  );
}
