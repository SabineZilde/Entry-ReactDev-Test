import React from "react";
import { Link } from "react-router-dom";
import {
  ActiveProductContainer,
  ProductImage,
  ImageContainer,
  OutOfStockLayer,
} from "./Product.style";
import circleIcon from "../../../Assets/CircleIcon.svg";
import MainContext from "../../../Context/MainContext";
import Price from "../../CommonComponents/Price";
import ProductName from "../../CommonComponents/ProductName";

class Product extends React.Component {
  handleOutOfStockTitle = () => {
    if (!this.props.product.inStock) {
      return <OutOfStockLayer>OUT OF STOCK</OutOfStockLayer>;
    };
  };

  render() {
    const { product } = this.props;
    const { alertIsTriggered, updateCart, showAlert } = this.context;
      return (
        <Link to={"/product/" + product.id}>
          <ActiveProductContainer
            onMouseEnter={this.showCart}
            onMouseLeave={this.hideCart}
          >
            <ImageContainer>
              <ProductImage backgroundImage={product.gallery[0]} />
              {this.handleOutOfStockTitle()}
            </ImageContainer>
            <ProductName product={product} page='categoryPage' line='oneLiner' />
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
      );
  };
};

Product.contextType = MainContext;

export default Product;