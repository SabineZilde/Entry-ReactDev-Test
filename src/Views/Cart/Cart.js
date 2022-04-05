import React from "react";
import CartProduct from "../../Components/CartProduct/CartProduct";
import { CartContainer, Total } from "./Cart.style";
import { FontRaleway } from "../../Components/Fonts.style";
import MainContext from "../../Context/MainContext";

class Cart extends React.Component {
  componentDidMount = () => {
    if (this.context.productsInCart.length > 0) {
      this.context.getTotal(this.context.contextCurrency);
    }
  };

  render() {
    const { productsInCart, contextCurrency, total } = this.context;
    return (
      <CartContainer>
        <FontRaleway fontSize="32px" fontWeight="700" margin="0 0 59px 0">
          CART
        </FontRaleway>
        {productsInCart.length === 0 ? (
          <FontRaleway>Your cart is empty</FontRaleway>
        ) : (
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
        )}
      </CartContainer>
    );
  }
}

Cart.contextType = MainContext;

export default Cart;
