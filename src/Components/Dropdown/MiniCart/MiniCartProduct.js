import React from "react";
import Price from "../../CommonComponents/Price";
import ProductName from "../../CommonComponents/ProductName";
import QuantityButtons from "../../CommonComponents/QuantityButtons";
import Close from "../../CommonComponents/Close";
import ChosenAttributes from "../../CommonComponents/ChosenAttributes/ChosenAttributes";
import { Column, Row, ProductImage } from "./MiniCart.style";

class MiniCartProduct extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <Row>
        <Column colWidth="146px">
          <ProductName product={item} page="miniCart" line="oneLiner" />
          <Price item={item} />
          <ChosenAttributes attributes={item.attributes} />
        </Column>
        <Column middle>
          <QuantityButtons item={item} page="miniCart" />
        </Column>
        <Column colWidth="105px">
          <ProductImage backgroundImage={item.gallery[0]} />
        </Column>
        <Close id={item.id} page="miniCart" />
      </Row>
    );
  };
};

export default MiniCartProduct;
