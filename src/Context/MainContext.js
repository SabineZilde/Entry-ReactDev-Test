import React, { Component } from "react";

const MainContext = React.createContext();

export class MainProvider extends Component {
  state = {
    contextCategory: 'all',
    contextCurrency: "$",
    productsInCart: [],
    totalQuantity: 0,
    total: 0,
    alertIsTriggered: false,
    alertContent: {},
  };

  getCategory = (category) => {
    this.setState({ contextCategory: category });
  };

  updateCurrency = (symbol) => {
    this.setState({ contextCurrency: symbol });
  };

  updateCart = (id, brand, name, gallery, prices, attributes) => {
    const { productsInCart, totalQuantity } = this.state;
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
    this.setState({
      totalQuantity: totalQuantity + 1,
    })
  };

  updateProductCount = (id, add) => {
    const { productsInCart, contextCurrency } = this.state;
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
    this.getTotal(contextCurrency);
    this.getTotalQuantity();
  };

  removeProduct = (id) => {
    const { productsInCart, contextCurrency, getTotalQuantity } = this.state;
    const prodIndex = productsInCart.findIndex((product) => {
      return product.id === id;
    });
    const newState = [...productsInCart];
    newState.splice(prodIndex, 1);
    this.setState({
      productsInCart: newState,
    });

    if (productsInCart.length > 1) {
      let totalArr = [];
      newState.map((prod) => {
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

      let totalQuantityArr = [];
      newState.map((prod) => {
        return totalQuantityArr.push(prod.count)
      });
      const result = totalQuantityArr.reduce((prev, curr) => {
        return prev + curr;
      });
      this.setState({ totalQuantity: result });

    } else {
      this.setState({ total: 0 });
      this.setState({ totalQuantity: 0 });
    }
  };

  getTotalQuantity = () => {
    const { productsInCart } = this.state;
    let totalQuantityArr = [];
    productsInCart.map((prod) => {
      return totalQuantityArr.push(prod.count)
    });
    const result = totalQuantityArr.reduce((prev, curr) => {
      return prev + curr;
    });
    this.setState({ totalQuantity: result })
  };

  getTotal = (currency) => {
    const { productsInCart } = this.state;
    let totalArr = [];
    productsInCart.map((prod) => {
      return prod.prices.map((price) => {
        if (currency === price.currency.symbol) {
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

  showAlert = (id, icon, title, description, primaryButton, secondaryButton, secondaryLink) => {
    this.setState({
      alertIsTriggered: true,
    });
    this.setState({
      alertContent: {
        id: id,
        icon: icon,
        title: title,
        description: description,
        primaryButton: primaryButton,
        secondaryButton: secondaryButton,
        secondaryLink: secondaryLink
      }
    })
  };

  hideAlert = () => {
    this.setState({
      alertIsTriggered: false,
    });
  };

  render() {
    const { contextCategory, contextCurrency, productsInCart, totalQuantity, total, alertIsTriggered, alertContent } = this.state;
    const {
      getCategory,
      updateCurrency,
      updateCart,
      updateProductCount,
      removeProduct,
      getTotalQuantity,
      getTotal,
      showAlert,
      hideAlert,
    } = this;
    return (
      <MainContext.Provider
        value={{
          contextCategory,
          contextCurrency,
          productsInCart,
          totalQuantity,
          total,
          alertIsTriggered,
          alertContent,
          getCategory,
          updateCurrency,
          updateCart,
          updateProductCount,
          removeProduct,
          getTotalQuantity,
          getTotal,
          showAlert,
          hideAlert,
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContext;
