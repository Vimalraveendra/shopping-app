import { Component } from "react";
import "./App.scss";
import Home from "./Routes/Home/Home.compoent";
import Navigation from "./Routes/Navigation/Navigation.component";
import { Route, Routes } from "react-router-dom";
import ViewBag from "./Components/ViewBag/ViewBag.component";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/*" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path=":category/*" element={<Home />} />
          <Route path="viewbag" element={<ViewBag />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
