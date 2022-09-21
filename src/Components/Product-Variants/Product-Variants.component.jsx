import React, { Component, Fragment } from "react";
import ProductVariant from "../Product-Variant/Product-Variant.component";
import "./Product-Variants.styles.scss";

const PRODUCT_TYPE_CLASS = {
  bag_item_size: "bag-item-size",
  item_size_container: "item-size-container",
  cart_size_pick: "cart-size-pick",
  size_container: "size-container",
};

class ProductVariants extends Component {
  render() {
    const { attributes, productClass, productType } = this.props;

    return (
      <Fragment>
        {attributes &&
          attributes.map(({ items, name, id, type }) => (
            <div className={`${PRODUCT_TYPE_CLASS[productClass]}`} key={id}>
              <span>{name}:</span>
              <div className={`${PRODUCT_TYPE_CLASS[productType]}`}>
                {items.map((attribute) => (
                  <ProductVariant
                    key={attribute.id}
                    attribute={attribute}
                    name={name}
                    type={type}
                  />
                ))}
              </div>
            </div>
          ))}
      </Fragment>
    );
  }
}

export default ProductVariants;
