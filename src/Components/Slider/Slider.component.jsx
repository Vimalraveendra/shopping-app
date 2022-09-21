import "./Slider.styles.scss";

import React, { Component } from "react";
import { ReactComponent as CaretLeft } from "../../assets/caret-left.svg";
import { ReactComponent as CaretRight } from "../../assets/caret-right.svg";

class Slider extends Component {
  render() {
    const { imageUrl, title, current, previousSlider, nextSlider, index } =
      this.props;
    return (
      <div className="slide">
        {index === current && <img src={imageUrl} alt={title}></img>}

        <span className="left-arrow" onClick={previousSlider}>
          <CaretLeft className="left" />
        </span>
        <span className="right-arrow" onClick={nextSlider}>
          <CaretRight className="right" />
        </span>
      </div>
    );
  }
}

export default Slider;
