import React from "react";
import {
  ActiveProductContainer,
  ProductImage,
} from "./Product.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import circleIcon from "../../Assets/CircleIcon.svg";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCTS } from "../../GraphQL/Queries";
import MainContext from "../../Context/MainContext";

class Product extends React.Component {
  render() {
    const { contextCurrency } = this.context;
    return (
      <Query query={LOAD_PRODUCTS} variables={{ title: this.props.category }}>
        {({ loading, data }) => {
          if (loading) return "Loading...";
          const { category } = data;
          return category.products.map((product) => (
            <a href={"/product/" + product.id} key={product.id}>
              <ActiveProductContainer
                onMouseEnter={this.showCart}
                onMouseLeave={this.hideCart}
              >
                <ProductImage backgroundImage={product.gallery[0]} />
                <FontRaleway fontSize='18px' fontWeight='300' margin='0 0 5px 0'>{product.brand} {product.name}</FontRaleway>
                {product.prices.map((price) => {
                  return price.currency.symbol === contextCurrency ? (
                    <FontRaleway fontSize='18px' fontWeight='500'>
                      {price.currency.symbol}
                      {price.amount.toFixed(2)}
                    </FontRaleway>
                  ) :
                    ''
                })}
                <button>
                  <img src={circleIcon} alt="Circle Icon" />
                </button>
              </ActiveProductContainer>
            </a>
          ));
        }}
      </Query>
    );
  }
}

Product.contextType = MainContext;

export default Product;
