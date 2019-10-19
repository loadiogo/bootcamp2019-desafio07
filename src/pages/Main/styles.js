import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #191920;
`;

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
})`
  margin-top: 20px;
`;

export const ProductView = styled.View`
  flex-direction: row;

  background: #fff;
  border-radius: 4px;
`;

export const Cart = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;
