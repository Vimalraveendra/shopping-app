import React, { Component, Fragment } from "react";
import Slider from "../Slider/Slider.component";

class SliderPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      images: this.props.gallery,
    };
  }

  nextSlider = () => {
    const { current, images } = this.state;
    const len = images.length;
    let newCurrent = current === len - 1 ? 0 : current + 1;
    this.setState(() => {
      return { current: newCurrent };
    });
  };

  previousSlider = () => {
    const { current, images } = this.state;
    const len = images.length;
    let newCurrent = current === 0 ? len - 1 : current - 1;
    this.setState(() => {
      return { current: newCurrent };
    });
  };
  render() {
    const { images, current } = this.state;
    const { previousSlider, nextSlider } = this;
    return (
      <div className="slider-preview">
        {images &&
          images.map((image, idx) => {
            return (
              <Slider
                key={idx}
                index={idx}
                imageUrl={image}
                current={current}
                nextSlider={nextSlider}
                previousSlider={previousSlider}
                title="gallery"
              />
            );
          })}
      </div>
    );
  }
}

export default SliderPreview;
