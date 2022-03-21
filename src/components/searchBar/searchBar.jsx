import React from "react";
import InputField from "../inputField/inputField";
import DateField from "../dateField/dateField";
import FlightCardStatus from "../flightStatusCard/flightStatusCard";
import "./searchBar.scss";

class SearchBar extends React.Component {
   
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          DataisLoaded: false,
          arrival: 'LHR',
          departure: 'DXB',
          results: []
      };
  }
 
  componentDidMount() {
      fetch("https://www.emirates.com/service/airports?lang=en")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          });
          this.loadResults();  
  }
  loadResults = () => {
    const {arrival, departure} = this.state;
    let date = new Date().toJSON().slice(0, 10);
    fetch(`https://emirates.com/service/flight-status?departureDate=${date}&origin=${departure}&destination=${arrival}`)
    .then((res) => res.json())
    .then((json) => {
      // console.log((json&& json.results));
        this.setState({
            results: (json&& json.results)? json.results: [],
        });
    });
  }
  getDate(){
    let today = new Date().toUTCString().slice(5, 16);
   return  today;
  }
  handleSelect= (key,value)=> {
    this.setState({
      [key]: value
    });
  }
  render() {
    const airports = this.state.items.results;
    const {results} = this.state;
      return (
        <div className="search-bar">
        <div className="input-holder">
          <InputField id="departure" labelText="Departure airport" items={airports} onSelect={(value) => this.handleSelect('departure', value)} defaultValue={this.state.departure}/>
          <InputField id="arival" labelText="Arival airport" items={airports} onSelect={(value) => this.handleSelect('arrival', value)}  defaultValue={this.state.arrival}/>
          <DateField id="date" labelText={this.getDate()} />
  
          <div className="btn-wrap">
            <button className="btn-primary" onClick={this.loadResults}>View Details</button>
          </div>
        </div>
          {results && results.length > 0 && <FlightCardStatus  results={results}/>}
      </div>
  );
}
}
 
export default SearchBar;
