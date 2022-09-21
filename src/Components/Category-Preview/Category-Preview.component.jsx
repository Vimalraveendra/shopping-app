import React, { Component } from "react";
import "./Category-Preview.styles.scss";
import CategoryItem from "../Category-Item/Category-item.component";
import { CartContext } from "../../Context/Cart.context";

class CategoryPreview extends Component {
  static contextType = CartContext;
  render() {
    const { title, products } = this.props;
    const { isCartOpen } = this.context;

    return (
      <div className={`${isCartOpen && "App"}`}>
        <div className="App-container">
          <h2 className="title">{title}</h2>
          <div className="categories-container">
            {products &&
              products.map((product) => {
                return <CategoryItem key={product.id} item={product} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryPreview;
