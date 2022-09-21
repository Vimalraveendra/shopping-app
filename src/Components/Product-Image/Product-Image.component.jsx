import React, { Component, Fragment } from "react";

class ProductImage extends Component {
  render() {
    const { imageUrl, name } = this.props;

    return (
      <Fragment>
        <img src={imageUrl} alt={name} />
      </Fragment>
    );
  }
}

export default ProductImage;
