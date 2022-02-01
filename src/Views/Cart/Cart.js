import React from "react";
import {
  CartContainer,
  ProductContainer,
  ProductDescription,
  CountAndImg,
  Column,
  ProductImage,
} from "./Cart.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import {
  AttributeButton,
  QuantityButton,
} from "../../Components/Buttons/Buttons.style";
import product from "../../Assets/Product.png";

class Cart extends React.Component {
  render() {
    return (
      <CartContainer>
        <FontRaleway fontSize="32px" fontWeight="700" margin="0 0 59px 0">
          CART
        </FontRaleway>
        <ProductContainer>
          <ProductDescription>
            <FontRaleway fontSize="30px" fontWeight="600">
              Apollo
            </FontRaleway>
            <FontRaleway fontSize="30px">Running Short</FontRaleway>
            <FontRaleway fontSize="24px" fontWeight="700">
              $50.00
            </FontRaleway>
            <div>
              <AttributeButton margin="0 10px 0 0">XS</AttributeButton>
              <AttributeButton margin="0 10px 0 0">S</AttributeButton>
              <AttributeButton margin="0 10px 0 0">M</AttributeButton>
              <AttributeButton margin="0 10px 0 0">L</AttributeButton>
            </div>
          </ProductDescription>
          <CountAndImg>
            <Column>
              <QuantityButton>+</QuantityButton>
              <div>1</div>
              <QuantityButton>-</QuantityButton>
            </Column>
            <ProductImage backgroundImage={product} />
          </CountAndImg>
        </ProductContainer>
      </CartContainer>
    );
  }
}

export default Cart;
