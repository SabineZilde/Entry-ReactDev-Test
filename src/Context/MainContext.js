import React, { Component } from "react";

const MainContext = React.createContext();

export class MainProvider extends Component {
  state = {
    testState: "testState preview",
    contextCurrency: "$",
    productsInCart: [
      {
        id: "",
        title: "",
        price: 0,
        count: 1,
      },
    ],
  };

  updateCurrency = (symbol) => {
    this.setState({ contextCurrency: symbol });
  };

  updateCart = () => {
    this.setState();
  };

  render() {
    const { testState, contextCurrency, productsInCart } = this.state;
    const { updateCart, updateCurrency } = this;
    return (
      <MainContext.Provider
        value={{
          testState,
          contextCurrency,
          productsInCart,
          updateCart,
          updateCurrency,
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContext;
