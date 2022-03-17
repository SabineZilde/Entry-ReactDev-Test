import React from "react";
import { Link } from "react-router-dom";
import { FontRaleway } from "../Fonts/Fonts.style";
import { Button, CloseButton } from "../Buttons/Buttons.style";
import { AlertContainer, AlertBckground, Icon } from "./Alert.style";
import MainContext from "../../Context/MainContext";

class Alert extends React.Component {
  render() {
    const { productId, alertContent, hideAlert } = this.context;
    return (
      <AlertContainer>
        <AlertBckground>
          <CloseButton onClick={hideAlert}>X</CloseButton>

          <Icon backgroundImg={alertContent.icon}></Icon>
          <FontRaleway margin="20px" center>
            {alertContent.title}
          </FontRaleway>
          <FontRaleway margin="0 20px" center>
            {alertContent.description}
          </FontRaleway>
          <div>
            <Link to={"/product/" + productId}>
              <Button primary margin="50px 12px 0 0" onClick={hideAlert}>
                {alertContent.primaryButton}
              </Button>
            </Link>
            <Button onClick={hideAlert}>{alertContent.secondaryButton}</Button>
          </div>
        </AlertBckground>
      </AlertContainer>
    );
  }
}

Alert.contextType = MainContext;

export default Alert;
