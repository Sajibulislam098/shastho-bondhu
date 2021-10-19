import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const NotFound = () => {
    return (
        <div className="mb-2">
            
           <img className="w-100" src="https://doyouconvert.com/wp-content/uploads/2018/04/404_Error.jpg" alt="" /> 
        <Link to="/" className="d-flex flex-column text-decoration-none justify-content-center align-items-center"> <Button className="btn btn-danger ">Go Back Home</Button> </Link>
        
        </div>
    );
};

export default NotFound;