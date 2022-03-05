import React, { Component } from "react";

const MainContext = React.createContext();

export class MainProvider extends Component {
  state = {
    contextCurrency: "$",
    productsInCart: [],
  };

  updateCurrency = (symbol) => {
    this.setState({ contextCurrency: symbol });
  };

  updateCart = (id) => {
    const { productsInCart } = this.state;
    const check = productsInCart.every((product) => {
      return product.id !== id;
    });
    if (!check) {
      alert("This product is already in cart!");
    } else {
      this.setState({
        productsInCart: [...productsInCart, { id: id, count: 1 }],
      });
      alert("Product is added to cart.");
    }
  };

  updateProductCount = (id, add) => {
    const { productsInCart } = this.state;
    const prodIndex = productsInCart.findIndex((product) => {
      return product.id === id;
    });
    const newState = [...productsInCart];
    if (add) {
      newState[prodIndex].count += 1;
    } else {
      newState[prodIndex].count -= 1;
    }
    this.setState({
      productsInCart: newState,
    });
  };

  removeProduct = (id) => {
    if (window.confirm("This action will lead to a removal of this product from cart. Are you sure?")) {
      const { productsInCart } = this.state;
      const prodIndex = productsInCart.findIndex((product) => {
        return product.id === id;
      });
      const newState = [...productsInCart];
      newState.splice(prodIndex, 1);
      this.setState({
        productsInCart: newState,
      });
    }
  };

  chooseAttributes = (attribute) => {
    console.log(attribute);
  };

  render() {
    const { contextCurrency, productsInCart } = this.state;
    const {
      updateCurrency,
      updateCart,
      updateProductCount,
      removeProduct,
      chooseAttributes,
    } = this;
    return (
      <MainContext.Provider
        value={{
          contextCurrency,
          productsInCart,
          updateCurrency,
          updateCart,
          updateProductCount,
          removeProduct,
          chooseAttributes,
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContext;
