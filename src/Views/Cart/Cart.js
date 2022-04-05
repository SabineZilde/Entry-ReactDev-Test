import React from "react";
import CartProduct from "../../Components/CartProduct/CartProduct";
import { CartContainer, Total } from "./Cart.style";
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
    const { productsInCart, contextCurrency, total } = this.context;
    if (productsInCart.length === 0) {
      return <FontRaleway>Your cart is empty</FontRaleway>;
    } else {
      return (
        <>
          <CartProduct />
          <Total>
            <FontRaleway fontSize="26px" fontWeight="700">
              TOTAL: &nbsp;
              {contextCurrency}
              {total}
            </FontRaleway>
          </Total>
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
