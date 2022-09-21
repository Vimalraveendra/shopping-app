import React, { Component, Fragment } from "react";
import { CartContext } from "../../Context/Cart.context";
import SliderPreview from "../Slider-Preview/Slider-preview.component";
import ProductVariants from "../Product-Variants/Product-Variants.component";

class ViewBagItem extends Component {
  static contextType = CartContext;

  incrementCartItemQuantity = () =>
    this.context.handleAddItemToCart(this.props.cartItem);
  decrementCartItemQuantity = () =>
    this.context.handleRemoveItemFromCart(this.props.cartItem);

  render() {
    const { brand, name, price, gallery, quantity, attributes } =
      this.props.cartItem;
    const { incrementCartItemQuantity, decrementCartItemQuantity } = this;
    return (
      <Fragment>
        <div className="bag-container">
          <div className="bag-item-container">
            <div className="bag-title-container ">
              <span className="title">{brand}</span>
              <span className="title">{name}</span>
              <span className="price">${price.toFixed(2)}</span>
            </div>
            <ProductVariants
              attributes={attributes}
              productClass="bag_item_size"
              productType="item_size_container"
            />
          </div>

          <div className="bag-image-container">
            <div className="bag-quantity-container">
              <div className="square" onClick={incrementCartItemQuantity}>
                <span className="square-symb">&#43;</span>
              </div>

              <span className="quantity">{quantity} </span>
              <div className="square" onClick={decrementCartItemQuantity}>
                <span className="square-symb">&#8722;</span>
              </div>
            </div>
            {gallery.length > 1 ? (
              <SliderPreview gallery={gallery} />
            ) : (
              <img src={gallery[0]} alt={brand} />
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ViewBagItem;
