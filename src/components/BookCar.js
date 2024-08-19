import { useState } from "react";
import "./BookCar.css";
import civic from "../images/MY25_Civic_Family_Card_Jelly_2x.avif";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toyota from "../images/black-sand-pearl.png";
import A4 from "../images/A4_2016.jpg";
import mercedex from "../images/mercxedz.avif";
import mutsang from "../images/mustang.avif";
import chavo from "../images/chavo.avif";
import CarType from "../Modals/CarType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faCalendarAlt, faStopwatch,faLocationDot } from "@fortawesome/free-solid-svg-icons";


function BookCar() {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
   const [DropDate, setDropDate] = useState(new Date());
   const [DropTime, setDropTime] = useState(new Date());
  const [selectmodal,setselectmodal] = useState(null)
    const [selectPickUp,setselectPickUp] = useState('')
   const [selectDrop ,setselectDrop] = useState("");
   const [errorMessage,seterrorMessage] = useState('')



  const [showModal, setShowModal] = useState(false);
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
  ];

  const selectmodalChange = (e) =>{
    const selectCar = e.target.value
    const CAR= cars.find((car)=>car.make===selectCar)
   setselectmodal(CAR)

  
   
   
  }
   const toggleModal = () => {
     setShowModal(!showModal);
   };


const handleSearch = () => {
  if (selectmodal) {
    console.log("Selected car:", selectmodal);
  }
  if(!selectDrop && !selectPickUp )
  {
    seterrorMessage('Required all Fields')
  }
  else{
setShowModal(true);
  }

  
 
};

  return (
    <div id="form-book" className="form-book">
      <div className="book-head">BOOK A CAR</div>
      <div className="errormsg">{errorMessage}</div>
      <div className="slected-op">
        <div>
          <div>
            <FontAwesomeIcon icon={faCar} className="icons" />
            Select Your Car Type
          </div>

          <select
            value={selectmodal ? selectmodal.make : ""}
            onChange={selectmodalChange}
          >
            <option>Select car</option>
            {cars.map((car, index) => (
              <option value={car.make} key={index}>
                {car.make}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="icons" />
            Pick-up
          </div>
          <select
            value={selectPickUp}
            onChange={(e) => setselectPickUp(e.target.value)}
          >
            <option>select pickup location</option>
            <option value={"Peshawar saddar"}>Peshawar saddar</option>
            <option value={"Peshawar City"}>Peshawar City</option>
            <option value={"Peshawar saddar"}>Peshawar saddar</option>
          </select>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="icons" />
            Drop-of
          </div>
          <select
            value={selectDrop}
            onChange={(e) => setselectDrop(e.target.value)}
          >
            <option>select Dropoff location</option>
            <option value={"Peshawar saddar"}>Peshawar saddar</option>
            <option value={"Peshawar City"}>Peshawar City</option>
            <option value={"Peshawar saddar"}>Peshawar saddar</option>
          </select>
        </div>
      </div>
      <div className="dates-op">
        <div>
          <div className="">
            <FontAwesomeIcon icon={faCalendarAlt} className="icons" />
            Pick-up-Date
          </div>

          <DatePicker
            className="picker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/dd/yyyy"
          />
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faStopwatch} className="icons" />
            Pick-up-Time
          </div>

          <DatePicker
            className="picker"
            selected={startTime}
            onChange={(time) => setStartTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>

        <div>
          <div>
            <FontAwesomeIcon icon={faCalendarAlt} className="icons" />{" "}
            Drop-of-Date
          </div>

          <DatePicker
            className="picker"
            selected={DropDate}
            onChange={(date) => setDropDate(date)}
            dateFormat="MM/dd/yyyy"
          />
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faStopwatch} className="icons" />
            Drop-of-Time
          </div>

          <DatePicker
            className="picker"
            selected={DropTime}
            onChange={(time) => setDropTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
        <button onClick={handleSearch}>SEARCH</button>
      </div>
      {showModal && (
        <CarType
          toggleModal={toggleModal}
          selectmodal={selectmodal}
          pickup={selectPickUp}
          selectDrop={selectDrop}
          startDate={startDate}
          startTime={startTime}
          DropDate={DropDate}
          DropTime={DropTime}
        />
      )}
    </div>
  );
}

export default BookCar;
