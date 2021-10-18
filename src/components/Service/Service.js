import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id,img,name,problem}=service;
    return (
        <div className="col-md-4 ">
            <img className="w-100" src={img} alt="" />
            <h4>{name}</h4>
            <p>{problem}</p>
          <Link to="">  <Button className="btn btn-warning">Details</Button></Link>
        </div>
    );
};

export default Service;