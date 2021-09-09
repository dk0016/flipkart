import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./amazon.jpg";
import image2 from "./alexa.jpg";
import image3 from "./furniture.jpg";

const Container = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 ehdsgfhs" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Container;
