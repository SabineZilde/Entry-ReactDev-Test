import React from "react";
import { FontRaleway, FontRoboto } from "../CommonStyles/Fonts.style";
import MainContext from "../../Context/MainContext";

class Price extends React.Component {
  state = {
    fontSize: '',
    fontWeight: '500',
    fontColor: ''
  };

  componentDidMount() {
    const { size, inStock } = this.props;
    if (size === 'large') {
      this.setState({
        fontSize: '24px',
        fontWeight: '700'
      })
    } else if (size === 'middle') {
      this.setState({
        fontSize: '18px',
      });
      if (!inStock) {
        this.setState({ fontColor: '#8D8F9A' })
      };
    };
  };

  handlePriceTitle = () => {
    const { size, page } = this.props;
    if (size === 'large' && page === 'productPage') {
      return (
        <FontRoboto
          condensed
          fontSize="18px"
          fontWeight="700"
          margin="20px 0 0"
        >
          PRICE:
        </FontRoboto>
      );
    };
  };

  handlePrice = () => {
    const { contextCurrency } = this.context;
    return this.props.item.prices.map((price) => {
      if (price.currency.symbol === contextCurrency) {
        return (
          <FontRaleway
            fontWeight={this.state.fontWeight}
            fontSize={this.state.fontSize}
            fontColor={this.state.fontColor}
            key={price.amount}
          >
            {price.currency.symbol}
            {price.amount.toFixed(2)}
          </FontRaleway>
        );
      }
      return '';
    });
  };

  render() {
    return (
      <>
        {this.handlePriceTitle()}
        {this.handlePrice()}
      </>
    );
  };
};

Price.contextType = MainContext;

export default Price;
