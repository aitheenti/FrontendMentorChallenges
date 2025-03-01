import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";
import Card from "./Card";
import CharacterCountPattern from "../assets/images/pattern-character-count.svg";
import SentenceCountPattern from "../assets/images/pattern-sentence-count.svg";
import WordCountPattern from "../assets/images/pattern-word-count.svg";

const DisplayCount = () => {
  const { state } = useContext(CharacterContext);
  return (
    <div className="flex h-60 items-center">
      <div className="w-1/3">
        <Card
          bgColor={"#A496F3"}
          imageSource={CharacterCountPattern}
          count={state.totalCharacterCount}
          cardDescription={"Total Characters"}
        />
      </div>
      <div className="w-1/3">
        <Card
          bgColor={"#ffc739"}
          imageSource={WordCountPattern}
          count={state.wordCount}
          cardDescription={"Word Count"}
        />
      </div>
      <div className="w-1/3">
        <Card
          bgColor={"#ffb478"}
          imageSource={SentenceCountPattern}
          count={state.sentenceCount}
          cardDescription={"Sentence Count"}
        />
      </div>
    </div>
  );
};

export default DisplayCount;
