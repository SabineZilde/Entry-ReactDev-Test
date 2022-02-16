import React from "react";
import { Container, ProductContainer } from "./CategoryPage.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import Product from "../../Components/Product/Product";

class CategoryPage extends React.Component {
  state = {
    category: null
  }

  componentDidMount() {
    let category = this.props.match.params.category;
    this.setState({
      category: category
    })
  };

  render() {
    return (
      <Container>
        <div>
          <FontRaleway fontSize='42px' capitalize>{this.state.category}</FontRaleway>
        </div>
        <ProductContainer>
          <Product category={this.state.category}/>
        </ProductContainer>
      </Container>
    );
  }
}

export default CategoryPage;
