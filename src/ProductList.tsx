/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from "styled-components";
import { ProductItem } from "./ProductItem";
import { Product } from "./types";

interface ProductListProps {
  title: string;
  products: Product[];
}

export const ProductList = ({
  title,
  products
}: ProductListProps): JSX.Element => {
  return (
    <StyledProductListContainer>
      <h2>{title}</h2>
      <StyledProductList>
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </StyledProductList>
    </StyledProductListContainer>
  );
};

const StyledProductListContainer = styled.div`
  background: #f1f1f1;
  height: max-content;
  padding: 5px;

  h2 {
    line-height: 1;
    text-transform: uppercase;
  }
`;

const StyledProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;
