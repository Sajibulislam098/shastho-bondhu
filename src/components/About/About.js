import React from "react";

const About = () => {
  return (
    <div className="container mb-5">
      <div>
        <h1 className="text-danger">Shastho Bondhu</h1>
        <br />
        <p>
          Shastho Bondhu Limited is a tertiary care hospital and the leading
          contributor of private healthcare services in Bangladesh. This has
          been achieved only through consistent commitment to improve the lives
          of people through utmost service excellence since its inception on
          16th December, 2006. Square Hospital is one of the ventures of Square
          Group which is the top business group of the country.
          <br />
          The reputation of Shastho Bondhu is the result of quality clinical
          outcome and comprehensive care, made achievable through world class
          integrated healthcare facilities by highly trained professionals.
          Thus, Square Hospitals strives to meet patients’ standards through
          quality healthcare and making a difference in their lives.
        </p>
      </div>
      <div>
          <h1 className="text-danger">Affiliate partners</h1>
          <div className="row ">
              <div className=" col-md-6 d-flex flex-column justify-content-center align-items-center">
                  <img src="https://www.squarehospital.com/frontEnd/images/a1.jpg" alt="" />
                  <img src="https://www.squarehospital.com/frontEnd/images/a2.jpg" alt="" />
                  
              </div>
              <div className=" col-md-6 d-flex flex-column justify-content-center align-items-center">
              <img src="https://www.squarehospital.com/frontEnd/images/a3.jpg" alt="" />
                  <img src="https://www.squarehospital.com/frontEnd/images/a4.jpg" alt="" />
                  
              </div>
          </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <img src="https://www.squarehospital.com/frontEnd/images/Capture.JPG" alt="" />
      </div>
    </div>
  );
};

export default About;
