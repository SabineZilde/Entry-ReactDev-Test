import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderButton,
  CurrencyStyle,
  CurrencyButton,
  CartButton,
  DropdownContainer,
  DropdownContent,
} from "./Header.style";
import MiniCart from "../MiniCart/MiniCart";
import logo from "../../Assets/Logo.svg";
import cart from "../../Assets/Cart.svg";

class Header extends React.Component {
  state = {
    currency: "$",
    CurrencyButtonIsPressed: false,
    CartIconIsPressed: false,
  };

  showCurrencyMenu = () => {
    this.setState({
      CurrencyButtonIsPressed: true,
    });
  };

  hideCurrencyMenu = () => {
    this.setState({
      CurrencyButtonIsPressed: false,
    });
  };

  showMiniCart = () => {
    this.setState({
      CartIconIsPressed: true,
    });
  };

  hideMiniCart = () => {
    this.setState({
      CartIconIsPressed: false,
    });
  };

  render() {
    return (
      <div>
        <HeaderContainer>
          <div>
            <HeaderButton>CLOTHES</HeaderButton>
            <HeaderButton>TECH</HeaderButton>
            <HeaderButton>ALL</HeaderButton>
          </div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <CurrencyStyle>
            {this.state.currency}
            <div>
              {!this.state.CurrencyButtonIsPressed ? (
                <CurrencyButton onClick={this.showCurrencyMenu}>
                  ▲
                </CurrencyButton>
              ) : (
                <CurrencyButton onClick={this.hideCurrencyMenu}>
                  ▼
                </CurrencyButton>
              )}
              {this.state.CurrencyButtonIsPressed && (
                <DropdownContainer>
                  <DropdownContent>
                    <button>$ USD</button>
                    <button>€ EUR</button>
                    <button>¥ JPY</button>
                  </DropdownContent>
                </DropdownContainer>
              )}
            </div>
            {!this.state.CartIconIsPressed ? (
              <CartButton onClick={this.showMiniCart}>
                <img src={cart} alt="logo" />
              </CartButton>
            ) : (
              <CartButton onClick={this.hideMiniCart}>
                <img src={cart} alt="logo" />
              </CartButton>
            )}
          </CurrencyStyle>
        </HeaderContainer>
        {this.state.CartIconIsPressed && <MiniCart />}
      </div>
    );
  }
}

export default Header;
