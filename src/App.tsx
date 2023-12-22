/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductList } from "./ProductList";
import { Product } from "./types";

export default function App() {
  const [cats, setCats] = useState([]);
  const [chosen, setChosen] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const categories = async () => {
    const a = await fetch("https://dummyjson.com/products/categories");
    const b = await a.json();

    setCats(b);
  };

  const getProducts = async (chosen: string) => {
    const a = await fetch(`https://dummyjson.com/products/category/${chosen}`);
    const b = await a.json();

    setProducts(b.products);
  };

  const select = (cat) => {
    const selected = [...chosen, cat];

    setChosen(selected);
  };

  useEffect(() => {
    categories();
  }, []);

  useEffect(() => {
    getProducts(chosen[chosen.length - 1]);
  }, [chosen.length]);

  return (
    <StyledRoot>
      <StyledLeftContainer data-testid="categories">
        <StyledLeftHeading data-testid="categories-title">
          Categories
        </StyledLeftHeading>
        {cats.map((cat) => (
          <StyledCat data-testid="cat" onClick={(e) => select(cat)}>
            {cat}
          </StyledCat>
        ))}
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledChosen>
          {chosen.map((chosenElement) => (
            <StyledChosenElement data-testid="chosen-element">
              {chosenElement}
            </StyledChosenElement>
          ))}
        </StyledChosen>
        <ProductList title={chosen[chosen.length - 1]} products={products} />
      </StyledRightContainer>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Verdana, sans-serif;
  gap: 20px;
`;

const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledLeftHeading = styled.h2`
  font-size: 18px;
  margin: 5px 0;
`;

const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const StyledCat = styled.div`
  background: lightblue;
  color: #111;
  cursor: pointer;
  padding: 5px 10px;
  height: 20px;
  text-wrap: nowrap;
`;

const StyledChosen = styled.div`
  background: #e1e1e1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 80px;
  overflow: scroll;
  width: 100%;
`;

const StyledChosenElement = styled.div`
  background: #333;
  color: #fff;
  padding: 5px 10px;
  height: 20px;
  margin: 5px;
`;
