import "./Category-item.styles.scss";
import { ReactComponent as Cart } from "../../assets/shopping-cart.svg";
import React, { Component } from "react";
import { CartContext } from "../../Context/Cart.context";
import { Link } from "react-router-dom";

class CategoryItem extends Component {
  static contextType = CartContext;

  setAddItemToCart = () => {
    const { item } = this.props;
    let selectedText = this.context.selectedText;
    let selectedSwatch = this.context.selectedSwatch;
    if (Object.keys(selectedText).length > 0) {
      selectedText = {};
    }
    let newSelectAttribute;
    if (item && item.attributes.length > 0) {
      item &&
        item.attributes.find(({ items, name, type }) => {
          newSelectAttribute = { type: type };
          newSelectAttribute[type] = { ...items[0], name };
          return newSelectAttribute;
        });
    }
    selectedText = { ...newSelectAttribute };
    return this.context.handleAddItemToCart({
      ...item,
      selectedText,
      selectedSwatch,
    });
  };

  render() {
    const { name, gallery, brand, price, id, inStock } = this.props.item;
    const { currency } = this.context;

    return (
      <div className={`category-container  ${!inStock && "disabled"}`}>
        {!inStock && <span className="out-of-stock">Out of Stock</span>}
        <div className="category-image">
          <Link to={id}>
            <img src={gallery[0]} alt={name} />
          </Link>
        </div>

        <div className="category-body-container">
          <Cart
            fill="#FFFFFF"
            className="cart"
            onClick={() => {
              this.setAddItemToCart(this.props);
            }}
          />
        </div>

        <div className="category-footer">
          <h2>
            {brand} {name}
          </h2>
          <p>
            {currency}
            {price}
          </p>
        </div>
      </div>
    );
  }
}

export default CategoryItem;
