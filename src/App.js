import React from "react";
import { GlobalStyles } from './GlobalStyles.style';
import Header from './Components/Header/Header';
import CategoryPage from "./Views/CategoryPage/CategoryPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Header />
        <CategoryPage />
      </div>
    );
  }
}

export default App;
