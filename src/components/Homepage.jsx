import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Slider from "./Slider/Slider";

import "./Homepage.css";
import Body from "./Body/Body";

const Homepage = () => {
  return (
    <>
      <Navbar />
        <section className="mainsection">
          <Slider />
          <Body />
        </section>
      <Footer />
    </>
  );
};

export default Homepage;
