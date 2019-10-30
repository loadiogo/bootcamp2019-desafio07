import styled from 'styled-components/native';
import logo from '../../assets/images/Logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
  background-color: #141419;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const CartContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  width: 24px;
  height: 24px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Amount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background-color: #00cc74;
  font-size: 10px;
  color: #fff;
  padding: 3px;
  border-radius: 9px;
  overflow: hidden;
`;
