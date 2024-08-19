
import "./CarType.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faCalendarAlt,

  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function CarType({
  selectmodal,
  pickup,
  toggleModal,
  selectDrop,
  startDate,
  startTime,
  DropDate,
  DropTime,
}) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleModal}>
          &times;
        </span>
        <div className="heading-header">
          <div className="heading">
            <span>
              <FontAwesomeIcon icon={faCalendarAlt} className="icons" />
            </span>{" "}
            Pick-Up Time
          </div>
          <div className="haeding-p">
            {startDate.toLocaleDateString()} {startTime.toLocaleTimeString()}
          </div>
          <div className="heading">
            {" "}
            <span>
              <FontAwesomeIcon icon={faCalendarAlt} className="icons" />
            </span>{" "}
            Drop-Off Time
          </div>
          <div className="haeding-p">
            {DropDate.toLocaleDateString()} {DropTime.toLocaleTimeString()}
          </div>
          <div className="heading">
            {" "}
            <span>
              <FontAwesomeIcon icon={faLocationDot} className="icons" />
            </span>{" "}
            Pick-Up Location
          </div>
          <div className="haeding-p">{pickup}</div>
          <div className="heading">
            {" "}
            <span>
              <FontAwesomeIcon icon={faLocationDot} className="icons" />
            </span>{" "}
            Drop-Off Location
          </div>
          <div className="haeding-p">{selectDrop}</div>
        </div>
        <div>
          <img
            src={selectmodal ? selectmodal.image : ""}
            className="rule-image"
            alt="car-img"
          />
        </div>
      </div>
    </div>
  );
}

export default CarType;
