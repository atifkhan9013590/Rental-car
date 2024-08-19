import React from 'react'
import car from './images/iconbox-image_01.png'
import person from './images/iconbox-image_02.png'
import cars from './images/iconbox-image_03.png'
import display from './images/display_car_image.png'
import drive from './images/drive.png'
import price from './images/price.png'
import charge from './images/charge.png'
import './cars.css'
function SelectCar() {
  return (
    <div className="slct-cars-main">
      <div className="header-sec">
        <h3>Plan your trip now</h3>
        <h1>Quick & easy car rental</h1>
      </div>
      <div className="slct-car-images">
        <div className="slct-car-div">
          <img src={car} alt="car" className="shake-on-hover" />
          <h3>Select Car</h3>
          <p>
            To contribute to positive Change and achieve sustainability goals
            with many extraordinary
          </p>
        </div>
        <div className="slct-car-div">
          <img src={person} alt="person" className="shake-on-hover" />
          <h3>Contact Operator</h3>
          <p>
            To contribute to positive Change and achieve sustainability goals
            with many extraordinary
          </p>
        </div>
        <div className="slct-car-div">
          <img src={cars} alt="person" className="shake-on-hover" />
          <h3>Contact Operator</h3>
          <p>
            To contribute to positive Change and achieve sustainability goals
            with many extraordinary
          </p>
        </div>
      </div>
      <img src={display} className="diplayimage" alt="display" />

      <div className="rowdisplay">
        <div className="insiderow-display" id='display'>
          <h2>Why Choose Us</h2>
          <h1>Best valued deals you will ever find</h1>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <button>Find Deals</button>
        </div>
        <div className="insiderow-display2">
          <div className="div1">
            <div>
              <img src={drive} alt="drive" className="drive" />
            </div>

            <div className="inside-div1">
              <h2>Cross Country Drive</h2>
              <p>
                Speedily say has suitable disposal add boy. On forth doubt miles
                of child. Exercise joy man children rejoiced.
              </p>
            </div>
          </div>
          <div className="div1">
            <div>
              <img src={price} alt="drive" className="drive" />
            </div>
            <div className="inside-div1">
              <h2>All inclusive pricing</h2>
              <p>
                Yet uncommonly his ten who diminution astonished. Demesne new
                manners savings staying had,
              </p>
            </div>
          </div>
          <div className="div1">
            <div>
              <img src={charge} alt="drive" className="drive" />
            </div>
            <div className="inside-div1">
              <h2>No hidden charges</h2>
              <p>
                Under folly balls death own point now men. Match way these she
                avoid see. She whose drift their fat off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectCar