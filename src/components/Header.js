import React from 'react';
import './Header.css';
import logo from '../images/logo_v4.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; 

function Header({ showsidebar, setshowsidebar }) {

  const scrollToForm = (element) => {
    const formElement = document.getElementById(element);
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="Header">
      <div className="left">
        <img src={logo} alt="logo" className="logoimg" />
      </div>
      <div className="mid">
        <div onClick={() => scrollToForm("landing")}>Home</div>
        <div onClick={() => scrollToForm("display")}>About</div>
        <div onClick={() => scrollToForm("allls")}>Vehicle Model</div>
        <div onClick={() => scrollToForm("Footer")}>Contact</div>
        <div onClick={() => scrollToForm("Review")}>Testimonials</div>
        <div>Our Team</div>
      </div>
      <div className="right">
        <div className="sign">SignIn</div>
        <button className="register">Register</button>
        <FontAwesomeIcon
          icon={faBars}
          className="bar-icon"
          onClick={() => setshowsidebar(!showsidebar)}
        />
      </div>
    </div>
  );
}

export default Header;
