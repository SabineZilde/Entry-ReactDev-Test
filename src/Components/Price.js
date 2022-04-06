import React from "react";
import { FontRaleway } from "./Fonts.style";
import MainContext from "../Context/MainContext";

class Price extends React.Component {
  state = {
    fontSize: '',
    fontWeight: '500',
    fontColor: ''
  }

  componentDidMount() {
    if (this.props.size === 'large') {
      this.setState({
        fontSize: '24px',
        fontWeight: '700'
      })
    } else if (this.props.size === 'middle') {
      this.setState({
        fontSize: '18px',
      });
      if (!this.props.inStock) {
        this.setState({ fontColor: '#8D8F9A' })
      };
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
    })
  };

  render() {
    return this.handlePrice();
  }
}

Price.contextType = MainContext;

export default Price;
