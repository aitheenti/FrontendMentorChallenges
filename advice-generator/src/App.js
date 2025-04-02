import { useState } from "react";
import "./App.css";
import Dice from "./images/icon-dice.svg";
import Divider from "./images/pattern-divider-desktop.svg";

function App() {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState(false);
  const generateNewAdvice = () => {
    try {
      fetch("https://api.adviceslip.com/advice")
        .then((resp) => {
          resp.json();
        })
        .then((data) => setAdvice(data.slip));
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="App">
      <div className="advice-card">
        {advice ? (
          <>
            <div className="advice-header">advice #{advice.id}</div>
            <div className="advice-text">
              {error ? (
                <h2>Something went wrong</h2>
              ) : (
                <h1>"{advice.advice}"</h1>
              )}
              <img src={Divider} alt="dice icon to generate advice" />
            </div>
          </>
        ) : (
          <h2 className="advice-text">Click on the dice to get some advice</h2>
        )}
        <div className="dice" onClick={() => generateNewAdvice()}>
          <div className="dice-background"></div>
          <img src={Dice} id="dice-icon" alt="dice icon to generate advice" />
        </div>
      </div>
    </div>
  );
}

export default App;
