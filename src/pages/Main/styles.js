import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
`;

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ProductView = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  width: 220px;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;
export const ProductName = styled.Text``;
export const ProductValue = styled.Text``;
