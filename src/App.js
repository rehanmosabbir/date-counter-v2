import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  let date = new Date();
  date.setDate(date.getDate() + count);

  function handleCountIncreament() {
    setCount((c) => c + step);
  }

  function handleCountDecrement() {
    setCount((c) => c - Number(step));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (step <= 0) return;
  }
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <br />
      <div>
        <button onClick={handleCountDecrement}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleCountIncreament}>+</button>
      </div>

      {count === 0 && <p>Today is : {date.toDateString()}</p>}
      {count > 0 && (
        <p>
          {Math.abs(count)}{" "}
          {Math.abs(count) === 1 || count === 0 ? "day" : "days"} from today is
          : {date.toDateString()}
        </p>
      )}
      {count < 0 && (
        <p>
          {Math.abs(count)}{" "}
          {Math.abs(count) === 1 || count === 0 ? "day" : "days"} before today
          is : {date.toDateString()}
        </p>
      )}
      {step !== 1 || count !== 0 ? (
        <button onClick={handleReset} type="reset">
          reset
        </button>
      ) : null}
    </form>
  );
}
