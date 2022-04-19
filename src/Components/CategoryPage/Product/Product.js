import React from "react";
import { Link } from "react-router-dom";
import {
  ActiveProductContainer,
  ProductImage,
  ImageContainer,
  OutOfStockLayer,
} from "./Product.style";
import Price from "../../CommonComponents/Price";
import ProductName from "../../CommonComponents/ProductName";
import CircleCartIcon from "../CircleCartIcon";

class Product extends React.Component {
  handleOutOfStockTitle = () => {
    if (!this.props.product.inStock) {
      return <OutOfStockLayer>OUT OF STOCK</OutOfStockLayer>;
    };
  };

  render() {
    const { product } = this.props;
    return (
      <Link to={"/product/" + product.id}>
        <ActiveProductContainer>
          <ImageContainer>
            <ProductImage backgroundImage={product.gallery[0]} />
            {this.handleOutOfStockTitle()}
          </ImageContainer>
          <ProductName product={product} page='categoryPage' line='oneLiner' />
          <Price item={product} size='middle' inStock={product.inStock} />
          <CircleCartIcon product={product} />
        </ActiveProductContainer>
      </Link>
    );
  };
};

export default Product;