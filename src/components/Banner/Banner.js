import React from 'react';
import { Carousel } from "react-bootstrap";
const Banner = () => {
    return (
        <div>
            <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 "style={{"height":"600px"}}
            src="https://image.freepik.com/free-vector/flat-hand-drawn-hospital-reception-illustration-with-nurses-doctors_52683-56275.jpg"
            alt="First slide"
          />
        
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 " style={{"height":"600px"}}
            src="https://image.freepik.com/free-vector/flat-hand-drawn-hospital-reception-scene_52683-54613.jpg"
          
            alt="Second slide"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"style={{"height":"600px"}}
            src="https://image.freepik.com/free-vector/flat-hand-drawn-hospital-reception-illustration-with-nurses-doctors_52683-56274.jpg"
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Banner;