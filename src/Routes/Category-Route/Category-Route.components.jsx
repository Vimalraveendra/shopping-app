import React, { Component } from "react";
import withRouter from "../../HigherOrder/withRouter.component";
import Category from "../Category/Category.components";

class CategoryRoute extends Component {
  render() {
    const { category } = this.props.params;

    return <Category title={category} />;
  }
}

export default withRouter(CategoryRoute);
