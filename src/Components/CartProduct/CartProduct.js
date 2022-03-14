
import React from "react";
import {
  ProductContainer,
  ProductDescription,
  CountAndImg,
  Column,
  ProductImage,
  Close,
  Attributes,
} from "./CartProduct.style";
import { FontRaleway } from "../Fonts/Fonts.style";
import {
  AttributeButton,
  QuantityButton,
} from "../Buttons/Buttons.style";
import MainContext from "../../Context/MainContext";

class Cart extends React.Component {
  state = {
    imgNumber: 0,
  };

  render() {
    const {
      productsInCart,
      contextCurrency,
      updateProductCount,
      removeProduct,
    } = this.context;
    return (
      <>
        {productsInCart.map((item) => {
          return (
            <ProductContainer key={item.id}>
              <ProductDescription>
                <FontRaleway fontSize="30px" fontWeight="600">
                  {item.brand}
                </FontRaleway>
                <FontRaleway fontSize="30px">{item.name}</FontRaleway>
                {item.prices.map((price) => {
                  return price.currency.symbol === contextCurrency ? (
                    <FontRaleway
                      fontSize="24px"
                      fontWeight="700"
                      key={price.amount}
                    >
                      {price.currency.symbol}
                      {(price.amount * item.count).toFixed(2)}
                    </FontRaleway>
                  ) : (
                    ""
                  );
                })}
                {item.attributes.map((atr) => {
                  return (
                    <Attributes key={atr.value}>
                      {atr.name}:&nbsp;
                      {atr.name === "Color" ? (
                        <AttributeButton
                          margin="5px 0 0 5px"
                          color={atr.value}
                        ></AttributeButton>
                      ) : (
                        <b>{atr.value}</b>
                      )}
                    </Attributes>
                  );
                })}
              </ProductDescription>
              <CountAndImg>
                <Column>
                  <QuantityButton
                    onClick={() => updateProductCount(item.id, item.id)}
                  >
                    +
                  </QuantityButton>
                  <FontRaleway fontSize="24px" fontWeight="500">
                    {item.count}
                  </FontRaleway>
                  <QuantityButton
                    onClick={() => {
                      if (item.count <= 1) {
                        return;
                      } else {
                        updateProductCount(item.id);
                      }
                    }}
                  >
                    -
                  </QuantityButton>
                </Column>
                <button
                  onClick={() => {
                    if (this.state.imgNumber === 0) {
                      this.setState({
                        imgNumber: item.gallery.length - 1,
                      });
                    } else {
                      this.setState({
                        imgNumber: this.state.imgNumber - 1,
                      });
                    }
                  }}
                >
                  +
                </button>
                <ProductImage
                  key={item.id+item.gallery[this.state.imgNumber]}
                  backgroundImage={item.gallery[this.state.imgNumber]}
                />
                <button
                  onClick={() => {
                    if (this.state.imgNumber < item.gallery.length - 1) {
                      this.setState({
                        imgNumber: this.state.imgNumber + 1,
                      });
                    } else {
                      this.setState({
                        imgNumber: 0,
                      });
                    }
                  }}
                >
                  +
                </button>
                <Close
                  onClick={() => {
                    removeProduct(item.id);
                  }}
                >
                  X
                </Close>
              </CountAndImg>
            </ProductContainer>
          );
        })}
      </>
    )
  }
}

Cart.contextType = MainContext;

export default Cart;
