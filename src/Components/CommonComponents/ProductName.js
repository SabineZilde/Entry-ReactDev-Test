import React from "react";
import { FontRaleway } from "../CommonStyles/Fonts.style";

class ProductName extends React.Component {
  state = {
    margin: ''
  };

  componentDidMount() {
    this.props.for === 'productPage' && this.setState({margin: "5px 0 20px"})
  }
  render() {
    const { product } = this.props;
    return (
      <>
        <FontRaleway fontSize="30px" fontWeight="600">
          {product.brand}
        </FontRaleway>
        <FontRaleway fontSize="30px" margin={this.state.margin}>
          {product.name}
        </FontRaleway>
      </>
    );
  }
}

export default ProductName;
