import React from "react";
import { ProductDetailColumn, DescriptionRow } from './ProdPageItem.style';
import { FontRoboto } from "../../CommonStyles/Fonts.style";
import Gallery from "../Gallery/Gallery";
import ProductName from "../../CommonComponents/ProductName";
import Attributes from "../Attributes/Attributes";
import Price from "../../CommonComponents/Price";
import AddToCart from "../AddToCart";
import parse from "html-react-parser";

class ProdPageItem extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <>
        <Gallery gallery={product.gallery} />
        <ProductDetailColumn>
          <div>
            <ProductName product={product} page='productPage' />
          </div>
          <div>
            <Attributes product={product} />
          </div>
          <div>
            <Price item={product} size='large' page='productPage' />
          </div>
          <AddToCart product={product} />
          <DescriptionRow>
            <FontRoboto>{parse(product.description)}</FontRoboto>
          </DescriptionRow>
        </ProductDetailColumn>
      </>
    );
  };
};

export default ProdPageItem;