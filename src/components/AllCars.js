import React, {  useState } from "react";
import "./Allcars.css";

import civic from "../images/MY25_Civic_Family_Card_Jelly_2x.avif";

import toyota from "../images/black-sand-pearl.png";

import A4 from "../images/A4_2016.jpg";
import mercedex from "../images/mercxedz.avif";
import mutsang from "../images/mustang.avif";
import chavo from "../images/chavo.avif";

function AllCars() {
  const cars=[
    {
      model: "Civic",
      make: "Honda",
      year: 2022,
      doors: 4,
      condition: "New",
      AC: true,
      transmission: "Automatic",
      fuel: "Petrol",
      image: civic,
    },
   
    {
      model: "Corolla",
      make: "Toyota",
      year: 2021,
      doors: 4,
      condition: "Used",
      AC: true,
      transmission: "Manual",
      fuel: "Petrol",
      image: toyota,
    },
    {
      model: "Mustang",
      make: "Ford",
      year: 2020,
      doors: 2,
      condition: "Used",
      AC: true,
      transmission: "Manual",
      fuel: "Petrol",
      image: mutsang,
    },
   
    {
      model: "A4",
      make: "Audi",
      year: 2021,
      doors: 4,
      condition: "New",
      AC: true,
      transmission: "Automatic",
      fuel: "Petrol",
      image: A4,
    },
   
    {
      model: "C-Class",
      make: "Mercedes-Benz",
      year: 2022,
      doors: 4,
      condition: "New",
      AC: true,
      transmission: "Automatic",
      fuel: "Petrol",
      image: mercedex,
    },
    {
      model: "Camaro",
      make: "Chevrolet",
      year: 2021,
      doors: 2,
      condition: "New",
      AC: true,
      transmission: "Manual",
      fuel: "Petrol",
      image: chavo,
    },
   
  ]

  const [selectedCar, setSelectedCar] = useState(cars[0]); // Set initial car as the first car

  

  const handleCarClick = (car) => {
    setSelectedCar(car); 
  };

  return (
    <div className="all-cars-h" id="allls">
      <div className="headder-sign">
        <h2>Vehicle Models</h2>
        <h1>Our rental fleet</h1>
        <p>
          To contribute to positive change and achieve our sustainability goals
          with many extraordinary
        </p>
      </div>
      <div className="car-div">

        <div className="model-container">
          {cars.map((car, index) => {
            return (
             
                <div
                key={index}
                  onClick={() => handleCarClick(car)}
                  className={
                    selectedCar.make === car.make ? "active" : "model-btn"
                  }
                >
                  {car.make}
                </div>
             
            );
          })}
        </div>

        <div className="selected-car">
          <img
            className="slct-car"
            src={selectedCar.image}
            alt={selectedCar.model}
          />
        </div>

        <div className="detail-car">
        <div className="head-inside">$45 / rent per day</div>
          <div className="inside-detail">
            Model <span>{selectedCar.model}</span>
          </div>
          <div className="inside-detail">
            Make<span>{selectedCar.make}</span>
          </div>
          <div className="inside-detail">
            Year<span>{selectedCar.year}</span>
          </div>
          <div className="inside-detail">
            Doors<span>{selectedCar.doors}</span>
          </div>
          <div className="inside-detail">
            Condition<span>{selectedCar.condition}</span>
          </div>
          <div className="inside-detail">
            Transmission<span>{selectedCar.transmission}</span>
          </div>
          <div className="inside-detail">
            Fuel<span>{selectedCar.fuel}</span>
          </div>
          <button className="rese-btn">RESERVE NOW</button>
        </div>
      </div>

    </div>
  );
}

export default AllCars;
