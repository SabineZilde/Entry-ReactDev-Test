import React, { Component } from "react";
import alertIcon from '../Assets/Alert.svg';
import successIcon from '../Assets/Success.svg';

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
    scrollHeight: ''
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
    const { productsInCart, contextCurrency } = this.state;
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

  showAlert = (alertType, id, brand, name) => {
    this.setState({
      alertIsTriggered: true,
    });
    if (alertType === 'success') {
      this.setState({
        alertContent: {
          id: id,
          icon: successIcon,
          title: 'Success!',
          description: `The ${brand} ${name} is successfully added to your cart.`,
          primaryButton: 'CONTINUE BROWSING',
          secondaryButton: 'VIEW BAG',
          secondaryLink: '/cart'
        }
      })
    }
    if (alertType === 'attributes') {
      this.setState({
        alertContent: {
          id: id,
          icon: alertIcon,
          title: 'This product has attributes.',
          description: 'Please choose attributes before adding this item to cart!',
          primaryButton: '',
          secondaryButton: 'CHOOSE ATTRIBUTES',
          secondaryLink: `/product/${id}`
        }
      })
    }
    if (alertType === 'delete') {
      this.setState({
        alertContent: {
          id: id,
          icon: alertIcon,
          title: "Are you sure?",
          description: "This action will remove the product from your cart.",
          primaryButton: "RETURN TO CART",
          secondaryButton: "YES, DELETE PRODUCT",
          secondaryLink: '/cart'
        }
      })
    }
    // this.setState({
    //   alertContent: {
    //     id: id,
    //     icon: icon,
    //     title: title,
    //     description: description,
    //     primaryButton: primaryButton,
    //     secondaryButton: secondaryButton,
    //     secondaryLink: secondaryLink
    //   }
    // })
  };

  hideAlert = () => {
    this.setState({
      alertIsTriggered: false,
    });
  };


  setScrollHeight = (height) => {
    this.setState({ scrollHeight: `${height}px` })
  }

  render() {
    const { contextCategory, contextCurrency, productsInCart, totalQuantity, total, alertIsTriggered, alertContent, scrollHeight } = this.state;
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
      setScrollHeight,
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
          scrollHeight,
          getCategory,
          updateCurrency,
          updateCart,
          updateProductCount,
          removeProduct,
          getTotalQuantity,
          getTotal,
          showAlert,
          hideAlert,
          setScrollHeight
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContext;
