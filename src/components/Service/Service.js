import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Services.css'
const Service = ({ service }) => {
  const { id, img, name, problem } = service;
  return (
    <div className="col-md-4 col-sm-6 mt-2 mb-5">
      <div className="cart d-flex flex-column   p-2 m-2 position-relative  align-items-center">
        <img className=" img  pb-2" src={img} alt="" />
        <div className="d-flex flex-column justify-content-center align-items-center">
          {" "}
          <h4>{name}</h4>
          <p>{problem}</p>
          <Link to={`/details/${id}`}>  <Button className="btn btn-warning ">Details</Button></Link>
        </div>
      </div>
    </div>
    // <div  className="col-md-4 ">
    //     <img className="w-100" src={img} alt="" />
    //     <h4>{name}</h4>
    //     <p>{problem}</p>
    //   <Link to={`/details/${id}`}>  <Button className="btn btn-warning">Details</Button></Link>
    // </div>
  );
};

export default Service;
