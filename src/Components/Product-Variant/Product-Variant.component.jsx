import React, { Component, Fragment } from "react";
import { CartContext } from "../Context/Cart.context";

class ProductVariant extends Component {
  static contextType = CartContext;
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  handleSetAttributeActive = () => {
    const { handleSelectedAttribute } = this.context;
    const { selected } = this.state;
    this.setState({ selected: !selected });
    return handleSelectedAttribute(this.props);
  };
  render() {
    const { handleSetAttributeActive } = this;

    const { value } = this.props.attribute;

    const firstChar = value.charAt();

    const { selected } = this.state;

    return (
      <Fragment>
        <span
          style={{
            background: `${value}`,
          }}
          onClick={handleSetAttributeActive}
          className={`${firstChar === "#" ? "color" : "size"} ${
            firstChar === "#" ? selected && "selectColor" : selected && "select"
          }`}
        >
          {`${firstChar === "#" ? "" : `${value}`}`}
        </span>
      </Fragment>
    );
  }
}

export default ProductVariant;
