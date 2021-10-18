import React from 'react';
import { useState } from 'react';
import Login from './../Login';
import Register from './../../../Register/Register';

const MainLogin = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="App container ">
      <div className="row">
        <div className="login-area col-md-6">
          {toggle ? <Login></Login> : <Register></Register>}

          {toggle ? (
            <p onClick={() => setToggle(false)} className="text-primary ">
              are you new please register
            </p>
          ) : (
            <p onClick={() => setToggle(true)} className="text-primary ">
              already have an account ?
            </p>
          )}
        </div>
        <div className="col-md-6">
          <div className="img">
            <img
              className="image-fluid w-100"
              src="https://i.ibb.co/wB5md78/undraw-Mobile-login-re-9ntv.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    );
};

export default MainLogin;