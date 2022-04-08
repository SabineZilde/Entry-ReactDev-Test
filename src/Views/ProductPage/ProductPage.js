import React from "react";
import { ButtonLarge } from "../../Components/Buttons.style";
import {
  Row,
  ThumbnailColumn,
  LargeImgColumn,
  ProductDetailColumn,
  DescriptionRow,
} from "./ProductPage.style";
import { FontRaleway, FontRoboto } from "../../Components/Fonts.style";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCT } from "../../GraphQL/Queries";
import parse from "html-react-parser";
import MainContext from "../../Context/MainContext";
import { Loader } from "../../Components/Loader.style";
import Price from "../../Components/Price";
import Attributes from "../../Components/ProductPage/Attributes";

class ProductPage extends React.Component {
  state = {
    id: '',
    largeImg: null,
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({
      id: id,
    });
  }

  changeLargeImg = (img) => {
    this.setState({
      largeImg: img,
    });
  };

  render() {
    const { chosenAttributes, alertIsTriggered, updateCart, showAlert } = this.context;
    return (
      <Query query={LOAD_PRODUCT} variables={{ id: this.state.id }}>
        {({ loading, data }) => {
          if (loading) return <Loader />;
          const { product } = data;
          return (
            <Row>
              <ThumbnailColumn>
                {product.gallery.map((image, id) => (
                  <button key={id} onClick={() => this.changeLargeImg(image)}>
                    <img src={image} alt="Product" />
                  </button>
                ))}
              </ThumbnailColumn>
              <LargeImgColumn backgroundImg={this.state.largeImg === null
                ? product.gallery[0]
                : this.state.largeImg}>
              </LargeImgColumn>
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
                {product.inStock ? (
                  <ButtonLarge
                    primary
                    onClick={() => {
                      if (chosenAttributes.length < product.attributes.length) {
                        showAlert('attributes', product.id)
                      } else {
                        updateCart(
                          product.id,
                          product.brand,
                          product.name,
                          product.gallery,
                          product.prices,
                          chosenAttributes
                        );
                        return !alertIsTriggered &&
                          showAlert('success', product.id, product.brand, product.name)
                      }
                    }}
                  >
                    ADD TO CART
                  </ButtonLarge>
                ) : (
                  <FontRaleway fontColor="red" fontWeight="700" margin="30px 0">
                    OUT OF STOCK!
                  </FontRaleway>
                )}
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

ProductPage.contextType = MainContext;

export default ProductPage;
