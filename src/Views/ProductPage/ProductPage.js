import React from "react";
import { Row } from "./ProductPage.style";
import { LOAD_PRODUCT } from "../../GraphQL/Queries";
import { Loader } from "../../Components/CommonStyles/Loader.style";
import { client } from '../..';
import ProdPageItem from "../../Components/ProductPage/ProdPageItem/ProdPageItem";

class ProductPage extends React.Component {
  state = {
    loading: true,
    product: {}
  };

  componentDidMount = async () => {
    const response = await client.query({
      query: LOAD_PRODUCT,
      variables: {
        id: this.props.match.params.id
      }
    });
    this.setState({
      loading: response.loading,
      product: response.data.product
    });
  };

  handlePageContent = () => {
    const { product, loading } = this.state;
    if (loading) return <Loader />;
    return <ProdPageItem product={product} />
  };

  render() {
    return (
      <Row>
        {this.handlePageContent()}
      </Row>
    );
  };
};

export default ProductPage;
