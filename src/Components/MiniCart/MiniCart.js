import React from "react";
import { Link } from "react-router-dom";
import {
  MiniCartContainer,
  MiniCartBackground,
  Column,
  Row,
  ProductImage,
} from "./MiniCart.style.js";
import {
  Button,
  AttributeButton,
  QuantityButton,
} from "../Buttons/Buttons.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import product from "../../Assets/Product.png";

class MiniCart extends React.Component {
  state = {
    itemCount: 2,
    totalAmount: "$100.00",
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
            <FontRaleway fontWeight='300'>Nike Air Huarache Le</FontRaleway>
              <FontRaleway fontWeight='500'>$50.00</FontRaleway>
              <div>
                <AttributeButton mini margin="27px 8px 0 0" color="pink" />
                <AttributeButton mini margin="27px 8px 0 0" color="cyan" />
                <AttributeButton mini margin="27px 8px 0 0" color="crimson" />
              </div>
            </Column>
            <Column middle>
              <QuantityButton mini>+</QuantityButton>
              <FontRaleway fontWeight='500'>1</FontRaleway>
              <QuantityButton mini>-</QuantityButton>
            </Column>
            <Column colWidth="105px">
              <ProductImage backgroundImage={product} />
            </Column>
          </Row>
          <Row total>
            <div>Total</div>
            <div>{this.state.totalAmount}</div>
          </Row>
          <Link to="/cart">
            <Button margin="0 12px 0 0" onClick={this.props.hideMiniCart}>VIEW BAG</Button>
          </Link>
          <Button primary>CHECK OUT</Button>
        </MiniCartContainer>
      </MiniCartBackground>
    );
  }
}

export default MiniCart;
