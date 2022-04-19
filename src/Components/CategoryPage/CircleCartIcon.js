import React from "react";
import circleIcon from "../../Assets/CircleIcon.svg";
import MainContext from "../../Context/MainContext";

class CircleCartIcon extends React.Component {
  handleCartButton = () => {
    const { alertIsTriggered, updateCart, showAlert } = this.context;
    const { product } = this.props;
    if (product.inStock) {
      return (
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
      );
    };
    return '';
  };

  render() {
    return this.handleCartButton();
  };
};

CircleCartIcon.contextType = MainContext;

export default CircleCartIcon;