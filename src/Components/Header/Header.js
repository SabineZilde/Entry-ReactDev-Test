import React from "react";
import {
  HeaderContainer,
  HeaderButton,
  CurrencyAndCart,
  CurrencyButton,
  CartButton,
  TotalQuantityIcon,
  ArrowStyle,
  MiniCartBg
} from "./Header.style";
import { FontRoboto } from "../CommonStyles/Fonts.style";
import Dropdown from "../Dropdown/Dropdown";
import logo from "../../Assets/Logo.svg";
import cart from "../../Assets/Cart.svg";
import { LOAD_CATEGORIES } from "../../GraphQL/Queries";
import MainContext from "../../Context/MainContext";
import { Loader } from "../CommonStyles/Loader.style";
import { client } from '../../';

class Header extends React.Component {
  state = {
    loading: true,
    categories: [],
    currencyButtonIsPressed: false,
    arrow: '▲',
    cartIconIsPressed: false,
    display: 'none',
  };

  componentDidMount = async () => {
    const response = await client.query({
      query: LOAD_CATEGORIES,
    });
    this.setState({
      loading: response.loading,
      categories: response.data.categories
    });
  };

  handleCategories = () => {
    const { categories } = this.state;
    const { getCategory } = this.context;
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
    };
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
    const { contextCurrency, productsInCart, totalQuantity, scrollHeight } = this.context;
    if (this.state.loading) return <Loader />;
    return (
      <div>
        <HeaderContainer>
          <div>
            {this.handleCategories()}
          </div>
          <a href="/category/all">
            <img src={logo} alt="logo" />
          </a>
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
              onClick={this.toggleMiniCart}
            >
              <TotalQuantityIcon display={this.displayQuantityIcon(productsInCart.length)}>
                <FontRoboto color="white" fontWeight="700" fontSize="14px">
                  {totalQuantity}
                </FontRoboto>
              </TotalQuantityIcon>
              <img src={cart} alt="logo" />
            </CartButton>
          </CurrencyAndCart>
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
