import React from "react";
import useAuth from "./../../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import { Button } from "react-bootstrap";

const Login = () => {
  const {
    signInWithGoogle,
    error,
    handleLogin,
    handleEmailChange,
    handlePasswordChange,
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
  //  const handleLoginNow = () => {
  //   handleLogin()
  //     .then((result) => {

  //       history.push(redirect_uri);
  //     });
  //   };

  return (
    <div>
      <div className="login-box d-flex align-items-center justify-content-center">
        <div className="login">
          <div>
            <div className="login-box">
              <h2 className="text-success">Please Login</h2>

              <form onSubmit={handleLogin}>
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
              <Button className="me-2 btn btn-info" onClick={handleGoogleLogin}>
            Login with Google
          </Button>
            </div>
            
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Login;
