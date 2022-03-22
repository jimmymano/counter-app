import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }
  componentWillUnmount() {
    console.log("Counter-Unmount");
  }

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
    console.log("Counter-rendered");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disable" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn bg-danger btn-sm "
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
