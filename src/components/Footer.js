import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"; // Mail icon (Envelope)
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"; // Social media icons

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-divs">
        <div className="F1-div">
          <h2>
            Car<span className="spn">Rental</span>
          </h2>
          <p>
            Use securing confined his shutters. Delightful as he it acceptance
            an solicitude discretion.
          </p>
          <p className="pp">
            <span>
              <FontAwesomeIcon icon={faPhone} className="iconsss" />
            </span>
            (123) 498-4600
          </p>
          <p className="pp">
            <span>
              <FontAwesomeIcon icon={faEnvelope} className="iconsss" />
            </span>
            example@carrental.com
          </p>
        </div>
        <div className="F2-div">
          <h2>COMPANY</h2>
          <p>New york</p>
          <p>How We Work</p>
          <p>Blog</p>
          <p>Career</p>
          <p>Mobile</p>
        </div>
        <div className="F3-div">
          <h2>WORKING HOURS</h2>
          <p>
            Mon - Fri:<span>09:00AM - 09:00PM</span>
          </p>
          <p>
            Sat:<span>09:00AM - 09:00PM</span>
          </p>
          <p>
            Sun:<span>Closed</span>
          </p>
        </div>
        <div className="F4-div">
          <h2>SUBSCRIPTION</h2>
          <p>Subscribe your Email address for latest news & updates.</p>
          <input placeholder="Enter Email Address" />
          <button>Submit</button>
        </div>
      </div>
      <div className="last-div">
        <div>
          <p>©2020 Car Rental. All Rights Reserved</p>
        </div>
        <div className='icons-div'>
          <FontAwesomeIcon icon={faFacebook} className="iconssss" />
          <FontAwesomeIcon icon={faTwitter} className="iconssss" />
          <FontAwesomeIcon icon={faYoutube} className="iconssss" />
        </div>
      </div>
    </div>
  );
}

export default Footer