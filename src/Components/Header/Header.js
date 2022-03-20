import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HeaderContainer,
  HeaderButton,
  CurrencyStyle,
  CurrencyButton,
  CartButton,
  ArrowStyle,
  MiniCartBg
} from "./Header.style";
import { FontRoboto } from "../Fonts/Fonts.style";
import Dropdown from "../Dropdown/Dropdown";
import logo from "../../Assets/Logo.svg";
import cart from "../../Assets/Cart.svg";
import { Query } from "@apollo/client/react/components";
import { LOAD_CATEGORIES } from "../../GraphQL/Queries";
import MainContext from "../../Context/MainContext";

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

  render() {
    const { contextCurrency, getCategory, productsInCart } = this.context;
    return (
      <div>
        <HeaderContainer>
          <div>
            <Query query={LOAD_CATEGORIES}>
              {({ loading, data }) => {
                if (loading) return "Loading...";
                const { categories } = data;
                return categories.map((category, id) => (
                  <NavLink to={"/category/" + category.name} key={id} onClick={() => getCategory(category.name)}>
                    <HeaderButton>{category.name}</HeaderButton>
                  </NavLink>
                ));
              }}
            </Query>
          </div>
          <Link to="/category/all">
            <img src={logo} alt="logo" />
          </Link>
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
            <CartButton disabled={productsInCart.length === 0 && 'disabled'}
              onClick={this.toggleMiniCart}
            >
              <span style={productsInCart.length === 0 ? { display: 'none' } : { display: 'flex' }}>
                <FontRoboto color="white" fontWeight="700" fontSize="14px">
                  {productsInCart.length}
                </FontRoboto>
              </span>
              <img src={cart} alt="logo" />
            </CartButton>
          </CurrencyStyle>
        </HeaderContainer>
        <MiniCartBg display={this.state.display}>
          <Dropdown
            show={this.state.cartIconIsPressed}
            onClickOutside={this.toggleMiniCart}
            dropdown='MiniCart'
          />
        </MiniCartBg>
      </div>
    );
  }
}

Header.contextType = MainContext;

export default Header;
