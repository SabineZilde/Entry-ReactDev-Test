import React from "react";
import { Link } from "react-router-dom";
import Total from "../../CommonComponents/Total/Total.js";
import {  MiniCartContainer,} from "./MiniCart.style.js";
import { Button } from "../../CommonStyles/Buttons.style";
import MainContext from "../../../Context/MainContext";
import MiniCartProduct from "./MiniCartProduct.js";

class MiniCart extends React.Component {
  componentDidMount() {
    this.context.setScrollHeight(document.documentElement.scrollHeight);
  };

  handleProductsInCart = () => {
    const { productsInCart } = this.context;
    return productsInCart.map((item) => {
      return <MiniCartProduct item={item} key={item.id} />
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
