import React, { Component } from "react";

const MainContext = React.createContext();

export class MainProvider extends Component {
  state = {
    contextCurrency: "$",
    productsInCart: [],
    total: 0,
  };

  updateCurrency = (symbol) => {
    this.setState({ contextCurrency: symbol });
    this.getTotal();
  };

  updateCart = (id, prices, attributes) => {
    console.log(attributes)
    const { productsInCart } = this.state;
    const check = productsInCart.every((product) => {
      return product.id !== id;
    });
    if (!check) {
      alert("This product is already in cart!");
    } else {
      this.setState({
        productsInCart: [
          ...productsInCart,
          { id: id, count: 1, prices: prices },
        ],
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

    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Are you sure?")) {
      const { productsInCart } = this.state;
      const prodIndex = productsInCart.findIndex((product) => {
        return product.id === id;
      });
      const newState = [...productsInCart];
      newState.splice(prodIndex, 1);
      this.setState({
        productsInCart: newState,
      });
    console.log(productsInCart)
    this.getTotal();
    }
  };

  getTotal = () => {
    const { contextCurrency, productsInCart } = this.state;
    let totalArr = [];
    productsInCart.map((prod) => {
      return prod.prices.map((price) => {
        if (contextCurrency === price.currency.symbol) {
          totalArr.push(price.amount * prod.count);
        }
        return "";
      });
    });
    const res = totalArr.reduce((prev, curr) => {
      return prev + curr;
    });
    this.setState({ total: res.toFixed(2) });
  };

  chooseAttributes = (id, name, value) => {
    console.log(name, value, id);
  };

  render() {
    const { contextCurrency, productsInCart, total } = this.state;
    const {
      updateCurrency,
      updateCart,
      updateProductCount,
      removeProduct,
      chooseAttributes,
      getTotal,
    } = this;
    return (
      <MainContext.Provider
        value={{
          contextCurrency,
          productsInCart,
          total,
          updateCurrency,
          updateCart,
          updateProductCount,
          removeProduct,
          chooseAttributes,
          getTotal,
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContext;
