import React from 'react'
import './Review.css'
import user from './images/user.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRightAlt
} from "@fortawesome/free-solid-svg-icons";
function Review() {
  return (
    <div className="Review" id='Review'>
      <div className="review-head">
        <h2>Reviewed by People</h2>
        <h1>Clients' Testimonials</h1>
        <p>
          certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting.
        </p>
        <p>Pretended exquisite see cordially the you. Weeks quiet do vexed.</p>
      </div>
      <div className="review-component">
        <div className="review1">
          <h2>
            "The rem value is the same as the em value displayed above. Both
            units are scalable."
          </h2>
          <div className="insie-review1">
            <div className="image-user">
              <img src={user} alt="user" />
              <div>
                <div className="name">Kimberly Garcia</div>
                <div className="nick">Boston Area</div>
              </div>
            </div>
            <FontAwesomeIcon icon={faQuoteRightAlt} className="iconss" />
          </div>
        </div>
      </div>
      <div className="review-component">
        <div className="review1">
          <h2>
            "The rem value is the same as the em value displayed above. Both
            units are scalable."
          </h2>
          <div className="insie-review1">
            <div className="image-user">
              <img src={user} alt="user" />
              <div>
                <div className="name">Kimberly Garcia</div>
                <div className="nick">Boston Area</div>
              </div>
            </div>
            <FontAwesomeIcon icon={faQuoteRightAlt} className="iconss" />
          </div>
        </div>
      </div>
      <div className="review-component">
        <div className="review1">
          <h2>
            "The rem value is the same as the em value displayed above. Both
            units are scalable."
          </h2>
          <div className="insie-review1">
            <div className="image-user">
              <img src={user} alt="user" />
              <div>
                <div className="name">Kimberly Garcia</div>
                <div className="nick">Boston Area</div>
              </div>
            </div>
            <FontAwesomeIcon icon={faQuoteRightAlt} className="iconss" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review