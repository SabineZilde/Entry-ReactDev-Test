import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyles } from './GlobalStyles.style';
import Alert from "./Components/Alert/Alert";
import Header from './Components/Header/Header';
import CategoryPage from "./Views/CategoryPage/CategoryPage";
import ProductPage from './Views/ProductPage/ProductPage';
import Cart from "./Views/Cart/Cart";
import MainContext from "./Context/MainContext";

class App extends React.Component {
  render() {
    const { alertIsTriggered } = this.context;
    return (
      <BrowserRouter>
        <GlobalStyles />
        {alertIsTriggered && <Alert />}
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

App.contextType = MainContext;

export default App;
