import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyles } from './GlobalStyles.style';
import Header from './Components/Header/Header';
import CategoryPage from "./Views/CategoryPage/CategoryPage";
import ProductPage from './Views/ProductPage/ProductPage';
import Cart from "./Views/Cart/Cart";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path='/category/:category' component={CategoryPage} />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
