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
  Attributes
} from "./Cart.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import {
  AttributeButton,
  QuantityButton,
} from "../../Components/Buttons/Buttons.style";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCTS } from "../../GraphQL/Queries";
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
      <Query query={LOAD_PRODUCTS} variables={{ title: "all" }}>
        {({ loading, data }) => {
          if (loading) return "Loading...";
          const { category } = data;
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
                    return category.products.map((product) => {
                      if (item.id === product.id) {
                        return (
                          <ProductContainer key={product.id}>
                            <ProductDescription>
                              <FontRaleway fontSize="30px" fontWeight="600">
                                {product.brand}
                              </FontRaleway>
                              <FontRaleway fontSize="30px">
                                {product.name}
                              </FontRaleway>
                              {product.prices.map((price) => {
                                return price.currency.symbol ===
                                  contextCurrency ? (
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
                              {item.attributes.map((atr) => (
                                <div>
                                  {atr.name}:
                                  <AttributeButton margin="0 10px 0 0">
                                    {atr.value}
                                  </AttributeButton>
                                </div>
                              ))}
                            </ProductDescription>
                            <CountAndImg>
                              <Column>
                                <QuantityButton
                                  onClick={() =>
                                    updateProductCount(product.id, product.id)
                                  }
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
                                      updateProductCount(product.id);
                                    }
                                  }}
                                >
                                  -
                                </QuantityButton>
                              </Column>
                              <ProductImage
                                backgroundImage={product.gallery[0]}
                              />
                              <Close
                                onClick={() => {
                                  removeProduct(product.id);
                                  getTotal();
                                }}
                              >
                                X
                              </Close>
                            </CountAndImg>
                          </ProductContainer>
                        );
                      }
                      return "";
                    });
                  })}
                </>
              )}
              {productsInCart.length > 0 ? (
                <Total>
                  <FontRaleway fontSize="26px" fontWeight="700">
                    TOTAL:
                    {contextCurrency}
                    {total}
                  </FontRaleway>
                </Total>
              ) : (
                ""
              )}
            </CartContainer>
          );
        }}
      </Query>
    );
  }
}

Cart.contextType = MainContext;

export default Cart;
