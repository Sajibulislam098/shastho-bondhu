import React from 'react';
import useAuth from './../../../hooks/useAuth';

const Register = () => {
    const {handleEmailChange,handleOnSubmit,handlePasswordChange}=useAuth()
    return (
        <div>
        <div className="login-box d-flex align-items-center justify-content-center">
          <div className="login">
            <div className="login-box">
              <h2 className="text-info">Pease Register</h2>
              <form onSubmit={handleOnSubmit}>
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
                <input
                  className="mt-3 w-50 btn btn-success m-auto"
                  type="submit"
                  value="Register"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;