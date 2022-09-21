import React, { Fragment, PureComponent } from "react";
import Product from "../../Components/Product/Product.components";
import withProduct from "../../HigherOrder/withProduct.component";

class ProductPreview extends PureComponent {
  render() {
    const { product } = this.props;

    return (
      <Fragment>
        {Object.keys(product).length > 0 && <Product product={product} />}
      </Fragment>
    );
  }
}

export default withProduct(ProductPreview);
