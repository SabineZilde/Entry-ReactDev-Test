import React from "react";
import { TotalDiv } from "./Total.style";
import { FontRaleway } from "../../Components/Fonts.style";
import MainContext from "../../Context/MainContext";

class Total extends React.Component {
    render() {
        const { contextCurrency, total } = this.context;
        return (
            <TotalDiv>
                <FontRaleway fontSize="26px" fontWeight="700">
                    TOTAL: &nbsp;
                    {contextCurrency}
                    {total}
                </FontRaleway>
            </TotalDiv>
        )
    }
};

Total.contextType = MainContext;

export default Total;