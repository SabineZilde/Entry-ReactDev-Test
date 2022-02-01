import React from "react";
import { Container, ProductContainer } from "./CategoryPage.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import Product from "../../Components/Product/Product";

class CategoryPage extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <FontRaleway fontSize='42px'>Category name</FontRaleway>
        </div>
        <ProductContainer>
          <Product />
        </ProductContainer>
      </Container>
    );
  }
}

export default CategoryPage;
