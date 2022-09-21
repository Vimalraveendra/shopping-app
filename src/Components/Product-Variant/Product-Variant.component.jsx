import React, { Component, Fragment } from "react";
import { CartContext } from "../Context/Cart.context";

class ProductVariant extends Component {
  static contextType = CartContext;
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selected: false,
  //   };
  // }

  handleSetAttributeActive = () => {
    const { handleSelectedAttribute } = this.context;
    // this.setState({selected:true})
    return handleSelectedAttribute(this.props);
  };
  render() {
    const { active } = this.context;

    const { handleSetAttributeActive } = this;

    const { attribute } = this.props;

    const { value } = this.props.attribute;

    const firstChar = value.charAt();
    // const { selected } = this.state;
    // console.log("selected", selected);
    // <span
    //         onClick={handleSetAttributeActive}
    //         style={{
    //           background: `${value}`,
    //         }}
    //         className={`color ${active === attribute && "selectColor"} `}
    //       ></span>
    //     ) : (
    //       <span
    //         onClick={handleSetAttributeActive}
    //         className={`size ${active === attribute && "select"}`}
    //       >
    //         {value}
    //       </span>

    return (
      <Fragment>
        <span
          style={{
            background: `${value}`,
          }}
          onClick={handleSetAttributeActive}
          className={`${firstChar === "#" ? "color" : "size"} ${
            firstChar === "#"
              ? active === attribute && "selectColor"
              : active === attribute && "select"
          } `}
        >
          {`${firstChar === "#" ? "" : `${value}`}`}
        </span>
      </Fragment>
    );
  }
}

export default ProductVariant;
