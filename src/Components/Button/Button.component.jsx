import "./Button.styles.scss";
import React, { Component } from "react";
const BUTTON_TYPE_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
};

const BUTTON_SIZE = {
  large: "large",
  medium: "medium",
};

class Button extends Component {
  render() {
    const { children, buttonType, buttonSize, ...otherProps } = this.props;
    return (
      <button
        className={`button-container ${BUTTON_TYPE_CLASS[buttonType]} ${BUTTON_SIZE[buttonSize]}`}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
}

export default Button;
