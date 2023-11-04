import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "assests/homeSlider/4.jpg" },
  { url: "assests/homeSlider/0.jpg" },
  { url: "assests/homeSlider/1.jpg" },
  { url: "assests/homeSlider/2.jpg" },
  { url: "assests/homeSlider/3.jpg" },
];

//  Slider section

import "./Slider.css";

const Slider = () => {
  const sliderStyle = {
    width: "100% !important ", 
  };
  return (
    <>
      <h1 id="L1">
        Finding <span>Housing</span>
        <br /> Made Easy.
      </h1>
      <div className="slider">
        <SimpleImageSlider
          width={405}
          height={310}
          images={images}
          showBullets={true}
          navStyle={3}
          navMargin={10}
          navSize={35}
          autoPlay={true}
          slideDuration={1}
          useGPURender={true}
          style={sliderStyle}
          bgColor={"#93B1A6"}
        />
      </div>

      <h3 id="L2">
        Searching houses aren't a struggle any more. Providing best search
        results, we let you select your Host & Tenants too.
      </h3>
    </>
  );
};

export default Slider;
