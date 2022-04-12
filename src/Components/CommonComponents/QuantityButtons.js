import React from "react";
import { QuantityButton } from '../CommonStyles/Buttons.style';
import { FontRaleway } from '../CommonStyles/Fonts.style';
import MainContext from "../../Context/MainContext";

class QuantityButtons extends React.Component {
    state = {
        size: '24px',
        mini: false
    };

    componentDidMount() {
        this.props.page === 'miniCart' && this.setState({
            size: '16px',
            mini: true
        });
    };

    render() {
        const { item } = this.props;
        const { updateProductCount } = this.context;
        const { size, mini } = this.state;
        return (
            <>
                <QuantityButton
                    mini={mini}
                    onClick={() => updateProductCount(item.id, item.id)}
                >
                    +
                </QuantityButton>
                <FontRaleway fontSize={size} fontWeight='500'>
                    {item.count}
                </FontRaleway>
                <QuantityButton
                    mini={mini}
                    onClick={() => {
                        if (item.count <= 1) {
                            return;
                        } else {
                            updateProductCount(item.id);
                        }
                    }}
                >
                    -
                </QuantityButton>
            </>
        );
    };
};

QuantityButtons.contextType = MainContext;

export default QuantityButtons;