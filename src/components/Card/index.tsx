import { ColorsEnum } from 'const/colors';
import React, { FC } from 'react';
import { ProductType } from 'types/entities';
import cardBackgroundImg from './img/jacket.svg';

import * as ST from './styled';

export type TCard = {} & ProductType

const Card: FC<TCard> = ({
  name,
  quantity,
  quantityAvailable,
  initialPrice,
  creatorName
}) => {
  return (
    <ST.Wrapper>
      <ST.Img imgUrl={cardBackgroundImg}>
        <ST.TextBlock>
          <ST.CreatedBy>created by</ST.CreatedBy>
          <ST.CreatorName>{creatorName}</ST.CreatorName>
        </ST.TextBlock>
        <ST.TextBlock>
          <ST.ProductName>
            {name}
          </ST.ProductName>
        </ST.TextBlock>
      </ST.Img>
      <ST.Info>
        <ST.TextCol>
          <ST.Text color={ColorsEnum.gray}> available</ST.Text>
          <ST.Text
            color={ColorsEnum.black}
            weight={700}>{`${quantityAvailable} of ${quantity}`}</ST.Text>
        </ST.TextCol>
        <ST.TextCol>
          <ST.Text color={ColorsEnum.gray}>price</ST.Text>
          <ST.Text
            color={ColorsEnum.blue}
            weight={700}
          >{`${initialPrice} ETH`}</ST.Text>
        </ST.TextCol>
      </ST.Info>
    </ST.Wrapper>
  );
};

export default Card;
