import React from "react";
import useAuth from "./../../../hooks/useAuth";
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router";

const Register = () => {
  const {signInWithGoogle,
    handleEmailChange,
    handleRegistration,
    handlePasswordChange,
    error,
    handleNameChange,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  console.log(location.state?.from);
  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <div className="login-box d-flex align-items-center justify-content-center">
        <div className="login">
          <div className="login-box">
            <h2 className="text-success">Please Register</h2>
            <form onSubmit={handleRegistration}>
              <input
                type="text"
                onBlur={handleNameChange}
                className="input-felid"
                id="name"
                placeholder="Your Name"
              />
              <br />
              <input
                onChange={handleEmailChange}
                className="input-felid"
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
              <br />

              <input
                onChange={handlePasswordChange}
                className="input-felid"
                type="password"
                name="password"
                placeholder="Enter your Password"
                required
              />
              <p className="text-danger">{error}</p>
              <input
                className="mt-3 w-50 btn btn-success m-auto"
                type="submit"
                value="Register"
              />
            </form>
            <p>or</p>
            <Button className="me-2 btn btn-info" onClick={handleGoogleLogin}>
            Login with Google
          </Button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Register;
