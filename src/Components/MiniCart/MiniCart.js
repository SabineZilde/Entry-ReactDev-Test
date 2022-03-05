import React from "react";
import { Link } from "react-router-dom";
import {
  MiniCartContainer,
  MiniCartBackground,
  Column,
  Row,
  ProductImage,
} from "./MiniCart.style.js";
import {
  Button,
  AttributeButton,
  QuantityButton,
} from "../Buttons/Buttons.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCTS } from "../../GraphQL/Queries";
import MainContext from "../../Context/MainContext";

class MiniCart extends React.Component {
  state = {
    totalAmount: 0,
  };

  // calcTotal = (amount) => {
  //   console.log(amount);
  // };

  componentDidMount = () => {
    this.context.getTotal()
  }

  render() {
    const {
      productsInCart,
      contextCurrency,
      updateProductCount,
      removeProduct,
      total
    } = this.context;
    return (
      <Query query={LOAD_PRODUCTS} variables={{ title: "all" }}>
        {({ loading, data }) => {
          if (loading) return "Loading...";
          const { category } = data;
          return (
            <MiniCartBackground>
              <MiniCartContainer>
                <div>
                  <b>My Bag</b>, {productsInCart.length} items
                </div>
                {productsInCart.map((item) => {
                  return category.products.map((product) => {
                    if (item.id === product.id) {
                      return (
                        <Row key={product.id}>
                          <Column colWidth="136px">
                            <FontRaleway fontWeight="300">
                              {product.brand}
                              {product.name}
                            </FontRaleway>
                            {product.prices.map((price) => {
                              if (price.currency.symbol === contextCurrency) {
                                // console.log((price.amount.toFixed(2) * item.count).toFixed(2))
                                return (
                                  <FontRaleway
                                    fontWeight="500"
                                    key={price.amount}
                                  >
                                    {price.currency.symbol}
                                    {(
                                      price.amount.toFixed(2) * item.count
                                    ).toFixed(2)}
                                  </FontRaleway>
                                );
                              }
                              return "";
                            })}
                            <div>
                              <AttributeButton
                                mini
                                margin="27px 8px 0 0"
                                color="pink"
                              />
                              <AttributeButton
                                mini
                                margin="27px 8px 0 0"
                                color="cyan"
                              />
                              <AttributeButton
                                mini
                                margin="27px 8px 0 0"
                                color="crimson"
                              />
                            </div>
                          </Column>
                          <Column middle>
                            <QuantityButton
                              mini
                              onClick={() =>
                                updateProductCount(product.id, product.id)
                              }
                            >
                              +
                            </QuantityButton>
                            <FontRaleway fontWeight="500">
                              {item.count}
                            </FontRaleway>
                            <QuantityButton
                              mini
                              onClick={() => {
                                if (item.count === 1) {
                                  removeProduct(product.id);
                                } else {
                                  updateProductCount(product.id);
                                }
                              }}
                            >
                              -
                            </QuantityButton>
                          </Column>
                          <Column colWidth="105px">
                            <ProductImage
                              backgroundImage={product.gallery[0]}
                            />
                          </Column>
                        </Row>
                      );
                    }
                    return "";
                  });
                })}
                <Row total>
                  <div>Total</div>
                  <div>
                    {contextCurrency}
                    {total}
                  </div>
                </Row>
                <Link to="/cart">
                  <Button margin="0 12px 0 0" onClick={this.props.hideMiniCart}>
                    VIEW BAG
                  </Button>
                </Link>
                <Button primary>CHECK OUT</Button>
              </MiniCartContainer>
            </MiniCartBackground>
          );
        }}
      </Query>
    );
  }
}

MiniCart.contextType = MainContext;

export default MiniCart;
