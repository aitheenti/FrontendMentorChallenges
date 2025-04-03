import Divider from "./images/pattern-divider-desktop.svg";
import Dice from "./images/icon-dice.svg";
import AdviceSkeleton from "./AdviceSkeleton";
const Advice = ({ advice, error, generateNewAdvice, isLoading }) => {
  if (error) {
    return <h2>Something went wrong</h2>;
  }

  if (isLoading) {
    return <AdviceSkeleton />;
  }

  return (
    <>
      <div className="advice-header">advice #{advice.id}</div>
      <div className="advice-text">
        <h1>"{advice.advice}"</h1>
        <img src={Divider} alt="dice icon to generate advice" />
      </div>
      <div className="dice" onClick={generateNewAdvice}>
        <div className="dice-background"></div>
        <img src={Dice} id="dice-icon" alt="dice icon to generate advice" />
      </div>
    </>
  );
};

export default Advice;
