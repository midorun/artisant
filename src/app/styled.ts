import { ColorsEnum } from 'const/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 10px;
  font-weight: 400;
`;

export const Header = styled.div``;

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: 700;
  color: ${ColorsEnum.black};
`;

export const Subtitle = styled.h2`
  margin-bottom: 32px;
  font-size: 14px;
  color: ${ColorsEnum.gray}
`;

export const Filter = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px
`;