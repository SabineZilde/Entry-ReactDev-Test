import React from 'react';
import {
  CurrencyAndCart,
  CurrencyButton,
  CartButton,
  TotalQuantityIcon,
  ArrowStyle
} from './Header.style.js';
import { FontRoboto } from "../CommonStyles/Fonts.style";
import cart from "../../Assets/Cart.svg";
import Dropdown from "../Dropdown/Dropdown";
import MainContext from '../../Context/MainContext';

class RightSide extends React.Component {
  state = {
    currencyButtonIsPressed: false,
    arrow: '▲',
  }
  toggleCurrencyMenu = () => {
    if (!this.state.currencyButtonIsPressed) {
      this.setState({
        currencyButtonIsPressed: true,
        arrow: '▼',
      });
    } else {
      this.setState({
        currencyButtonIsPressed: false,
        arrow: '▲',
      });
    };
  };

  disableCartButton = (productsInCartLength) => {
    if (productsInCartLength === 0) {
      return 'disabled';
    };
  };

  displayQuantityIcon = (productsInCartLength) => {
    if (productsInCartLength === 0) {
      return 'none';
    } else {
      return 'flex';
    };
  };

  render() {
    const { contextCurrency, productsInCart, totalQuantity } = this.context;
    return (
      <CurrencyAndCart>
        <CurrencyButton onClick={this.toggleCurrencyMenu}>
          {contextCurrency}
          <ArrowStyle>{this.state.arrow}</ArrowStyle>
        </CurrencyButton>
        <div>
          <Dropdown
            show={this.state.currencyButtonIsPressed}
            onClickOutside={this.toggleCurrencyMenu}
            dropdown='Currency'
          />
        </div>
        <CartButton
          disabled={this.disableCartButton(productsInCart.length)}
          onClick={this.props.toggleMiniCart}
        >
          <TotalQuantityIcon display={this.displayQuantityIcon(productsInCart.length)}>
            <FontRoboto color="white" fontWeight="700" fontSize="14px">
              {totalQuantity}
            </FontRoboto>
          </TotalQuantityIcon>
          <img src={cart} alt="logo" />
        </CartButton>
      </CurrencyAndCart>
    )
  };
};

RightSide.contextType = MainContext;

export default RightSide;