import React from "react";
import {
  MiniCartContainer,
  MiniCartBackground,
  Column,
  Row,
  ProductDescription,
  ProductPrice,
  ProductImage,
} from "./MiniCart.style.js";
import {
  Button,
  AttributeButton,
  QuantityButton,
} from "../Buttons/Buttons.style";
import product from "../../Assets/Product.png";

class MiniCart extends React.Component {
  state = {
    itemCount: 2,
    totalAmount: '$100.00'
  };

  render() {
    return (
      <MiniCartBackground>
        <MiniCartContainer>
          <div>
            <b>My Bag</b>, {this.state.itemCount} items
          </div>
          <Row>
            <Column colWidth="136px">
              <ProductDescription>Appollo Running Short</ProductDescription>
              <ProductPrice>$50.00</ProductPrice>
              <div>
                <AttributeButton mini margin="27px 8px 0 0">
                  XS
                </AttributeButton>
                <AttributeButton mini margin="27px 8px 0 0">
                  S
                </AttributeButton>
                <AttributeButton mini margin="27px 8px 0 0">
                  M
                </AttributeButton>
              </div>
            </Column>
            <Column middle>
              <QuantityButton mini>+</QuantityButton>
              <div>1</div>
              <QuantityButton mini>-</QuantityButton>
            </Column>
            <Column colWidth="105px">
              <ProductImage backgroundImage={product} />
            </Column>
          </Row>
          <Row>
            <Column colWidth="136px">
              <ProductDescription>Nike Air Huarache Le</ProductDescription>
              <ProductPrice>$50.00</ProductPrice>
              <div>
                <AttributeButton mini margin="27px 8px 0 0" color='pink'/>
                <AttributeButton mini margin="27px 8px 0 0" color='cyan'/>
                <AttributeButton mini margin="27px 8px 0 0" color='crimson' />
              </div>
            </Column>
            <Column middle>
              <QuantityButton mini>+</QuantityButton>
              <div>1</div>
              <QuantityButton mini>-</QuantityButton>
            </Column>
            <Column colWidth="105px">
              <ProductImage backgroundImage={product} />
            </Column>
          </Row>
          <Row total>
              <div>
                  Total
              </div>
              <div>
                  {this.state.totalAmount}
              </div>
          </Row>
          <Button margin="0 12px 0 0">VIEW BAG</Button>
          <Button primary>CHECK OUT</Button>
        </MiniCartContainer>
      </MiniCartBackground>
    );
  }
}

export default MiniCart;
