import React from "react";
import { Link } from "react-router-dom";
import Total from "../../CommonComponents/Total/Total.js";
import {
  MiniCartContainer,
  Column,
  Row,
  ProductImage,
} from "./MiniCart.style.js";
import { Button } from "../../CommonStyles/Buttons.style";
import MainContext from "../../../Context/MainContext";
import Price from "../../CommonComponents/Price.js";
import ProductName from "../../CommonComponents/ProductName.js";
import ChosenAttributes from '../../CommonComponents/ChosenAttributes/ChosenAttributes.js';
import QuantityButtons from "../../CommonComponents/QuantityButtons.js";
import Close from "../../CommonComponents/Close.js";

class MiniCart extends React.Component {
  componentDidMount() {
    this.context.setScrollHeight(document.documentElement.scrollHeight);
  };

  handleProductsInCart = () => {
    const { productsInCart } = this.context;
    return productsInCart.map((item) => {
      return (
        <Row key={item.id}>
          <Column colWidth="146px">
            <ProductName product={item} page='miniCart' line='oneLiner' />
            <Price item={item} />
            <ChosenAttributes attributes={item.attributes} />
          </Column>
          <Column middle>
            <QuantityButtons item={item} page='miniCart' />
          </Column>
          <Column colWidth="105px">
            <ProductImage backgroundImage={item.gallery[0]} />
          </Column>
          <Close id={item.id} page='miniCart' />
        </Row>
      );
    });
  };

  render() {
    const { productsInCart } = this.context;
    return (
      <MiniCartContainer>
        <div>
          <b>My Bag</b>, {productsInCart.length} items
        </div>
        {this.handleProductsInCart()}
        <Total for='miniCart' />
        <Link to="/cart">
          <Button margin="0 12px 0 0" onClick={this.props.toggleMiniCart}>
            VIEW BAG
          </Button>
        </Link>
        <Button primary>CHECK OUT</Button>
      </MiniCartContainer>
    );
  };
};

MiniCart.contextType = MainContext;

export default MiniCart;
