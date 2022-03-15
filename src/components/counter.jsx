import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  //1.This method returns a string of Zero or the count property
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  //2.This method will apply classes based on state property
  getBadgeClasses() {
    let classes = "badge m-2";
    classes += this.state.count === 0 ? " bg-warning" : " bg-primary";
    return classes;
  }
  //3.This method will increment by using setState method
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
