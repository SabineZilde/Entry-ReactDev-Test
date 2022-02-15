import React from "react";
import { Link } from "react-router-dom";
import {
  ActiveProductContainer,
  ProductImage,
  CartButton,
} from "./Product.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import circleIcon from "../../Assets/CircleIcon.svg";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCTS } from "../../GraphQL/Queries";

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
      <Query query={LOAD_PRODUCTS} variables={{ title: "tech" }}>
        {({ loading, data }) => {
          if (loading) return "Loading...";
          console.log(data);
          return data.category.products.map((product) => (
            <Link to="/product" key={product.id}>
              <ActiveProductContainer
                onMouseEnter={this.showCart}
                onMouseLeave={this.hideCart}
              >
                <ProductImage backgroundImage={product.gallery} />
                <FontRaleway fontSize='18px' fontWeight='300' margin='0 0 5px 0'>{product.brand} {product.name}</FontRaleway>
                <FontRaleway fontSize='18px' fontWeight='500'>$50.00</FontRaleway>
                {this.state.isActive && (
                  <CartButton>
                    <img src={circleIcon} alt="Circle Icon" />
                  </CartButton>
                )}
              </ActiveProductContainer>
            </Link>
          ));
        }}
      </Query>
    );
  }
}

export default Product;
