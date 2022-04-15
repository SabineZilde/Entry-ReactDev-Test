import React from "react";
import { Link } from "react-router-dom";
import { FontRaleway } from "../../CommonStyles/Fonts.style";
import { Button } from "../../CommonStyles/Buttons.style";
import { AlertContainer, AlertBckground, Icon, ButtonRow } from "./Alert.style";
import MainContext from "../../../Context/MainContext";
import Close from '../../CommonComponents/Close.js';

class Alert extends React.Component {
  handleRemoveProduct = (button, id) => {
    if (button === "YES, DELETE PRODUCT") {
      this.context.removeProduct(id);
    };
  }

  togglePrimaryButton = (button) => {
    const { hideAlert, alertContent } = this.context;
    if (button !== '') {
      return (
        <Button
          primary
          margin="0 12px 0 0"
          onClick={() => {
            hideAlert();
            window.location.reload();
          }}
        >
          {alertContent.primaryButton}
        </Button>
      )
    }
  };

  handleSecondaryLink = (link) => {
    if (link !== '') {
      return link;
    }
  }

  render() {
    const { alertContent, hideAlert } = this.context;
    return (
      <AlertContainer>
        <AlertBckground>
          <Close page='alert' />
          <Icon backgroundImg={alertContent.icon}></Icon>
          <FontRaleway margin="20px" center>
            {alertContent.title}
          </FontRaleway>
          <FontRaleway margin="0 20px" center>
            {alertContent.description}
          </FontRaleway>
          <ButtonRow>
            {this.togglePrimaryButton(alertContent.primaryButton)}
            <Link to={() => this.handleSecondaryLink(alertContent.secondaryLink)}>
              <Button
                onClick={() => {
                  hideAlert();
                  this.handleRemoveProduct(alertContent.secondaryButton, alertContent.id)
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
