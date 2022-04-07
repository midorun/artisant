import { ColorsEnum } from 'const/colors';
import styled from 'styled-components';

export const Text = styled.span<{ color?: string, weight?: number }>`
  ${({ color }) => color && `color:${color};`}
  ${({ weight }) => weight && `font-weight:${weight};`}
`;

export const TextBlock = styled.div``;

export const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Wrapper = styled.div`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  overflow: hidden;
`;

export const Img = styled.div<{ imgUrl: string }>`
  padding: 25px 16px;
  width: 305px;
  height: 404px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${(props) => props.imgUrl});

  * {
    color: ${ColorsEnum.white}
  }
`;

export const CreatedBy = styled.div`

`;

export const CreatorName = styled.div`
  font-weight: 700;
`;

export const ProductName = styled.div`
  max-width: 137px;
`;

export const Info = styled.div`
  padding: 7px 16px 16px;
  display: flex;
  justify-content: space-between;
`;

export const Available = styled.div``;
export const Price = styled.div``;
