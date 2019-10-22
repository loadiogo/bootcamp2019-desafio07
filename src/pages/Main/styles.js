import styled from 'styled-components/native';
import { darken } from 'polished';

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
export const ProductName = styled.Text`
  font-size: 16px;
`;

export const ProductValue = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddToCartButton = styled.TouchableOpacity`
  flex-direction: row;
  background: #7159c1;
  align-items: center;
  margin-top: auto;
  border-radius: 4px;
`;

export const AddToCartText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const ProductAmountContainer = styled.View`
  padding: 12px;
  background: ${darken(0.03, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;
export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
