import React from "react";
import { Container, ProductContainer } from "./CategoryPage.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import Product from "../../Components/Product/Product";
import MainContext from "../../Context/MainContext";

class CategoryPage extends React.Component {
  render() {
    const { contextCategory } = this.context;
    return (
      <Container>
        <div>
          <FontRaleway fontSize='42px' capitalize>{contextCategory}</FontRaleway>
        </div>
        <ProductContainer>
          <Product />
        </ProductContainer>
      </Container>
    );
  }
}

CategoryPage.contextType = MainContext;

export default CategoryPage;
