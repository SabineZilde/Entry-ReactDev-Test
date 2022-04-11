import React from "react";
import { FontRaleway } from "../CommonStyles/Fonts.style";

class ProductName extends React.Component {
  state = {
    size: '30px',
    weight: '600',
    nameMargin: '',
    brandMargin: '',
    fontColor: ''
  };

  componentDidMount() {
    const { page, product, line } = this.props;
    page === 'productPage' && this.setState({ nameMargin: "5px 0 20px" });
    product.inStock === false && line === 'oneLiner' && this.setState({ fontColor: '#8D8F9A' });
    page === 'categoryPage' && this.setState({
      size: '18px',
      weight: '300',
      brandMargin: "0 0 5px 0"
    });
    page === 'miniCart' && this.setState({
      size: '16px',
      weight: '300'
    });
  };

  nameInOneLine = (name) => {
    if (this.props.line === 'oneLiner') {
      return name;
    };
  };

  handleSecondLine = (name) => {
    if (this.props.line !== 'oneLiner') {
      return (
        <FontRaleway fontSize="30px" margin={this.state.nameMargin}>
          {name}
        </FontRaleway>
      )
    }
  }

  render() {
    const { product } = this.props;
    const { size, weight, fontColor, brandMargin } = this.state;
    return (
      <>
        <FontRaleway
          fontSize={size}
          fontWeight={weight}
          fontColor={fontColor}
          margin={brandMargin}
        >
          {product.brand} {this.nameInOneLine(product.name)}
        </FontRaleway>
        {this.handleSecondLine(product.name)}
      </>
    );
  }
}

export default ProductName;
