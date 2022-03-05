import React, { Component } from "react";

const MainContext = React.createContext();

export class MainProvider extends Component {
  state = {
    contextCurrency: "$",
    productsInCart: [],
    total: [],
  };

  updateCurrency = (symbol) => {
    this.setState({ contextCurrency: symbol });
  };

  updateCart = (id, prices) => {
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
    if (
      window.confirm(
        "This action will lead to a removal of this product from cart. Are you sure?"
      )
    ) {
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

  getTotal = () => {
    const { contextCurrency, productsInCart, total } = this.state;
    productsInCart.map((prod) => {
      prod.prices.map((price) => {
        if (contextCurrency === price.currency.symbol) {
          const totalForProd =  (price.amount * prod.count).toFixed(2);
          // const res = price.reduce((prev, i) => {
          //   console.log(prev)
          // })
          this.setState({ total: totalForProd });
        }
      });
    });
    // const res = productsInCart.reduce((prev, prod) => {
    //   return prev + (prod.price * prod.count)
    // },0);
    // this.setState({total: res})
  };

  chooseAttributes = (attribute) => {
    console.log(attribute);
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
