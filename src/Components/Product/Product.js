import React from "react";
import { Link } from "react-router-dom";
import {
  ActiveProductContainer,
  ProductImage,
  ImageContainer,
  OutOfStockLayer,
} from "./Product.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import circleIcon from "../../Assets/CircleIcon.svg";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCTS } from "../../GraphQL/Queries";
import MainContext from "../../Context/MainContext";
import alert from '../../Assets/Alert.svg'

class Product extends React.Component {
  render() {
    const { contextCategory, contextCurrency, alertIsTriggered, updateCart, showAlert } = this.context;
    return (
      <Query query={LOAD_PRODUCTS} variables={{ title: contextCategory }}>
        {({ loading, data }) => {
          if (loading) return "Loading...";
          const { category } = data;
          return category.products.map((product) => (
            <Link to={"/product/" + product.id} key={product.id}>
              <ActiveProductContainer
                onMouseEnter={this.showCart}
                onMouseLeave={this.hideCart}
              >
                <ImageContainer>
                  <ProductImage backgroundImage={product.gallery[0]} />
                  {!product.inStock ? (
                    <OutOfStockLayer>OUT OF STOCK</OutOfStockLayer>
                  ) : (
                    ""
                  )}
                </ImageContainer>
                <FontRaleway
                  fontSize="18px"
                  fontWeight="300"
                  margin="0 0 5px 0"
                  fontColor={!product.inStock ? "#8D8F9A" : ""}
                >
                  {product.brand} {product.name}
                </FontRaleway>
                {product.prices.map((price) => {
                  return price.currency.symbol === contextCurrency ? (
                    <FontRaleway
                      fontSize="18px"
                      fontWeight="500"
                      fontColor={!product.inStock ? "#8D8F9A" : ""}
                      key={price.amount}
                    >
                      {price.currency.symbol}
                      {price.amount.toFixed(2)}
                    </FontRaleway>
                  ) : (
                    ""
                  );
                })}
                {product.inStock ? (
                  <button
                    onClick={(e) => {
                      if (product.attributes[0]) {
                        e.preventDefault();
                        return !alertIsTriggered ?
                          showAlert(product.id, alert,
                            'This product has attributes.',
                            'Please choose attributes before adding this item to cart!',
                            'CHOOSE ATTRIBUTES',
                            'CONTINUE BROWSING')
                          : ''
                      } else {
                        updateCart(
                          product.id,
                          product.brand,
                          product.name,
                          product.gallery,
                          product.prices,
                          product.attributes
                        );
                      }
                    }}
                  >
                    <img src={circleIcon} alt="Circle Icon" />
                  </button>
                ) : (
                  ""
                )}
              </ActiveProductContainer>
            </Link>
          ));
        }}
      </Query>
    );
  }
}

Product.contextType = MainContext;

export default Product;
