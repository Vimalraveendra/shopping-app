import React, { Component, Fragment } from "react";
import { CartContext } from "../../Context/Cart.context";

class Currency extends Component {
  static contextType = CartContext;
  render() {
    const {
      currency: { label, symbol },
    } = this.props;

    const { handleCurrencySymb } = this.context;

    return (
      <Fragment>
        <li className="currency-list" onClick={handleCurrencySymb}>
          <span className="symbol">{symbol}</span>
          {label}
        </li>
      </Fragment>
    );
  }
}

export default Currency;
