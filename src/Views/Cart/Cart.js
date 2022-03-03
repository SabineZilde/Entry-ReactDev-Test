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
import MainContext from "../../Context/MainContext";

class Cart extends React.Component {
  render() {
    const { testState, updateCart, productsInCart } = this.context;
    return (
      <CartContainer>
        <FontRaleway fontSize="32px" fontWeight="700" margin="0 0 59px 0">
          CART
        </FontRaleway>
        <ProductContainer>
          <ProductDescription>
            <FontRaleway fontSize="30px" fontWeight="600">
              {testState}
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
              <FontRaleway fontSize='24px' fontWeight='500'>1</FontRaleway>
              <QuantityButton>-</QuantityButton>
            </Column>
            <ProductImage backgroundImage={product} />
          </CountAndImg>
        </ProductContainer>
      </CartContainer>
    );
  }
}

Cart.contextType = MainContext;

export default Cart;
