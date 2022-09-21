import React, { Component } from "react";

// import CategoriesPreview from "../Categories-Preview/Categories-Preview.component";
import { Routes, Route } from "react-router-dom";
import CategoryRoute from "../Category-Route/Category-Route.components";
import ProductPreview from "../Product-Preview/Product-Preview.component";
import ProductRoute from "../Product-Route/Product-Route.component";

// class Home extends Component {
//   render() {
//     return (
//       <div className="App">
//         <CategoriesPreview />
//       </div>
//     );
//   }
// }
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
