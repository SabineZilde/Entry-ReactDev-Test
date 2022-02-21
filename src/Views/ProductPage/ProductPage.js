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

class ProductPage extends React.Component {
  state = {
    id: null
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({
      id: id
    });
  };

  render() {
    return (
      <Query query={LOAD_PRODUCT} variables={{ id: this.state.id }}>
        {({ loading, data }) => {
          if (loading) return "Loading...";
          console.log(data.product.attributes);

          return (
            <Row>
              <ThumbnailColumn>
                {data.product.gallery.map((image, id) => (
                  <img key={id} src={image} alt="Product" />
                ))}
              </ThumbnailColumn>
              <LargeImgColumn>
                <img src={data.product.gallery[0]} alt="Product large" />
              </LargeImgColumn>
              <ProductDetailColumn>
                <div>
                  <FontRaleway fontSize="30px" fontWeight="600">
                    {/* {this.state.id} */}
                    {data.product.brand}
                  </FontRaleway>
                  <FontRaleway fontSize="30px">{data.product.name}</FontRaleway>
                </div>
                <div>
                  {data.product.attributes.map((attribute, id) => (
                    <>
                      <FontRoboto key={id} condensed fontSize="18px" fontWeight="700">
                        {attribute.name}
                      </FontRoboto>
                      {attribute.items.map((item, id) => (
                        <AttributeButton key={id} margin="0 10px 0 0">{item.value}</AttributeButton>
                      ))}
                    </>
                  ))}
                </div>
                <div>
                  <FontRoboto condensed fontSize="18px" fontWeight="700">
                    PRICE:
                  </FontRoboto>
                  <FontRaleway fontSize="24px" fontWeight="700">
                    $50.00
                  </FontRaleway>
                </div>
                <ButtonLarge primary>ADD TO CART</ButtonLarge>
                <DescriptionRow>
                  <FontRoboto>
                    {data.product.description}
                  </FontRoboto>
                </DescriptionRow>
              </ProductDetailColumn>
            </Row>
          )
        }}
      </Query>
    );
  }
}

export default ProductPage;
