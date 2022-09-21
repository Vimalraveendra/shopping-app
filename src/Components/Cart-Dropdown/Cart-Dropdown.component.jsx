import "./Cart-Dropdown.styles.scss";

import React, { Component, Fragment } from "react";
import { CartContext } from "../Context/Cart.context";
import Button from "../Button/Button.component";
import CartItem from "../Cart-Item/Cart-item.component";
import { Link } from "react-router-dom";

class CartDropdown extends Component {
  static contextType = CartContext;

  render() {
    const { isCartOpen, cartItems, cartCount, total, handleIsCartOpen } =
      this.context;

    return (
      <Fragment>
        {isCartOpen && (
          <div className="cart-dropdown-container">
            <div className="title-bag">
              My Bag,<span> {cartCount} items</span>
            </div>
            <div className="cart-items">
              {cartItems.length ? (
                cartItems.map((cartItem, idx) => {
                  return <CartItem key={idx} cartItem={cartItem} />;
                })
              ) : (
                <span className="empty-message">Your cart is empty</span>
              )}
            </div>
            <div className="total-container">
              <span className="total">Total</span>
              <span className="total">${total.toFixed(2)}</span>
            </div>
            <div className="button-group">
              <Link to="/viewBag" onClick={handleIsCartOpen}>
                <Button>View Bag</Button>
              </Link>

              <Button buttonType="inverted">Check Out</Button>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default CartDropdown;
