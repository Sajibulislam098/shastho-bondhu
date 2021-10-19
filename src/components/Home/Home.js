import React from "react";
import ReactPlayer from "react-player";
import Banner from "../Banner/Banner";
import Guide from "../Guide/Guide";
import LastInfo from "../LastInfo/LastInfo";

import Services from "../Services/Services";
import Header from "../Shared/Header/Header";

const Home = () => {
  return (
    <div id="home" >
    
      <Banner></Banner>
      <div className="mt-5 container ">
       <div className="row"> 
       <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img
          className="w-100  "
            src="https://www.shasthobondhu.com/assets/uploads/home_content/077761300_1559630424.png"
            alt=""
          />
        </div>
        <div className="col-md-7 d-flex justify-content-center mt-3 p-2">
        <div> <h3>LIVE Interactions</h3>
         <h6 className="text-danger mt-2 mb-3">with the specialists from the top Hospitals in India</h6>
         
          <ReactPlayer width="400px" height="300px" controls url="https://youtu.be/ogIoWTVOBTE" ></ReactPlayer></div>
        </div></div>
      </div>
      <Services></Services>

      <LastInfo></LastInfo>
    
    </div>
  );
};

export default Home;
