import React from "react";
import {
  CartContainer,
  ProductContainer,
  ProductDescription,
  CountAndImg,
  Column,
  ProductImage,
} from "./Cart.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import {
  AttributeButton,
  QuantityButton,
} from "../../Components/Buttons/Buttons.style";
import product from "../../Assets/Product.png";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCTS } from "../../GraphQL/Queries";
import MainContext from "../../Context/MainContext";

class Cart extends React.Component {
  render() {
    const { updateCart, productsInCart } = this.context;
    return (
      <Query query={LOAD_PRODUCTS} variables={{ title: 'all' }}>
        {({ loading, data }) => {
          if (loading) return "Loading...";
          const { category } = data;
          return (
            <CartContainer>
              <FontRaleway fontSize="32px" fontWeight="700" margin="0 0 59px 0">
                CART
              </FontRaleway>
              {productsInCart.map((item) => {
                return category.products.map(product => {
                  if (item.id === product.id) {
                    return (
                      <ProductContainer>
                        <ProductDescription>
                          <FontRaleway fontSize="30px" fontWeight="600">
                            {product.brand}
                          </FontRaleway>
                          <FontRaleway fontSize="30px">{product.name}</FontRaleway>
                          <FontRaleway fontSize="24px" fontWeight="700">
                            $50.00
                          </FontRaleway>
                          <div>
                            <AttributeButton margin="0 10px 0 0">XS</AttributeButton>
                            <AttributeButton margin="0 10px 0 0">S</AttributeButton>
                            <AttributeButton margin="0 10px 0 0">M</AttributeButton>
                            <AttributeButton margin="0 10px 0 0">L</AttributeButton>
                          </div>
                        </ProductDescription>
                        <CountAndImg>
                          <Column>
                            <QuantityButton>+</QuantityButton>
                            <FontRaleway fontSize='24px' fontWeight='500'>{item.count}</FontRaleway>
                            <QuantityButton>-</QuantityButton>
                          </Column>
                          <ProductImage backgroundImage={product} />
                        </CountAndImg>
                      </ProductContainer>
                    )
                  }
                }
                )
              }
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
