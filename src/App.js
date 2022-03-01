import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyles } from './GlobalStyles.style';
import Header from './Components/Header/Header';
import CategoryPage from "./Views/CategoryPage/CategoryPage";
import ProductPage from './Views/ProductPage/ProductPage';
import Cart from "./Views/Cart/Cart";
import MainContext, { MainProvider } from "./Context/MainContext";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainProvider>
          <GlobalStyles />
          <Header />
          <Switch>
            <Route path='/category/:category' component={CategoryPage} />
            <Route path='/product/:id' component={ProductPage} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </MainProvider>
      </BrowserRouter>
    );
  }
}

export default App;
