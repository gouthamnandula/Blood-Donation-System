import React from "react";
import doctakingblood from "./images/doctakingblood.png";
import bdsyringe from "./images/bdsyringe.png";
// import footPrint from "./images/footPrint.png";
import { Link } from "react-router-dom";

const HomeLandingContainer = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="home-container">
      <div className="homeContainer-left">
        <div>
          <p className="home-title">
            <div className="home-titlePlusPng">
            <p>Your Blood </p><img src={bdsyringe} alt="syringe with blood"/>
            </div>
            Is Our
            <br />
            Priority
          </p>
          <p className="home-second-para">
            {props.description}
          </p>
        </div>
        <div className="adopt-btn">
          <Link to='./pets'><button className="Home-button" onClick={scrollToTop}><p>Donate Now</p></button></Link>
        </div>
      </div>
      <div className="doctakingblood">
        <img src={doctakingblood} alt='Doctor taking blood'/>
      </div>
    </div>
  );
};

export default HomeLandingContainer;
