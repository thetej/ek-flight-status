import React from "react";
import moment from 'moment';
import { IoIosAirplane } from "react-icons/io";
import ek from "./ek.svg";
import "./card.scss";

const getStatus = (statusCode) => {
  switch(statusCode) {
    case 'PDEP': 
    return 'Not yet departed';
    case 'ARVD':
    return 'Arrived';
    case 'ENRT':
    return 'In flight';
    default:
      return "Info not available";
      break;
  }
}

const getStatusColor = (statusColor) => {
  switch(statusColor) {
    case 'PDEP': 
    return 'predeparture';
    case 'ARVD':
    return 'arrived';
    case 'ENRT':
    return 'inflight';
    default:
      return "notAvailable";
      break;
  }
}

const formatTime = (a) => {
  let time = moment(a).format('HH:MM'); 
  return time
}

const formatDate = (a) => {
  let day = moment(a).format('ddd DD MMM'); 
  return day
}

export default function FlightStatusCard(props) {
  const { results } = props;
  
  return results.map(result => (
    <div className="flight-status-results__container" key={result.flightNumber}>
      <div className="flight-status-card">
        <span className={`status-tag ${getStatusColor(result.flightRoute[0].statusCode)}`}>{getStatus(result.flightRoute[0].statusCode)}</span>
        <div className="card-content__container">
          <div className="card-content">
            <div className="flight-status-card__row">
              <div className="row-item-left">{result.flightRoute[0].arrivalTerminal}</div>
              <div className="row-item-right">{result.flightRoute[0].departureTerminal}</div>
            </div>
            <div className="flight-status-card__row">
              <div className="row-item-left airport">{result.flightRoute[0].originActualAirportCode}</div>
              <div className="row-item-right airport">
              {result.flightRoute[0].destinationActualAirportCode}
              </div>
            </div>
            <div className="flight-status-card__row time-date">
              <div className="row-item-left">
                <div className="state">{result.flightRoute[0].statusCode === 'ARVD' || 'inflight' ? 'Departed' : 'Estimated Departure'}</div>
                <div className="time">{formatTime(result.flightRoute[0].departureTime.actual)}</div>
                <div className="date">{formatDate(result.flightRoute[0].departureTime.actual)}</div>
              </div>
              <div className="flight-progress__container">
                <div className={`flight-progress ${(result.flightRoute[0].flightPosition <= 0 ? 'notDeparted' : '')}`}>
                  <div className="progress-bar">
                    <span className={`progress-point start ${(result.flightRoute[0].flightPosition > 0 ? 'inflight' : '')}`}></span>
                    <span className="progress-point plane" style={{left:(result.flightRoute[0].flightPosition) + "%" }}>
                      <IoIosAirplane />
                    </span>
                    <span className="progress-point status-bar" style={{width:(result.flightRoute[0].flightPosition) + "%"}}></span>
                    <span className={`progress-point end ${(result.flightRoute[0].flightPosition == 100 ? 'inflight' : '')}`}></span>
                  </div>
                </div>
              </div>
              <div className="row-item-right">
                <div className="state">{result.flightRoute[0].statusCode === 'ARVD' ? 'Arrived' : 'Estimated Arrival'}</div>
                <div className="time">{formatTime(result.flightRoute[0].arrivalTime.actual)}</div>
                <div className="date">{formatDate(result.flightRoute[0].arrivalTime.actual)}</div>
              </div>
            </div>
            <div className="flight-status-card__row schedule-time">
              <div className="row-item-left">Scheduled Departure: {formatTime(result.flightRoute[0].departureTime.schedule)}</div>
              <div className="row-item-right">Scheduled Arrival: {formatTime(result.flightRoute[0].arrivalTime.schedule)}</div>
            </div>
          </div>
          <div className="seperator"></div>
          <div className="flight-number">
            <img src={ek} />
            <span className="text">{result.airlineDesignator} {result.flightNumber}</span>
          </div>
        </div>
      </div>
    </div>
  ));
}
