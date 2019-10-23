import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      // priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
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
              <AddToCartButton onPress={() => this.handleAddProduct(item.id)}>
                <ProductAmountContainer>
                  <Icon name="shopping-basket" size={24} color="#fff" />
                  <ProductAmountText>1</ProductAmountText>
                </ProductAmountContainer>
                <AddToCartText>ADICIONAR</AddToCartText>
              </AddToCartButton>
            </ProductView>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
