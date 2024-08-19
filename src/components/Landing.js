import React, { useEffect } from "react";
import "./Landing.css";
import banner from "../images/banner_car.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Landing() {
  useEffect(() => {
   
    const landingPage = document.querySelector(".landing-page");
    setTimeout(() => {
      landingPage.classList.add("visible");
    }, 100); 
  }, []);

   const scrollToForm = (element) => {
     const formElement = document.getElementById(element);
     if (formElement) {
       formElement.scrollIntoView({ behavior: "smooth" });
     }
   };

  return (
    <div className="landing-page" id="landing">
      <div className="left-section">
        <h3>Plan Your trip now</h3>
        <h1>
          Save<span> big</span> with our car rental
        </h1>
        <p>
          To contribute to positive change and achieve our sustainability goals
          with many extraordinary
        </p>
        <div className="btns-div">
          <button className="book" onClick={() => scrollToForm("form-book")}>
            Book Ride <FontAwesomeIcon icon={faCheck} className="chck" />
          </button>
          <button className="learn">
            Learn more <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div className="right-section">
        <img src={banner} alt="banner" className="banner-img" />
      </div>
    </div>
  );
}

export default Landing;
