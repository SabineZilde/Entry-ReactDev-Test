import React from "react";
import { Link } from "react-router-dom";
import Total from "../../CommonComponents/Total/Total.js";
import {
  MiniCartContainer,
  Column,
  Row,
  ProductImage,
} from "./MiniCart.style.js";
import {
  Button,
  CloseButton
} from "../../CommonStyles/Buttons.style";
import MainContext from "../../../Context/MainContext";
import Price from "../../CommonComponents/Price.js";
import ProductName from "../../CommonComponents/ProductName.js";
import ChosenAttributes from '../../CommonComponents/ChosenAttributes/ChosenAttributes.js';
import QuantityButtons from "../../CommonComponents/QuantityButtons.js";

class MiniCart extends React.Component {
  componentDidMount() {
    this.context.setScrollHeight(document.documentElement.scrollHeight);
  };

  handleProductsInCart = () => {
    const { productsInCart, showAlert } = this.context;
    productsInCart.map((item) => {
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
          <CloseButton
            margin="-6px 0 0 -10px"
            zIndex='1'
            onClick={() => {
              showAlert("delete", item.id);
            }}
          >
            x
          </CloseButton>
        </Row>
      );
    })
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
