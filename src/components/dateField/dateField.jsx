import React from "react";
import "./date.scss";

class DateField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: "banana",
    };
  }


  render() {
    const { id, labelText, items = [] } = this.props;
    return (
      <div className="input-wrap">
      <input id={id} className="date-field" disabled />
      <label htmlFor={id} className="date-label">
        {`Today, ${labelText}`}
      </label>
    </div>
    );
  }
}

export default DateField;
