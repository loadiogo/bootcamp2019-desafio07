import React, { Component } from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  ProductList,
  ProductView,
  ProductImage,
  ProductName,
  ProductValue,
} from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      // priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  render() {
    const { products } = this.state;
    console.tron.log(products);
    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={product => product.id}
          renderItem={({ item }) => (
            <ProductView>
              <ProductImage source={{ uri: item.image }} />
              <ProductName>{item.title}</ProductName>
              <ProductValue />
            </ProductView>
          )}
        />
      </Container>
    );
  }
}
