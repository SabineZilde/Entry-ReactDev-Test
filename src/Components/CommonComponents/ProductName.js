import React from "react";
import { FontRaleway } from "../CommonStyles/Fonts.style";

class ProductName extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <>
        <FontRaleway fontSize="30px" fontWeight="600">
          {product.brand}
        </FontRaleway>
        <FontRaleway fontSize="30px" margin="5px 0 20px">
          {product.name}
        </FontRaleway>
      </>
    );
  }
}

export default ProductName;
