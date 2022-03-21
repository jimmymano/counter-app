import React, { Component } from "react";

class Counter extends Component {
  //1.This method returns a string of Zero or the count property
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
  //2.This method will apply classes based on state property
  getBadgeClasses() {
    let classes = "badge m-2";
    classes += this.props.counter.value === 0 ? " bg-warning" : " bg-primary";
    return classes;
  }

  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn bg-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
