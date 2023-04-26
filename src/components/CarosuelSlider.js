import React, { Component } from "react";
import Slider from "react-slick";


const CarosuelSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>

    <Slider {...settings}>
      <div>
        <h3>
        <img src="https://t3.ftcdn.net/jpg/03/78/93/48/360_F_378934873_5RrayXQJtuPBF810IRecAhqsai1Fyh1t.jpg" 
        style={{width: "100vw", height: "60vh"}} alt=""/>
        </h3>
      </div>
      
    </Slider>
  </div>
  )
}

export default CarosuelSlider
