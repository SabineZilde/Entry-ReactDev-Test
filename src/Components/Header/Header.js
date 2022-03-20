import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HeaderContainer,
  HeaderButton,
  CurrencyStyle,
  CurrencyButton,
  CartButton,
  ArrowStyle,
} from "./Header.style";
import { FontRoboto } from "../Fonts/Fonts.style";
import MiniCart from "../MiniCart/MiniCart";
import HandleClickOutside from "../HandleClickOutside/HandleClickOutside";
import logo from "../../Assets/Logo.svg";
import cart from "../../Assets/Cart.svg";
import { Query } from "@apollo/client/react/components";
import { LOAD_CATEGORIES } from "../../GraphQL/Queries";
import MainContext from "../../Context/MainContext";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.hideMiniCart = this.hideMiniCart.bind(this);
  }

  state = {
    currencyButtonIsPressed: false,
    cartIconIsPressed: false,
    arrow: '▲',
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
  }

  showMiniCart = () => {
    this.setState({
      cartIconIsPressed: true,
    });
  };

  hideMiniCart = () => {
    this.setState({
      cartIconIsPressed: false,
    });
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
              <HandleClickOutside
                show={this.state.currencyButtonIsPressed}
                onClickOutside={this.toggleCurrencyMenu}
                dropdown='Currency'
              />
            </div>
            <CartButton disabled={productsInCart.length === 0 && 'disabled'}
              onClick={
                !this.state.cartIconIsPressed
                  ? this.showMiniCart
                  : this.hideMiniCart
              }
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
        {this.state.cartIconIsPressed && (
          <MiniCart hideMiniCart={this.hideMiniCart} />
        )}
      </div>
    );
  }
}

Header.contextType = MainContext;

export default Header;
