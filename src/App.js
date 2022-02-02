import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path='/' element={<CategoryPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
