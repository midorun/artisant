import * as ST from 'app/styled';
import Card from 'components/Card';
import React, { useEffect, useState } from 'react';
import { ProductType } from 'types/entities';

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [onlyStock, setOnlyStock] = useState(false);

  const filterProducts = (products: ProductType[]) => {
    return products.filter(product => product.quantityAvailable > 0);
  };

  const parseProducts = (rawProductsData: any[]): ProductType[] => {
    return rawProductsData.map(product => {
      const {
        product_id,
        name,
        quantity,
        quantity_available,
        initial_price,
        created_by
      } = product;

      return {
        id: product_id,
        name,
        quantity,
        quantityAvailable: quantity_available,
        initialPrice: initial_price,
        creatorName: created_by.display_name
      };
    });
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://artisant.io/api/products');
      return await response.json();
    };

    getData()
      .then(res => parseProducts(res.data.products))
      .then(products => setProducts(products));
  }, []);

  return (
    <ST.Wrapper>
      <ST.Header>
        <ST.Title>
          Explore
        </ST.Title>
        <ST.Subtitle>
          Buy and sell digital fashion NFT art
        </ST.Subtitle>
        <ST.Filter>
          <label htmlFor={'filter'}>
            Есть в наличии
            <input
              id={'filter'}
              type={'checkbox'}
              checked={onlyStock}
              onChange={() => setOnlyStock(!onlyStock)}/>
          </label>
        </ST.Filter>
      </ST.Header>
      <ST.ProductList>
        {(onlyStock ? filterProducts(products) : products).map((product) => {
          return (
            <Card key={product.id} {...product}/>
          );
        })}
      </ST.ProductList>
    </ST.Wrapper>
  );
}

export default App;
