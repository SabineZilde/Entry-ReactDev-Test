import React, { Component } from "react";

const MainContext = React.createContext();

export class MainProvider extends Component {
  state = {
    contextCategory: 'all',
    contextCurrency: "$",
    productsInCart: [],
    total: 0,
  };

  getCategory = (category) => {
    this.setState({ contextCategory: category });
  };

  updateCurrency = (symbol) => {
    this.setState({ contextCurrency: symbol });
    this.getTotal();
  };

  updateCart = (id, brand, name, gallery, prices, attributes) => {
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
          {
            id: id,
            brand: brand,
            name: name,
            gallery: gallery,
            count: 1,
            prices: prices,
            attributes: attributes,
          },
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

  render() {
    const { contextCategory, contextId, contextCurrency, productsInCart, total } = this.state;
    const {
      getCategory,
      getProductId,
      updateCurrency,
      updateCart,
      updateProductCount,
      removeProduct,
      getTotal,
    } = this;
    return (
      <MainContext.Provider
        value={{
          contextCategory,
          contextId,
          contextCurrency,
          productsInCart,
          total,
          getCategory,
          getProductId,
          updateCurrency,
          updateCart,
          updateProductCount,
          removeProduct,
          getTotal,
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContext;
