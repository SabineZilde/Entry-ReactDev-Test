import React from "react";
import {
  HeaderContainer,
  HeaderButton,
  MiniCartBg
} from "./Header.style";
import Dropdown from "../Dropdown/Dropdown";
import logo from "../../Assets/Logo.svg";
import { LOAD_CATEGORIES } from "../../GraphQL/Queries";
import MainContext from "../../Context/MainContext";
import { Loader } from "../CommonStyles/Loader.style";
import { client } from '../../';
import RightSide from './RightSide.js';

class Header extends React.Component {
  state = {
    loading: true,
    categories: [],
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

  render() {
    const { scrollHeight } = this.context;
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
          <RightSide toggleMiniCart={this.toggleMiniCart}/>
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
  };
};

Header.contextType = MainContext;

export default Header;
