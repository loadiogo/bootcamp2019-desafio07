import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
  QuantityContainer,
  Number,
  Value,
  DetailsContainer,
  ProductContainer,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
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
            </ProductContainer>
            <AmountContainer>
              <QuantityContainer>
                <Number>{product.amount}</Number>
              </QuantityContainer>
              <Value />
            </AmountContainer>
          </Product>
        ))}
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
