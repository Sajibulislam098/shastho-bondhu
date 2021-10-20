import React from "react";
import { useState } from "react";
import Login from "./../Login";
import Register from "./../../../Register/Register";
import "../MainLogin/MainLogin.css";

import { Button } from 'react-bootstrap';


const MainLogin = () => {
  const [toggle, setToggle] = useState(false);

  
  return (
    <div className="container App mb-5 ">
     
      <div className="row ">
        <div className="login-area col-md-6 ps-5">
          {toggle ?  <Register></Register>: <Login></Login> }

          {toggle ? (
            <Button onClick={() => setToggle(false)} className="btn btn-light ">
              already have an account ?
            </Button>
          ): (
            <Button onClick={() => setToggle(true)} className="btn btn-light ">
              are you new please register
            </Button>
          ) }
        </div>
        <div className="col-md-6">
          <div className="img">
            <img
              className="image-fluid w-75"
              src="https://image.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
