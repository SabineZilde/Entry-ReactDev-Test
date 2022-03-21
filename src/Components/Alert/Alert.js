import React from "react";
import { Link } from "react-router-dom";
import { FontRaleway } from "../Fonts/Fonts.style";
import { Button, CloseButton } from "../Buttons/Buttons.style";
import { AlertContainer, AlertBckground, Icon, ButtonRow } from "./Alert.style";
import MainContext from "../../Context/MainContext";

class Alert extends React.Component {
  render() {
    const { alertContent, hideAlert, removeProduct } = this.context;
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
          <ButtonRow>
            <Button
              primary
              margin="0 12px 0 0"
              onClick={hideAlert}
            >
              {alertContent.primaryButton}
            </Button>
            <Link to={alertContent.secondaryLink}>
              <Button 
              onClick={() => {
                hideAlert();
                if (alertContent.secondaryButton === "YES, DELETE PRODUCT") {
                  removeProduct(alertContent.id);
                }
              }}>
                {alertContent.secondaryButton}
              </Button>
            </Link>
          </ButtonRow>
        </AlertBckground>
      </AlertContainer>
    );
  }
}

Alert.contextType = MainContext;

export default Alert;
