import "./ViewBag.styles.scss";

import React, { Component } from "react";
import { CartContext } from "../../Context/Cart.context";
import Button from "../Button/Button.component";
import ViewBagItem from "../ViewBag-Item/ViewBag-item.components";

class ViewBag extends Component {
  static contextType = CartContext;

  incrementCartItemQuantity = () =>
    this.context.handleAddItemToCart(this.props.cartItem);
  decrementCartItemQuantity = () =>
    this.context.handleRemoveItemFromCart(this.props.cartItem);

  render() {
    const { cartItems, total, cartCount } = this.context;

    const tax = (total * 21) / 100;
    return (
      <div className="view-bag-container">
        <h1 className="cart">Cart</h1>
        <div className="bag-wrapper">
          {cartItems.map((cartItem) => (
            <ViewBagItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="bag-total-container">
          <div className="total-title">
            <span className="total-title">Tax 21%:</span>
            <span className="total">${tax.toFixed(2)}</span>
          </div>
          <div className="total-title">
            <span className="total-title">Quantity:</span>
            <span className="total">{cartCount} </span>
          </div>

          <div className="total-title">
            <span className="total-title">Total:</span>
            <span className="total">${total.toFixed(2)}</span>
          </div>
        </div>
        <Button buttonType="inverted" buttonSize="medium">
          Order
        </Button>
      </div>
    );
  }
}

export default ViewBag;
