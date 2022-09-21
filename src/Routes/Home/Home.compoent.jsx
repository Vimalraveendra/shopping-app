import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import CategoryRoute from "../Category-Route/Category-Route.components";

import ProductRoute from "../Product-Route/Product-Route.component";

class Home extends Component {
  render() {
    return (
      <Routes>
        <Route index element={<CategoryRoute />} />
        <Route path=":productId" element={<ProductRoute />} />
      </Routes>
    );
  }
}

export default Home;
