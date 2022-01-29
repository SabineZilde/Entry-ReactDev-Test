import React from "react";
import product from "../../Assets/Product.png";
import product2 from "../../Assets/Product2.png";
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

class ProductPage extends React.Component {
  render() {
    return (
      <Row>
        <ThumbnailColumn>
          <img src={product} alt="" />
          <img src={product2} alt="" />
          <img src={product} alt="" />
          <img src={product2} alt="" />
        </ThumbnailColumn>
        <LargeImgColumn>
          <img src={product2} alt="" />
        </LargeImgColumn>
        <ProductDetailColumn>
          <div>
            <FontRaleway fontSize="30px" fontWeight="600">
              Apollo
            </FontRaleway>
            <FontRaleway fontSize="30px">Running Short</FontRaleway>
          </div>
          <div>
            <FontRoboto condensed fontSize="18px" fontWeight="700">
              SIZE:
            </FontRoboto>
            <AttributeButton margin="0 10px 0 0">XS</AttributeButton>
            <AttributeButton margin="0 10px 0 0">S</AttributeButton>
            <AttributeButton margin="0 10px 0 0">M</AttributeButton>
            <AttributeButton margin="0 10px 0 0">L</AttributeButton>
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
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </FontRoboto>
          </DescriptionRow>
        </ProductDetailColumn>
      </Row>
    );
  }
}

export default ProductPage;
