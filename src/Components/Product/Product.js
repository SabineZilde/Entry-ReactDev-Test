import React from "react";
import { Link } from "react-router-dom";
import {
  ActiveProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  CartButton,
} from "./Product.style";
import product from "../../Assets/Product.png";
import circleIcon from "../../Assets/CircleIcon.svg";

class Product extends React.Component {
  state = {
    isActive: false,
  };

  showCart = () => {
    this.setState({
      isActive: true,
    });
  };

  hideCart = () => {
    this.setState({
      isActive: false,
    });
  };

  render() {
    return (
      <Link to="product">
        <ActiveProductContainer
          onMouseEnter={this.showCart}
          onMouseLeave={this.hideCart}
        >
          <ProductImage>
            <img src={product} alt="product" />
          </ProductImage>
          <ProductName>Apollo Running Short</ProductName>
          <ProductPrice>$50.00</ProductPrice>
          {this.state.isActive && (
            <CartButton>
              <img src={circleIcon} alt="Circle Icon" />
            </CartButton>
          )}
        </ActiveProductContainer>
      </Link>
    );
  }
}

export default Product;
