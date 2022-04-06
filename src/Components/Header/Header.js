import React from "react";
import {
  HeaderContainer,
  HeaderButton,
  CurrencyStyle,
  CurrencyButton,
  CartButton,
  TotalQuantityIcon,
  ArrowStyle,
  MiniCartBg
} from "./Header.style";
import { FontRoboto } from "../Fonts.style";
import Dropdown from "../Dropdown/Dropdown";
import logo from "../../Assets/Logo.svg";
import cart from "../../Assets/Cart.svg";
import { Query } from "@apollo/client/react/components";
import { LOAD_CATEGORIES } from "../../GraphQL/Queries";
import MainContext from "../../Context/MainContext";
import { Loader } from "../Loader.style";

class Header extends React.Component {
  state = {
    currencyButtonIsPressed: false,
    arrow: '▲',
    cartIconIsPressed: false,
    display: 'none',
  };

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
    }
  };

  toggleMiniCart = () => {
    if (!this.state.cartIconIsPressed) {
      this.setState({
        cartIconIsPressed: true,
        display: 'block'
      });
    } else {
      this.setState({
        cartIconIsPressed: false,
        display: 'none'
      });
    }
  };

  disableCartButton = (productsInCartLength) => {
    if (productsInCartLength === 0) {
      return 'disabled';
    }
  };

  displayQuantityIcon = (productsInCartLength) => {
    if (productsInCartLength === 0) {
      return 'none';
    } else {
      return 'flex';
    }
  };

  render() {
    const { contextCurrency, getCategory, productsInCart, totalQuantity, scrollHeight } = this.context;
    return (
      <div>
        <HeaderContainer>
          <div>
            <Query query={LOAD_CATEGORIES}>
              {({ loading, data }) => {
                if (loading) return <Loader />;
                const { categories } = data;
                return categories.map((category, id) => (
                  <a
                    href={"/category/" + category.name}
                    key={id}
                    onClick={() => {
                      getCategory(category.name);
                    }}>
                    <HeaderButton>{category.name}</HeaderButton>
                  </a>
                ));
              }}
            </Query>
          </div>
          <a href="/category/all">
            <img src={logo} alt="logo" />
          </a>
          <CurrencyStyle>
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
              onClick={this.toggleMiniCart}
            >
              <TotalQuantityIcon display={this.displayQuantityIcon(productsInCart.length)}>
                <FontRoboto color="white" fontWeight="700" fontSize="14px">
                  {totalQuantity}
                </FontRoboto>
              </TotalQuantityIcon>
              <img src={cart} alt="logo" />
            </CartButton>
          </CurrencyStyle>
        </HeaderContainer>
        <MiniCartBg display={this.state.display} height={scrollHeight}>
          <Dropdown
            show={this.state.cartIconIsPressed}
            onClickOutside={this.toggleMiniCart}
            toggleMiniCart={this.toggleMiniCart}
            dropdown='MiniCart'
          />
        </MiniCartBg>
      </div>
    );
  }
}

Header.contextType = MainContext;

export default Header;
