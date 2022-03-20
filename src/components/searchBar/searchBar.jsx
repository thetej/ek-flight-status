import React from "react";
import InputField from "../inputField/inputField";
import FlightCardStatus from "../flightStatusCard/flightStatusCard";
import "./searchBar.scss";
import data from "../mock-pages/status.json";

export default function SearchBar() {
  console.log(data.results[0].flightNumber);
  return (
    <div className="search-bar">
      <div className="input-holder">
        <InputField id="departure" labelText="Departure airport" />
        <InputField id="arival" labelText="Arival airport" />
        <InputField id="date" labelText="Select date" />

        <div className="btn-wrap">
          <button className="btn-primary">View Details</button>
        </div>
      </div>
      {/* {data.results.map((item) => {
        {
          console.log(item.flightNumber);
        }
        <FlightCardStatus flightNumber={item.flightNumber} />;
      })} */}
      <FlightCardStatus />;
    </div>
  );
}
