import React from "react";
import { FontRaleway } from "../../Components/Fonts.style";
import { ButtonLarge } from "../Buttons.style";
import MainContext from "../../Context/MainContext";

class AddToCart extends React.Component {
  handleButton = () => {
    const { product } = this.props;
    const { chosenAttributes, showAlert, updateCart, alertIsTriggered } =
      this.context;
    return product.inStock ? (
      <ButtonLarge
        primary
        onClick={() => {
          if (chosenAttributes.length < product.attributes.length) {
            showAlert("attributes", product.id);
          } else {
            updateCart(
              product.id,
              product.brand,
              product.name,
              product.gallery,
              product.prices,
              chosenAttributes
            );
            return (
              !alertIsTriggered &&
              showAlert("success", product.id, product.brand, product.name)
            );
          }
        }}
      >
        ADD TO CART
      </ButtonLarge>
    ) : (
      <FontRaleway fontColor="red" fontWeight="700" margin="30px 0">
        OUT OF STOCK!
      </FontRaleway>
    );
  };
  render() {
    return this.handleButton();
  }
}

AddToCart.contextType = MainContext;

export default AddToCart;
