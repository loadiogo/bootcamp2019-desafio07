import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, CartContainer, Amount } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <CartContainer>
          <MaterialIcons name="shopping-basket" size={24} color="#fff" />
          <Amount>0</Amount>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}
