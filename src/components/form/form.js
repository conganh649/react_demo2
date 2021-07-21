import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  updateValue = (event) => {
    this.setState({ value: event.target.value });
  };

  handleKeyPress = (event) => {
    console.log(event.key);
  };

  submitForm = (event) => {
    event.preventDefault();
    console.log("Data to Submit:", this.state.value);
    this.setState({
      value: "",
    });
  };

  clearForm = (event) => {
    event.preventDefault();
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="form-input">
        <div className="form-input-content">
          <form onSubmit={this.submitForm}>
            <input
              type="text"
              className="form-input-input"
              placeholder="Type something"
              onChange={this.updateValue}
              onKeyPress={this.handleKeyPress}
              value={this.state.value}
            />
            <button className="form-input-button" onClick={this.submitForm}>
              Submit
            </button>

            <button className="form-input-button" onClick={this.clearForm}>
              Reset
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
