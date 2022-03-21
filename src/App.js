import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </div>
  );
}

export default App;
