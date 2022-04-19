import React from "react";
import { Container, ProductContainer } from "./CategoryPage.style";
import { FontRaleway } from "../../Components/CommonStyles/Fonts.style";
import Product from "../../Components/CategoryPage/Product/Product";
import MainContext from "../../Context/MainContext";
import { client } from '../..';
import { LOAD_PRODUCTS } from "../../GraphQL/Queries";
import { Loader } from "../../Components/CommonStyles/Loader.style";


class CategoryPage extends React.Component {
  state = {
    loading: true,
    products: {}
  };

  componentDidMount = async () => {
    const response = await client.query({
      query: LOAD_PRODUCTS,
      variables: {
        title: this.props.match.params.category
      }
    });
    this.setState({
      loading: response.loading,
      products: response.data.category
    });
  };

  loadProduct = () => {
    const { products, loading } = this.state;
    if (loading) return <Loader />;
    return products.products.map((product) => {
      return <Product product={product} key={product.id} />;
    });
  };

  render() {
    return (
      <Container>
        <div>
          <FontRaleway fontSize='42px' capitalize>{this.props.match.params.category}</FontRaleway>
        </div>
        <ProductContainer>
          {this.loadProduct()}
        </ProductContainer>
      </Container>
    );
  };
};

CategoryPage.contextType = MainContext;

export default CategoryPage;
