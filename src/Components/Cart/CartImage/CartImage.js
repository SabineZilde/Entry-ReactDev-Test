import React from 'react';
import { ImgContainer, ProductImage, ArrowButton } from './CartImage.style';

class CartImage extends React.Component {
    state = {
        imgNumber: 0,
    };

    setBgImg = (id, gallery) => {
        if (this.state.itemId === id) {
            return gallery[this.state.imgNumber];
        } else {
            return gallery[0];
        };
    };

    handleLeftArrow = (id, length) => {
        const { imgNumber } = this.state;
        this.setState({
            itemId: id,
        });
        if (length === 1) {
            this.setState({
                imgNumber: 0,
            });
        } else if (imgNumber === 0) {
            this.setState({
                imgNumber: length - 1,
            });
        } else {
            this.setState({
                imgNumber: imgNumber - 1,
            });
        };
    };

    handleRightArrow = (id, length) => {
        const { imgNumber } = this.state;
        this.setState({
            itemId: id,
        });
        if (imgNumber < length - 1) {
            this.setState({
                imgNumber: imgNumber + 1,
            });
        } else {
            this.setState({
                imgNumber: 0,
            });
        };
    };

    render() {
        const { item } = this.props;
        return (
            <ImgContainer>
                <ArrowButton
                    left
                    onClick={() =>
                        this.handleLeftArrow(item.id, item.gallery.length)
                    }
                >
                    &lt;
                </ArrowButton>
                <ProductImage
                    key={item.id + item.gallery[this.state.imgNumber]}
                    backgroundImage={this.setBgImg(item.id, item.gallery)}
                />
                <ArrowButton
                    onClick={() =>
                        this.handleRightArrow(item.id, item.gallery.length)
                    }
                >
                    &gt;
                </ArrowButton>
            </ImgContainer>
        );
    };
};

export default CartImage;