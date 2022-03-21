import React from "react";
import "./input.scss";

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: "banana",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //console.log("Fruit Selected!!");
    this.setState({ fruit: e.target.value });
  }

  render() {
    const { id, labelText, items = [], defaultValue, onSelect } = this.props;
    return (
      <div className="input-wrap">
      {/* <input id={id} className="input-field" /> */}
      {/* <label htmlFor={id} className="input-label">
        {labelText}
      </label> */}
      <select value={defaultValue} className="input-field" onChange={(e) => onSelect(e.target.value)}>
        {Object.keys(items).map(key => <option key={items[key].iataCode} value={items[key].iataCode}>{items[key].shortName}</option>)}
      </select>
    </div>
    );
  }
}

export default InputField;
