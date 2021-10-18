import React from "react";
import { useState } from "react";
import Login from "./../Login";
import Register from "./../../../Register/Register";
import "../MainLogin/MainLogin.css";
import Header from "./../../../Header/Header";
import { Button } from 'react-bootstrap';

const MainLogin = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App  ">
      <Header></Header>
      <div className="row ">
        <div className="login-area col-md-6 ps-5">
          {toggle ? <Login></Login> : <Register></Register>}

          {toggle ? (
            <p onClick={() => setToggle(false)} className="text-primary ">
              are you new please register
            </p>
          ) : (
            <Button onClick={() => setToggle(true)} className="btn btn-light ">
              already have an account ?
            </Button>
          )}
        </div>
        <div className="col-md-6">
          <div className="img">
            <img
              className="image-fluid w-80"
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
