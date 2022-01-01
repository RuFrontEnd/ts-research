import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { isPropertySignature } from "typescript";

interface AppProps {
  color?: string; // 可以不用 color 或 color 一定要是字串
}

function App(props: AppProps) {
  const [counter, setCounter] = useState(0);

  const onIncrement = (): void => {
    setCounter((counter) => counter + 1);
  };

  const onDecrement = (): void => {
    setCounter((counter) => counter - 1);
  };

  return (
    <div className="App">
      {props.color}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      {counter}
    </div>
  );
}

export default App;
