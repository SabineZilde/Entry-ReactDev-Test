import React from "react";
import { Container, ProductContainer } from "./CategoryPage.style";
import Product from "../../Components/Product/Product";

class CategoryPage extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <h2>Category name</h2>
        </div>
        <ProductContainer>
          <Product />
        </ProductContainer>
      </Container>
    );
  }
}

export default CategoryPage;
