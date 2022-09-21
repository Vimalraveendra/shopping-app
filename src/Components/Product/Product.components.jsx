import React, { PureComponent } from "react";
import Button from "../Button/Button.component";
import "./Product.styles.scss";
import ProductImage from "../Product-Image/Product-Image.component";
import ProductVariants from "../Product-Variants/Product-Variants.component";
import { CartContext } from "../../Context/Cart.context";
import parse from "html-react-parser";

class Product extends PureComponent {
  static contextType = CartContext;
  addItemToCartHandle = () => {
    const { product } = this.props;
    const { handleAddItemToCart, selectedText, selectedSwatch } = this.context;

    return handleAddItemToCart({ ...product, selectedText, selectedSwatch });
  };
  render() {
    const { brand, description, gallery, name, price, attributes } =
      this.props.product;
    let parsedDescription = parse(`${description}`);
    const { currency } = this.context;

    return (
      <div className="product-container">
        <div className="product-image-container">
          <div className="product-image-group">
            {gallery &&
              gallery.map((imageUrl, idx) => {
                return (
                  <ProductImage key={idx} imageUrl={imageUrl} name={name} />
                );
              })}
          </div>
        </div>
        <div className="product-image-wrapper">
          <img className="product-image" src={gallery[0]} alt="hats" />
        </div>

        <div className="bag-container">
          <div className="bag-item-container">
            <div className="bag-title-container ">
              <span className="title">{brand}</span>
              <span className="title">{name}</span>
            </div>
            <ProductVariants
              attributes={attributes}
              productClass="bag_item_size"
              productType="item_size_container"
            />

            <div className="bag-title-container ">
              <span className="price">Price:</span>
              <span className="price">
                {currency}
                {price}
              </span>
            </div>
            <Button
              buttonType="inverted"
              buttonSize="large"
              onClick={this.addItemToCartHandle}
            >
              Add To Cart
            </Button>
            <span>{parsedDescription}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
