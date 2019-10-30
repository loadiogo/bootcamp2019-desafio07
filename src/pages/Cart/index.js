import React from 'react';
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

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
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
              <TouchableOpacity onPress={() => removeFromCart(product.id)}>
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

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
