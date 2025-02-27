import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";

const Card = () => {
  const { characterCount } = useContext(CharacterContext);
  // console.log("card rerender", characterCount);
  return (
    <>
      <div className="w-1/3">
        <div className="flex flex-col w-max">{characterCount}</div>
        <div>Total Characters</div>
      </div>
      <div className="w-1/3">
        <div className="flex flex-col w-max">{characterCount}</div>
        <div>Word Count</div>
      </div>
      <div className="w-1/3">
        <div className="flex flex-col w-max">{characterCount}</div>
        <div>Sentence Count</div>
      </div>
    </>
  );
};

export default Card;
