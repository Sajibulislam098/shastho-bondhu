import React from "react";
import { Carousel } from "react-bootstrap";
import Services from "../Services/Services";
import Header from "../Shared/Header/Header";
import Register from "../Shared/Register/Register";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 "
            src="https://image.freepik.com/free-vector/healthcare-medical-with-cardiograph-line_1017-30390.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/healthcare-medical-with-cardiograph-line_1017-30390.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/healthcare-medical-with-cardiograph-line_1017-30390.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <Register></Register> */}
      <Services></Services>
    </div>
  );
};

export default Home;
