import React from "react";
import { Container, ProductContainer } from "./CategoryPage.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import Product from "../../Components/Product/Product";
import MainContext from "../../Context/MainContext";

class CategoryPage extends React.Component {
  state = {
    category: ''
  };

  componentDidMount() {
    this.context.setScrollHeight(document.documentElement.scrollHeight);
    this.setState({
      category: this.props.match.params.category
    })
  };

  render() {
    const { category } = this.state;
    return (
      <Container>
        <div>
          <FontRaleway fontSize='42px' capitalize>{category}</FontRaleway>
        </div>
        <ProductContainer>
          <Product category={category} />
        </ProductContainer>
      </Container>
    );
  }
}

CategoryPage.contextType = MainContext;

export default CategoryPage;
