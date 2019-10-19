import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { Container, ProductList, ProductView, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    headerTitle: <Image source={logo} />,
    headerRight: (
      <Cart to="/cart">
        <Text>
          Meu carrinho
          {/* <span>{cartSize} itens</span> */}
        </Text>
        <Icon name="shopping-cart" size={36} color="#FFF" />
      </Cart>
    ),
  };

  render() {
    return (
      <Container>
        <ProductList>
          <ProductView>Hello World</ProductView>
        </ProductList>
      </Container>
    );
  }
}
