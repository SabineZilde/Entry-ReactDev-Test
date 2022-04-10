import React from "react";
import {
  Row,
  ProductDetailColumn,
  DescriptionRow,
} from "./ProductPage.style";
import { FontRoboto } from "../../Components/CommonStyles/Fonts.style";
import { LOAD_PRODUCT } from "../../GraphQL/Queries";
import { Loader } from "../../Components/CommonStyles/Loader.style";
import Price from "../../Components/CommonComponents/Price";
import Attributes from "../../Components/ProductPage/Attributes";
import AddToCart from "../../Components/ProductPage/AddToCart";
import Gallery from "../../Components/ProductPage/Gallery";
import ProductName from "../../Components/CommonComponents/ProductName";
import parse from "html-react-parser";
import { client } from '../..';

class ProductPage extends React.Component {
  state = {
    loading: true,
    product: {}
  };

  componentDidMount = async () => {
    const response = await client.query({
      query: LOAD_PRODUCT,
      variables: {
        id: this.props.match.params.id
      }
    });
    this.setState({
      loading: response.loading,
      product: response.data.product
    });
  };

  handlePageContent = () => {
    const { product, loading } = this.state;
    if (loading) return <Loader />;
    return (
      <>
        <Gallery gallery={product.gallery} />
        <ProductDetailColumn>
          <div>
            <ProductName product={product} for='productPage' />
          </div>
          <div>
            <Attributes product={product} />
          </div>
          <div>
            <Price item={product} size='large' page='productPage' />
          </div>
          <AddToCart product={product} />
          <DescriptionRow>
            <FontRoboto>{parse(product.description)}</FontRoboto>
          </DescriptionRow>
        </ProductDetailColumn>
      </>
    );
  };

  render() {
    return (
      <Row>
        {this.handlePageContent()}
      </Row>
    );
  };
};

export default ProductPage;
