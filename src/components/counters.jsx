import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  //Question for Kevin. How is the handleDelete function passing the state as a parameter?
  handleDelete = (counterId) => {
    console.log("Event handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    console.log(counters);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
