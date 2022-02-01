import React from "react";
import { Link } from "react-router-dom";
import {
  ActiveProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  CartButton,
} from "./Product.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import product from "../../Assets/Product2.png";
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
          <ProductImage backgroundImage={product} />
          <FontRaleway fontSize='18px' fontWeight='300' margin='0 0 5px 0'>Apollo Running Short</FontRaleway>
          <FontRaleway fontSize='18px' fontWeight='500'>$50.00</FontRaleway>
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
