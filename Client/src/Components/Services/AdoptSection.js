import React from "react";
import adoptPet from "./images/image2.png";
import { Link } from "react-router-dom";

const AdoptSection = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="adopt-section">
      <h2>Search for Blood Donor</h2>
      <img src={adoptPet} alt="Happy Pet" />

      <p>
      Welcome to our blood donation program! Donating blood is a selfless act 
      that can save lives and make a significant impact on the community.
      </p>

      <h3>Benefits of Blood Donation</h3>
      <ul>
        <li>Save lives by providing critical support to patients in need</li>
        <li>Improve your own health by promoting better blood flow</li>
        <li>Experience the joy of giving back to society</li>
      </ul>

      <h3>Donation Process</h3>
      <ol>
      <li>Register and fill out a donation application</li>
        <li>Undergo a quick health check-up</li>
        <li>Donate blood in a safe and hygienic environment</li>
      </ol>

      <h3>Responsibilities</h3>
      <p>
      Donating blood comes with responsibilities, such as maintaining good health, 
      staying hydrated, and following post-donation care instructions.
      </p>

      <Link to="/pets">
        <button className="cta-button" onClick={scrollToTop}>Search a Blood Donor</button>
      </Link>
    </section>
  );
};

export default AdoptSection;
