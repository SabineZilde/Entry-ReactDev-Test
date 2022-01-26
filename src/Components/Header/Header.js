import React from "react";
import {
  HeaderContainer,
  HeaderButton,
  CurrencyStyle,
  CurrencyButton,
  CartButton,
  DropdownContainer,
  DropdownContent,
} from "./Header.style";
import logo from "../../Assets/Logo.svg";
import cart from "../../Assets/Cart.svg";

class Header extends React.Component {
  state = {
    currency: "$",
    currencyMenuArrow: "+",
    isActive: false,
  };

  showCurrencyMenu = () => {
    this.setState({
      isActive: true,
    });
  };

  hideCurrencyMenu = () => {
    this.setState({
      isActive: false,
    });
  };

  render() {
    return (
      <HeaderContainer>
        <div>
          <HeaderButton>WOMEN</HeaderButton>
          <HeaderButton>MEN</HeaderButton>
          <HeaderButton>KIDS</HeaderButton>
        </div>
        <img src={logo} alt="logo" />
        <CurrencyStyle>
          {this.state.currency}
          <div>
            {this.state.isActive ? (
              <CurrencyButton onClick={this.hideCurrencyMenu}>-</CurrencyButton>
            ) : (
              <CurrencyButton onClick={this.showCurrencyMenu}>+</CurrencyButton>
            )}
            {this.state.isActive && (
              <DropdownContainer>
                <DropdownContent>
                  <a href="#">$ USD</a>
                  <a href="#">€ EUR</a>
                  <a href="#">¥ JPY</a>
                </DropdownContent>
              </DropdownContainer>
            )}
          </div>
          <CartButton>
            <img src={cart} alt="logo" />
          </CartButton>
        </CurrencyStyle>
      </HeaderContainer>
    );
  }
}

export default Header;
