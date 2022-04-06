import React from "react";
import { FontRaleway } from "./Fonts.style";
import MainContext from "../Context/MainContext";

class Price extends React.Component {
  state = {
    fontSize: '',
    fontWeight: '500'
  }

  componentDidMount() {
    if (this.props.for === 'cart') {
      this.setState({
        fontSize: '24px',
        fontWeight: '700'
      })
    }
  };

  handlePrice = () => {
    const { contextCurrency } = this.context;
    return this.props.item.prices.map((price) => {
      if (price.currency.symbol === contextCurrency) {
        return (
          <FontRaleway
            fontWeight={this.state.fontWeight}
            fontSize={this.state.fontSize}
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
