import React from "react";
import { ThumbnailColumn, LargeImgColumn } from "./Gallery.style";
import MainContext from "../../../Context/MainContext";

class Gallery extends React.Component {
  state = {
    largeImg: null,
  };

  handleImgClick = () => {
    const { gallery } = this.props;
    return gallery.map((image, id) => (
      <button key={id} onClick={() => this.changeLargeImg(image)}>
        <img src={image} alt="Product" />
      </button>
    ));
  };

  loadLargeImg = () => {
    const { gallery } = this.props;
    return this.state.largeImg === null
      ? gallery[0]
      : this.state.largeImg;
  };

  changeLargeImg = (img) => {
    this.setState({
      largeImg: img,
    });
  };

  render() {
    return (
      <>
        <ThumbnailColumn>
          {this.handleImgClick()}
        </ThumbnailColumn>
        <LargeImgColumn backgroundImg={this.loadLargeImg()}>
        </LargeImgColumn>
      </>
    );
  };
};

Gallery.contextType = MainContext;

export default Gallery;
