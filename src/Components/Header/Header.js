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
import { FontRoboto } from "../Fonts/Fonts.style";
import MiniCart from "../MiniCart/MiniCart";
import logo from "../../Assets/Logo.svg";
import cart from "../../Assets/Cart.svg";
import { Query } from "@apollo/client/react/components";
import { LOAD_CATEGORIES, LOAD_CURRENCIES } from "../../GraphQL/Queries";
import MainContext from "../../Context/MainContext";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.hideMiniCart = this.hideMiniCart.bind(this);
  }

  state = {
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
    const { contextCurrency, updateCurrency, productsInCart } = this.context;
    return (
      <div>
        <HeaderContainer>
          <div>
            <Query query={LOAD_CATEGORIES}>
              {({ loading, data }) => {
                if (loading) return "Loading...";
                const { categories } = data;
                return categories.map((category, id) => (
                  <a href={"/category/" + category.name} key={id}>
                    <HeaderButton>{category.name}</HeaderButton>
                  </a>
                ));
              }}
            </Query>
          </div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <CurrencyStyle>
            {contextCurrency}
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
                    <Query query={LOAD_CURRENCIES}>
                      {({ loading, data }) => {
                        if (loading) return "Loading...";
                        const { currencies } = data;
                        return currencies.map((currency, id) => (
                          <button
                            key={id}
                            onClick={() => {
                              updateCurrency(currency.symbol);
                              this.setState({
                                CurrencyButtonIsPressed: false,
                              });
                            }}
                          >
                            {currency.symbol}
                            {currency.label}
                          </button>
                        ));
                      }}
                    </Query>
                  </DropdownContent>
                </DropdownContainer>
              )}
            </div>
            {!this.state.CartIconIsPressed ? (
              <CartButton onClick={this.showMiniCart}>
                <span>
                  <FontRoboto color="white" fontWeight="700" fontSize="14px">
                    {productsInCart.length}
                  </FontRoboto>
                </span>
                <img src={cart} alt="logo" />
              </CartButton>
            ) : (
              <CartButton onClick={this.hideMiniCart}>
                <img src={cart} alt="logo" />
              </CartButton>
            )}
          </CurrencyStyle>
        </HeaderContainer>
        {this.state.CartIconIsPressed && (
          <MiniCart hideMiniCart={this.hideMiniCart} />
        )}
      </div>
    );
  }
}

Header.contextType = MainContext;

export default Header;
