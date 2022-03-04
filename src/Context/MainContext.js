import React, { Component } from "react";

const MainContext = React.createContext();

export class MainProvider extends Component {
  state = {
    contextCurrency: "$",
    productsInCart: []
  };

  updateCurrency = (symbol) => {
    this.setState({ contextCurrency: symbol });
  };

  updateCart = (id) => {
    const { productsInCart } = this.state;
    this.setState({
      productsInCart: [...productsInCart, { id: id, count: 1 }],
    });
  };

  updateProductCount = (prodID) => {
    const { productsInCart } = this.state;

    const prodIndex = productsInCart.findIndex((product) => {
      return product.id === prodID;
    });

    const newState = [...productsInCart];
    newState[prodIndex].count += 1;
    this.setState({
      productsInCart: newState,
    });
  };

  render() {
    const { contextCurrency, productsInCart } = this.state;
    const { updateCurrency, updateCart, updateProductCount } = this;
    return (
      <MainContext.Provider
        value={{
          contextCurrency,
          productsInCart,
          updateCurrency,
          updateCart,
          updateProductCount,
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContext;
