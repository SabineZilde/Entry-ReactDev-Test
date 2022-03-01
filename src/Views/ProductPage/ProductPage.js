import React from "react";
import {
  ButtonLarge,
  AttributeButton,
} from "../../Components/Buttons/Buttons.style";
import {
  Row,
  ThumbnailColumn,
  LargeImgColumn,
  ProductDetailColumn,
  DescriptionRow,
} from "./ProductPage.style";
import { FontRaleway, FontRoboto } from "../../Components/Fonts/Fonts.style";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCT } from "../../GraphQL/Queries";
import parse from "html-react-parser";

class ProductPage extends React.Component {
  state = {
    id: null,
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
          if (loading) return "Loading...";
          return (
            <Row>
              <ThumbnailColumn>
                <button>
                  {data.product.gallery.map((image, id) => (
                    <img key={id} src={image} alt="Product" />
                  ))}
                </button>
              </ThumbnailColumn>
              <LargeImgColumn>
                <img src={data.product.gallery[0]} alt="Product large" />
              </LargeImgColumn>
              <ProductDetailColumn>
                <div>
                  <FontRaleway fontSize="30px" fontWeight="600">
                    {data.product.brand}
                  </FontRaleway>
                  <FontRaleway fontSize="30px" margin="5px 0 20px">
                    {data.product.name}
                  </FontRaleway>
                </div>
                <div>
                  {data.product.attributes.map((attribute, id) => (
                    <div>
                      <FontRoboto
                        key={id}
                        condensed
                        fontSize="18px"
                        fontWeight="700"
                        margin="10px 0"
                      >
                        {attribute.name}
                      </FontRoboto>
                      {attribute.items.map((item, id) => {
                        if (attribute.name === "Color") {
                          return (
                            <AttributeButton
                              key={id}
                              margin="0 10px 10px 0"
                              color={item.displayValue}
                            ></AttributeButton>
                          );
                        } else {
                          return (
                            <AttributeButton key={id} margin="0 10px 10px 0">
                              {item.value}
                            </AttributeButton>
                          );
                        }
                      })}
                    </div>
                  ))}
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
                  <FontRaleway fontSize="24px" fontWeight="700">
                    $50.00
                  </FontRaleway>
                </div>
                {data.product.attributes.map((attribute, id) => (
                  <ButtonLarge
                    primary
                    key={id}
                    onClick={() => alert(`Please choose the ${attribute.name}`)}
                  >
                    ADD TO CART
                  </ButtonLarge>
                ))}
                <DescriptionRow>
                  <FontRoboto>{parse(data.product.description)}</FontRoboto>
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
