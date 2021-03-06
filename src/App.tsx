import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./counter/counter";
import {CounterSetting} from "./counter-value/counter-setting";

function App() {
  let [counter, setCounter] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)
  const [startValue, setStartValue] = useState<number>(0)
  const [error, setError] = useState<string | null>(null)
  const [isCounter, setIsCounter] = useState(false)

  useEffect(() => {
    if (startValue >= maxValue) {
      setError('Incorrect value!')
    } else {
      setError(null)
    }
  }, [startValue, maxValue])

  return (
    <div className="App">
      <div className="container">
        <CounterSetting
          setIsCounter={setIsCounter}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          startValue={startValue}
          setStartValue={setStartValue}
          setCounter={setCounter}
          setError={setError}/>
        <Counter
          error={error}
          counter={counter}
          setCounter={setCounter}
          maxValue={maxValue}
          startValue={startValue}
          isCounter={isCounter}/>
      </div>
    </div>
  );
}

export default App;
