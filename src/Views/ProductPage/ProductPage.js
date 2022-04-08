import React from "react";
import {
  Row,
  ProductDetailColumn,
  DescriptionRow,
} from "./ProductPage.style";
import { FontRaleway, FontRoboto } from "../../Components/CommonStyles/Fonts.style";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCT } from "../../GraphQL/Queries";
import parse from "html-react-parser";
import { Loader } from "../../Components/CommonStyles/Loader.style";
import Price from "../../Components/CommonComponents/Price";
import Attributes from "../../Components/ProductPage/Attributes";
import AddToCart from "../../Components/ProductPage/AddToCart";
import Gallery from "../../Components/ProductPage/Gallery";

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
                  <FontRaleway fontSize="30px" fontWeight="600">
                    {product.brand}
                  </FontRaleway>
                  <FontRaleway fontSize="30px" margin="5px 0 20px">
                    {product.name}
                  </FontRaleway>
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
