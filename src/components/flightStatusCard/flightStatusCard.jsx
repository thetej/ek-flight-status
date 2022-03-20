import React from "react";
import { IoIosAirplane } from "react-icons/io";
import ek from "./ek.svg";
import "./card.scss";

export default function FlightStatusCard(props) {
  const { flightNumber } = props;
  console.log(props);
  return (
    <div className="flight-status-results__container">
      <div className="flight-status-card">
        <span className="status-tag">Arrived</span>
        <div className="card-content__container">
          <div className="card-content">
            <div className="flight-status-card__row">
              <div className="row-item-left">Terminal 3</div>
              <div className="row-item-right">Terminal 3</div>
            </div>
            <div className="flight-status-card__row">
              <div className="row-item-left airport">Dubai (DXB)</div>
              <div className="row-item-right airport">
                London Heathrow (LHR)
              </div>
            </div>
            <div className="flight-status-card__row time-date">
              <div className="row-item-left">
                <div className="state">Departure</div>
                <div className="time">06:00</div>
                <div className="date">Sun 20 Mar</div>
              </div>
              <div className="flight-progress__container">
                <div className="flight-progress">
                  <div className="progress-bar">
                    <span className="progress-point start"></span>
                    <span className="progress-point plane">
                      <IoIosAirplane />
                    </span>
                    <span className="progress-point status-bar"></span>
                    <span className="progress-point end"></span>
                  </div>
                </div>
              </div>
              <div className="row-item-right">
                <div className="state">Departure</div>
                <div className="time">06:00</div>
                <div className="date">Sun 20 Mar</div>
              </div>
            </div>
            <div className="flight-status-card__row schedule-time">
              <div className="row-item-left">Scheduled Departure: 03:10</div>
              <div className="row-item-right">Scheduled Arrival: 07:10</div>
            </div>
          </div>
          <div className="seperator"></div>
          <div className="flight-number">
            <img src={ek} />
            <span className="text">EK {flightNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
