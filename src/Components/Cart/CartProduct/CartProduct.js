import React from "react";
import {
  ProductContainer,
  ProductDescription,
  CountAndImg,
  Column,
} from "./CartProduct.style";
import Price from "../../CommonComponents/Price";
import ProductName from "../../CommonComponents/ProductName";
import ChosenAttributes from "../../CommonComponents/ChosenAttributes/ChosenAttributes";
import QuantityButtons from '../../CommonComponents/QuantityButtons';
import CartImage from "../CartImage/CartImage";
import Close from "../../CommonComponents/Close";

class Cart extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <ProductContainer>
        <ProductDescription>
          <ProductName product={item} />
          <Price item={item} size='large' />
          <ChosenAttributes attributes={item.attributes} page='cart' />
        </ProductDescription>
        <CountAndImg>
          <Column>
            <QuantityButtons item={item} />
          </Column>
          <CartImage item={item} />
          <Close id={item.id} page='cart' />
        </CountAndImg>
      </ProductContainer>
    );
  };
};

export default Cart;
