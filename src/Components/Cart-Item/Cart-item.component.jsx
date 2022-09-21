import React, { Component } from "react";
import { CartContext } from "../../Context/Cart.context";
import ProductVariants from "../Product-Variants/Product-Variants.component";

class CartItem extends Component {
  static contextType = CartContext;

  incrementCartItemQuantity = () =>
    this.context.handleAddItemToCart(this.props.cartItem);
  decrementCartItemQuantity = () =>
    this.context.handleRemoveItemFromCart(this.props.cartItem);

  render() {
    const { price, gallery, brand, name, quantity, attributes } =
      this.props.cartItem;

    const { incrementCartItemQuantity, decrementCartItemQuantity } = this;
    const { currency } = this.context;

    return (
      <div className="cart-item-container">
        <div className="cart-title-contaier">
          <div className="cart-title">
            <span className="brand">{brand}</span>
            <span className="brand">{name}</span>
            <span className="price">
              {currency}
              {price}
            </span>
          </div>
          <ProductVariants
            attributes={attributes}
            productClass="cart_size_pick"
            productType="size_container"
          />
        </div>

        <div className="cart-image-container">
          <div className="cart-quantity-container">
            <div className="square" onClick={incrementCartItemQuantity}>
              <span className="square-symb">&#43;</span>
            </div>

            <span className="quantity">{quantity}</span>
            <div className="square" onClick={decrementCartItemQuantity}>
              <span className="square-symb">&#8722;</span>
            </div>
          </div>
          <img src={gallery[0]} alt={brand} />
        </div>
      </div>
    );
  }
}

export default CartItem;
