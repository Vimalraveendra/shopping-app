import React, { Component } from "react";
import withRouter from "../../HigherOrder/withRouter.component";
import ProductPreview from "../Product-Preview/Product-Preview.component";

class ProductRoute extends Component {
  render() {
    const { productId } = this.props.params;

    return <ProductPreview id={productId} />;
  }
}

export default withRouter(ProductRoute);
