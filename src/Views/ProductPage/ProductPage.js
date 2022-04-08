import React from "react";
import {
  Row,
  ProductDetailColumn,
  DescriptionRow,
} from "./ProductPage.style";
import { FontRoboto } from "../../Components/CommonStyles/Fonts.style";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCT } from "../../GraphQL/Queries";
import { Loader } from "../../Components/CommonStyles/Loader.style";
import Price from "../../Components/CommonComponents/Price";
import Attributes from "../../Components/ProductPage/Attributes";
import AddToCart from "../../Components/ProductPage/AddToCart";
import Gallery from "../../Components/ProductPage/Gallery";
import ProductName from "../../Components/CommonComponents/ProductName";
import parse from "html-react-parser";

class ProductPage extends React.Component {
  state = {
    id: '',
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({
      id: id,
    });
  }

  render() {
    return (
      <Query query={LOAD_PRODUCT} variables={{ id: this.state.id }}>
        {({ loading, data }) => {
          if (loading) return <Loader />;
          const { product } = data;
          return (
            <Row>
              <Gallery gallery={product.gallery} />
              <ProductDetailColumn>
                <div>
                  <ProductName product={product} />
                </div>
                <div>
                  <Attributes product={product} />
                </div>
                <div>
                  <FontRoboto
                    condensed
                    fontSize="18px"
                    fontWeight="700"
                    margin="20px 0 0"
                  >
                    PRICE:
                  </FontRoboto>
                  <Price item={product} size='large' />
                </div>
                <AddToCart product={product} />
                <DescriptionRow>
                  <FontRoboto>{parse(product.description)}</FontRoboto>
                </DescriptionRow>
              </ProductDetailColumn>
            </Row>
          );
        }}
      </Query>
    );
  }
}

export default ProductPage;
