import React, { Component, Fragment } from "react";
import "./Currencies.styles.scss";
import { CartContext } from "../../Context/Cart.context";
import Currency from "../Currency/Currency.components";
import withCurrency from "../../HigherOrder/withCurrency.component";

class Currencies extends Component {
  static contextType = CartContext;
  render() {
    const { currencies } = this.props;
    const { isCurrencyOpen } = this.context;

    return (
      <Fragment>
        {isCurrencyOpen && (
          <ul className="currency-container">
            {currencies.map((currency) => (
              <Currency key={currency.label} currency={currency} />
            ))}
          </ul>
        )}
      </Fragment>
    );
  }
}

export default withCurrency(Currencies);
