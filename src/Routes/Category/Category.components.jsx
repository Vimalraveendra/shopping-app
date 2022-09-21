import React, { Component, Fragment } from "react";
import withCategory from "../../HigherOrder/withCategory.component";

import CategoryPreview from "../../Components/Category-Preview/Category-Preview.component";

class Category extends Component {
  render() {
    const { products, title } = this.props;
    return (
      <Fragment>
        {products && (
          <CategoryPreview key={title} title={title} products={products} />
        )}
      </Fragment>
    );
  }
}

export default withCategory(Category);
