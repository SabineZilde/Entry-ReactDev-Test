import React from "react";
import {
  ActiveProductContainer,
  Image,
  ProductName,
  ProductPrice,
} from "./Product.style";
import product from "../../Assets/Product.png";
import circleIcon from '../../Assets/CircleIcon.svg'

class Product extends React.Component {
  render() {
    return (
      <ActiveProductContainer>
        <Image>
          <img src={product} alt="product" />
        </Image>
        <ProductName>Apollo Running Short</ProductName>
        <ProductPrice>$50.00</ProductPrice>
        {/* <img src={circleIcon} alt="Circle Icon" /> */}
      </ActiveProductContainer>
      
    );
  }
}

export default Product;
