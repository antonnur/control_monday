import React from 'react';
import './App.css';
import {Counter} from "./counter/counter";
import {CounterValue} from "./counter-value/counter-value";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CounterValue/>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
