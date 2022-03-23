import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  constructor() {
    super();
    console.log("App-Constructor");
  }

  componentDidMount() {
    console.log("App-Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };
  //Question for Kevin. How is the handleDelete function passing the state as a parameter?
  handleDelete = (counterId) => {
    console.log("Event handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    console.log(counters);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App-rendered");
    let sum = 0;
    this.state.counters.forEach((counter) => (sum += counter.value));
    return (
      <div className="App">
        <NavBar
          // totalCounters={this.state.counters.filter((c) => c.value > 0).length}
          totalCounters={sum}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;
