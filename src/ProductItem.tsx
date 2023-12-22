/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from "styled-components";
import { Product } from "./types";

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps): JSX.Element => {
  return (
    <StyledContainer data-testid="product-item">
      <img src={product.thumbnail} />
      <span>{product.title}</span>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100px;

  img {
    height: 100px;
    object-fit: cover;
    object-position: center center;
    overflow: hidden;
    width: 100px;
  }

  span {
    font-size: 12px;
    font-weight: bold;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
  }
`;
