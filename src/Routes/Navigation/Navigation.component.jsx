import "./Navigation.styles.scss";

import React, { Component, Fragment } from "react";
import { Outlet, NavLink } from "react-router-dom";

import { ReactComponent as ShopLogo } from "../../assets/Group.svg";
import { ReactComponent as Cart } from "../../assets/shopping-cart.svg";
import { ReactComponent as Caret } from "../../assets/caret-down.svg";

import { CartContext } from "../../Context/Cart.context";

import Currencies from "../../Components/Currencies/Currencies.components";

import CartDropdown from "../../Components/Cart-Dropdown/Cart-Dropdown.component";

class Navigation extends Component {
  static contextType = CartContext;
  render() {
    const {
      handleIsCurrencyOpen,
      handleIsCartOpen,
      currency,
      isCurrencyOpen,
      cartCount,
    } = this.context;

    return (
      <Fragment>
        <div className="navigation">
          <div className="nav-links-container">
            <NavLink className="nav-link" to="/all">
              All
            </NavLink>
            <NavLink className="nav-link" to="/clothes">
              Clothes
            </NavLink>
            <NavLink className="nav-link" to="/tech">
              Tech
            </NavLink>
          </div>

          <ShopLogo className="logo" />

          <div className="cart-icon-container">
            <div className="currency-logo-container">
              <span className="currency-icon">{currency}</span>
              <Caret
                className={`caret-icon ${
                  isCurrencyOpen && "caret-icon-inverted"
                }`}
                onClick={handleIsCurrencyOpen}
              />
            </div>
            <Cart
              fill="black"
              className="shopping-icon"
              onClick={handleIsCartOpen}
            />
            <span className="item-count">{cartCount}</span>
          </div>
          <Currencies />
          <CartDropdown />
        </div>
        <Outlet />
      </Fragment>
    );
  }
}

export default Navigation;
