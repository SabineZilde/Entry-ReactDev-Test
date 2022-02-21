import React from "react";
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
      <Query query={LOAD_PRODUCTS} variables={{ title: this.props.category }}>
        {({ loading, data }) => {
          if (loading) return "Loading...";
          return data.category.products.map((product) => (
            <a href={"/product/" + product.id} key={product.id}>
              <ActiveProductContainer
                onMouseEnter={this.showCart}
                onMouseLeave={this.hideCart}
              >
                <ProductImage backgroundImage={product.gallery[0]} />
                <FontRaleway fontSize='18px' fontWeight='300' margin='0 0 5px 0'>{product.brand} {product.name}</FontRaleway>
                <FontRaleway fontSize='18px' fontWeight='500'>$50.00</FontRaleway>
                {this.state.isActive && (
                  <CartButton>
                    <img src={circleIcon} alt="Circle Icon" />
                  </CartButton>
                )}
              </ActiveProductContainer>
            </a>
          ));
        }}
      </Query>
    );
  }
}

export default Product;
