import React from "react";
import { NavBarButton } from "./Header.styles";

class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBarButton fontWeight='600'>WOMEN</NavBarButton>
      </div>
    );
  }
}

export default Header;
