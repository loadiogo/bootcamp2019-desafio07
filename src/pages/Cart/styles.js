import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  padding: 10px;
  margin: 12px;
  border-radius: 4px;
`;
export const ProductList = styled.View`
  /* padding: 4px;
  margin: 10px; */
`;
export const Product = styled.View`
  /* padding: 10px 0px; */
`;
export const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
`;
export const UnitValue = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
`;
export const AmountContainer = styled.View`
  /* justify-content: space-between; */
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;
export const QuantityContainer = styled.View`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  min-width: 52px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
export const Number = styled.Text``;
export const Value = styled.Text``;
