import React, { Component } from "react";

const MainContext = React.createContext();

export class MainProvider extends Component {
  state = {
    contextCurrency: "$",
    productsInCart: [
      {
        id: "jacket-canada-goosee",
        count: 1,
      },
    ],
  };

  updateCurrency = (symbol) => {
    this.setState({ contextCurrency: symbol });
  };

  updateCart = (id, count) => {
    const { productsInCart } = this.state;
    this.setState({productsInCart: [...productsInCart, {id: id, count: count}]});
  };

  render() {
    const { testState, contextCurrency, productsInCart } = this.state;
    const { updateCurrency, updateCart } = this;
    return (
      <MainContext.Provider
        value={{
          testState,
          contextCurrency,
          productsInCart,
          updateCurrency,
          updateCart,
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContext;
