import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  //1.This method returns a string of Zero or the count property
  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  //2.This method will apply classes based on state property
  getBadgeClasses() {
    let classes = "badge m-2";
    classes += this.state.value === 0 ? " bg-warning" : " bg-primary";
    return classes;
  }
  //3.This method will increment by using setState method
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn bg-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
