import React from "react";
import CartProduct from "../../Components/CartProduct/CartProduct";
import Total from '../../Components/Total/Total';
import { CartContainer } from "./Cart.style";
import { FontRaleway } from "../../Components/Fonts.style";
import MainContext from "../../Context/MainContext";

class Cart extends React.Component {
  componentDidMount = () => {
    const { productsInCart, contextCurrency, getTotal } = this.context;
    if (productsInCart.length > 0) {
      return getTotal(contextCurrency);
    }
  };

  handleCartContent = () => {
    const { productsInCart } = this.context;
    if (productsInCart.length === 0) {
      return <FontRaleway>Your cart is empty</FontRaleway>;
    } else {
      return (
        <>
          <CartProduct />
          <Total />
        </>
      )
    }
  };

  render() {
    return (
      <CartContainer>
        <FontRaleway fontSize="32px" fontWeight="700" margin="0 0 59px 0">
          CART
        </FontRaleway>
        {this.handleCartContent()}
      </CartContainer>
    );
  }
}

Cart.contextType = MainContext;

export default Cart;
