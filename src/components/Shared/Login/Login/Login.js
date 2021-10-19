import React, { useState } from "react";
import useAuth from "./../../../../hooks/useAuth";
import Header from "./../../Header/Header";
import { Button } from 'react-bootstrap';

const Login = () => {
  const { signInWithGoogle,error,handleLogin,handleEmailChange,handlePasswordChange } = useAuth();
 
 
  return (
    <div>
      {/* <h2>{loggedInUser.email}</h2> */}
      <div className="login-box d-flex align-items-center justify-content-center">
        <div className="login">
          <div className="login-box">
            <h2 className="text-success">Pease Login</h2>
           
            <form onSubmit={handleLogin }>
              <input
                onChange={handleEmailChange}
                className="input-felid"
                type="email"
                name="email"
                placeholder="Enter your Email"
              />
              <br />
              <input
                onChange={handlePasswordChange}
                className="input-felid"
                type="password"
                name="password"
                placeholder="Enter your Password"
              />
               <p className="text-danger">{error}</p>
              <input
                className="mt-3 w-50 btn btn-success m-auto"
                type="submit"
                value="Login"
              />
            </form>
            <p>or</p>
          </div>
        
         
          <Button className="me-2 btn btn-info" onClick={signInWithGoogle}>
            Login with Google
          </Button>
          
        </div>
      </div>
    </div>

    
  );
};

export default Login;
