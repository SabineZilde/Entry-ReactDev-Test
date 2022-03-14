import React from "react";
import {
  CartContainer,
  ProductContainer,
  ProductDescription,
  CountAndImg,
  Column,
  ProductImage,
  Close,
  Total,
  Attributes,
} from "./Cart.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import {
  AttributeButton,
  QuantityButton,
} from "../../Components/Buttons/Buttons.style";
import MainContext from "../../Context/MainContext";

class Cart extends React.Component {
  render() {
    const {
      productsInCart,
      contextCurrency,
      updateProductCount,
      removeProduct,
      total,
      getTotal,
    } = this.context;
    return (
      <CartContainer>
        <FontRaleway fontSize="32px" fontWeight="700" margin="0 0 59px 0">
          CART
        </FontRaleway>
        {productsInCart.length === 0 ? (
          <FontRaleway>Your cart is empty</FontRaleway>
        ) : (
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
                    <ProductImage backgroundImage={item.gallery} />
                    <Close
                      onClick={() => {
                        removeProduct(item.id);
                        getTotal();
                      }}
                    >
                      X
                    </Close>
                  </CountAndImg>
                </ProductContainer>
              );
            })}
          </>
        )}
        {productsInCart.length > 0 ? (
          <Total>
            <FontRaleway fontSize="26px" fontWeight="700">
              TOTAL:
              &nbsp;
              {contextCurrency}
              {total}
            </FontRaleway>
          </Total>
        ) : (
          ""
        )}
      </CartContainer>
    );
  }
}

Cart.contextType = MainContext;

export default Cart;
