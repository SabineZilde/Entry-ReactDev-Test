import React from "react";
import { Link } from "react-router-dom";
import {
  ActiveProductContainer,
  ProductImage,
  ImageContainer,
  OutOfStockLayer,
} from "./Product.style";
import { FontRaleway } from "../CommonStyles/Fonts.style";
import circleIcon from "../../Assets/CircleIcon.svg";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCTS } from "../../GraphQL/Queries";
import MainContext from "../../Context/MainContext";
import { Loader } from "../CommonStyles/Loader.style";
import Price from "../CommonComponents/Price";

class Product extends React.Component {
  render() {
    const { alertIsTriggered, updateCart, showAlert } = this.context;
    return (
      <Query query={LOAD_PRODUCTS} variables={{ title: this.props.category }}>
        {({ loading, data }) => {
          if (loading) return <Loader />;
          const { category } = data;
          return category.products.map((product) => (
            <Link to={"/product/" + product.id} key={product.id}>
              <ActiveProductContainer
                onMouseEnter={this.showCart}
                onMouseLeave={this.hideCart}
              >
                <ImageContainer>
                  <ProductImage backgroundImage={product.gallery[0]} />
                  {!product.inStock &&
                    <OutOfStockLayer>OUT OF STOCK</OutOfStockLayer>
                  }
                </ImageContainer>
                <FontRaleway
                  fontSize="18px"
                  fontWeight="300"
                  margin="0 0 5px 0"
                  fontColor={!product.inStock && "#8D8F9A"}
                >
                  {product.brand} {product.name}
                </FontRaleway>
                <Price item={product} size='middle' inStock={product.inStock} />
                {product.inStock && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (product.attributes[0]) {
                        return !alertIsTriggered &&
                          showAlert('attributes', product.id)
                      } else {
                        updateCart(
                          product.id,
                          product.brand,
                          product.name,
                          product.gallery,
                          product.prices,
                          product.attributes
                        );
                        return !alertIsTriggered &&
                          showAlert('success', product.id, product.brand, product.name)
                      }
                    }}
                  >
                    <img src={circleIcon} alt="Circle Icon" />
                  </button>
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