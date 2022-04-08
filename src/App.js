import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyles } from './GlobalStyles.style';
import Alert from "./Components/CommonComponents/Alert/Alert";
import Header from './Components/Header/Header';
import CategoryPage from "./Views/CategoryPage/CategoryPage";
import ProductPage from './Views/ProductPage/ProductPage';
import Cart from "./Views/Cart/Cart";
import MainContext from "./Context/MainContext";

class App extends React.Component {

  handleAlert = () => {
    if (this.context.alertIsTriggered) {
      return <Alert />;
    }; 
  };

  render() {
    return (
      <BrowserRouter>
        <GlobalStyles />
        {this.handleAlert()}
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
